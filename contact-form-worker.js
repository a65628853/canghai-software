export default {
  async fetch(request, env) {
    // CORS headers
    const corsHeaders = {
      'Access-Control-Allow-Origin': 'https://canghai-software.pages.dev',
      'Content-Type': 'application/json'
    }

    // 处理 CORS 预检请求
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          ...corsHeaders,
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Max-Age': '86400',
        }
      })
    }

    // 处理实际的 POST 请求
    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 })
    }

    try {
      // 验证数据库是否正确绑定
      if (!env.DB) {
        throw new Error('Database not configured')
      }

      const data = await request.json()
      
      // 基本验证
      if (!data.name || !data.email || !data.message) {
        throw new Error('Missing required fields')
      }

      // 插入数据到 D1 数据库
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
        JSON.stringify({ 
          success: true,
          message: '表单提交成功'
        }), 
        { 
          headers: corsHeaders,
          status: 200
        }
      )
    } catch (error) {
      console.error('Error:', error)
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: error.message || '提交失败，请稍后重试',
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