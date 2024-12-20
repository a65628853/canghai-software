export default {
  async fetch(request, env) {
    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 })
    }

    const data = await request.json()
    
    try {
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
          headers: { 'Content-Type': 'application/json' },
          status: 200
        }
      )
    } catch (error) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: error.message || '提交失败，请稍后重试'
        }), 
        { 
          headers: { 'Content-Type': 'application/json' },
          status: 500
        }
      )
    }
  }
} 