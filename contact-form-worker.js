export default {
  async fetch(request, env) {
    // 允许所有域名的 CORS 配置
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',  // 允许所有域名
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Max-Age': '86400',
      'Content-Type': 'application/json'
    }

    // 处理 CORS 预检请求
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders })
    }

    const url = new URL(request.url)
    const path = url.pathname

    try {
      // 验证数据库是否正确绑定
      if (!env.DB) {
        throw new Error('Database not configured')
      }

      // 验证 token 的函数
      const validateToken = async (request) => {
        const authHeader = request.headers.get('Authorization')
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
          return false
        }
        const token = authHeader.split(' ')[1]
        // 从 KV 中获取 token
        const storedToken = await env.ADMIN_TOKENS.get(token)
        return storedToken !== null
      }

      // 获取所有联系记录
      if (path === '/api/contacts' && request.method === 'GET') {
        if (!await validateToken(request)) {
          return new Response(
            JSON.stringify({ success: false, error: '未授权' }), 
            { headers: corsHeaders, status: 401 }
          )
        }

        // 获取分页参数
        const params = new URL(request.url).searchParams
        const page = parseInt(params.get('page') || '1')
        const pageSize = parseInt(params.get('pageSize') || '10')
        const offset = (page - 1) * pageSize

        try {
          // 获取总记录数
          const { total } = await env.DB
            .prepare('SELECT COUNT(*) as total FROM contacts')
            .first()

          // 获取分页数据
          const { results } = await env.DB
            .prepare(`
              SELECT * FROM contacts 
              ORDER BY created_at DESC 
              LIMIT ? OFFSET ?
            `)
            .bind(pageSize, offset)
            .all()
          
          // 确保返回正确的分页信息
          return new Response(
            JSON.stringify({ 
              success: true, 
              contacts: results,
              pagination: {
                total: Number(total),  // 确保是数字类型
                page,
                pageSize,
                totalPages: Math.ceil(Number(total) / pageSize)
              }
            }), 
            { headers: corsHeaders }
          )
        } catch (error) {
          console.error('Database error:', error)
          return new Response(
            JSON.stringify({ 
              success: false, 
              error: 'Database error',
              details: error.message 
            }), 
            { 
              headers: corsHeaders,
              status: 500
            }
          )
        }
      }

      // 删除指定记录
      if (path.match(/^\/api\/contacts\/\d+$/) && request.method === 'DELETE') {
        if (!await validateToken(request)) {
          return new Response(
            JSON.stringify({ success: false, error: '未授权' }), 
            { headers: corsHeaders, status: 401 }
          )
        }

        const id = path.split('/').pop()
        await env.DB
          .prepare('DELETE FROM contacts WHERE id = ?')
          .bind(id)
          .run()
        
        return new Response(
          JSON.stringify({ success: true }), 
          { headers: corsHeaders }
        )
      }

      // 提交新的联系表单
      if (path === '/api/contact' && request.method === 'POST') {
        const data = await request.json()
        
        if (!data.name || !data.email || !data.message) {
          throw new Error('Missing required fields')
        }

        const stmt = env.DB.prepare(`
          INSERT INTO contacts (name, email, phone, company, message)
          VALUES (?, ?, ?, ?, ?)
        `)

        await stmt.bind(
          data.name,
          data.email,
          data.phone || null,
          data.company || null,
          data.message
        ).run()

        return new Response(
          JSON.stringify({ success: true, message: '表单提交成功' }), 
          { headers: corsHeaders }
        )
      }

      // 登录处理
      if (path === '/api/admin/login' && request.method === 'POST') {
        const { password } = await request.json()
        
        if (password === env.ADMIN_PASSWORD) {
          // 生成 token
          const token = crypto.randomUUID()
          
          // 存储 token 到 KV，设置 24 小时过期
          await env.ADMIN_TOKENS.put(token, 'valid', {
            expirationTtl: 86400 // 24小时
          })
          
          return new Response(
            JSON.stringify({ 
              success: true, 
              token 
            }), 
            { headers: corsHeaders }
          )
        }
        
        return new Response(
          JSON.stringify({ 
            success: false, 
            error: '密码错误' 
          }), 
          { 
            headers: corsHeaders,
            status: 401 
          }
        )
      }

      // 获取所有设置
      if (path === '/api/settings' && request.method === 'GET') {
        if (!await validateToken(request)) {
          return new Response(
            JSON.stringify({ success: false, error: '未授权' }), 
            { headers: corsHeaders, status: 401 }
          )
        }

        const { results } = await env.DB
          .prepare('SELECT * FROM settings ORDER BY id ASC')
          .all()
        
        return new Response(
          JSON.stringify({ success: true, settings: results }), 
          { headers: corsHeaders }
        )
      }

      // 更新设置
      if (path === '/api/settings' && request.method === 'PUT') {
        if (!await validateToken(request)) {
          return new Response(
            JSON.stringify({ success: false, error: '未授权' }), 
            { headers: corsHeaders, status: 401 }
          )
        }

        const data = await request.json()
        const settings = data.settings

        try {
          for (const setting of settings) {
            await env.DB
              .prepare('UPDATE settings SET value = ?, updated_at = CURRENT_TIMESTAMP WHERE key = ?')
              .bind(setting.value, setting.key)
              .run()
          }

          return new Response(
            JSON.stringify({ success: true }), 
            { headers: corsHeaders }
          )
        } catch (error) {
          return new Response(
            JSON.stringify({ success: false, error: '更新失败' }), 
            { headers: corsHeaders, status: 500 }
          )
        }
      }

      // 获取统计数据
      if (path === '/api/stats' && request.method === 'GET') {
        if (!await validateToken(request)) {
          return new Response(
            JSON.stringify({ success: false, error: '未授权' }), 
            { headers: corsHeaders, status: 401 }
          )
        }

        try {
          // 获取总联系表单数
          const { total } = await env.DB
            .prepare('SELECT COUNT(*) as total FROM contacts')
            .first()

          // 获取今日新增数（使用 SQLite 的日期函数）
          const { today } = await env.DB
            .prepare(`
              SELECT COUNT(*) as today 
              FROM contacts 
              WHERE date(created_at) = date('now')
            `)
            .first()

          // 获取设置项数量
          const { settings } = await env.DB
            .prepare('SELECT COUNT(*) as settings FROM settings')
            .first()

          return new Response(
            JSON.stringify({ 
              success: true, 
              stats: {
                totalContacts: Number(total || 0),
                todayContacts: Number(today || 0),
                settings: Number(settings || 0)
              }
            }), 
            { headers: corsHeaders }
          )
        } catch (error) {
          console.error('Database error:', error)
          return new Response(
            JSON.stringify({ 
              success: false, 
              error: 'Database error',
              details: error.message 
            }), 
            { headers: corsHeaders, status: 500 }
          )
        }
      }

      return new Response('Not Found', { status: 404, headers: corsHeaders })
    } catch (error) {
      console.error('Error:', error)
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: error.message || '操作失败，请稍后重试',
          details: env.DB ? 'DB is bound' : 'DB is not bound'
        }), 
        { 
          headers: corsHeaders,
          status: 500
        }
      )
    }
  }
} 