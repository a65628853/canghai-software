// 配置项
const CONFIG = {
  EMAIL: 'a65628853@outlook.com',
  EMAIL_PASSWORD: 'your_email_password',  // 邮箱密码或应用专用密码
  CORS_ORIGINS: ['https://your-domain.com', 'http://localhost:3000']
}

// 处理 CORS
function handleCORS(request) {
  const origin = request.headers.get('Origin')
  if (!CONFIG.CORS_ORIGINS.includes(origin)) {
    return new Response('Not Allowed', { status: 403 })
  }

  const corsHeaders = {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
  }

  return corsHeaders
}

// 发送邮件
async function sendEmail(formData) {
  const { name, email, phone, company, message } = formData

  const emailContent = `
新的联系表单提交：

姓名: ${name}
邮箱: ${email}
电话: ${phone || '未提供'}
公司: ${company || '未提供'}

留言内容:
${message}
  `

  // 使用 Outlook SMTP
  const response = await fetch('https://smtp-relay.brevo.com/v2/smtp/email', {
    method: 'POST',
    headers: {
      'api-key': CONFIG.EMAIL_PASSWORD,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      sender: {
        name: 'Contact Form',
        email: CONFIG.EMAIL
      },
      to: [{
        email: CONFIG.EMAIL,
        name: 'Admin'
      }],
      subject: `网站联系表单 - 来自 ${name}`,
      textContent: emailContent,
      replyTo: {
        email: email,
        name: name
      }
    })
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(`Failed to send email: ${error.message}`)
  }

  return true
}

// 主处理函数
async function handleRequest(request) {
  // 处理 OPTIONS 请求
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      headers: handleCORS(request)
    })
  }

  // 只允许 POST 请求
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 })
  }

  try {
    // 获取表单数据
    const formData = await request.json()

    // 基本验证
    if (!formData.name || !formData.email || !formData.message) {
      return new Response('Missing required fields', { 
        status: 400,
        headers: handleCORS(request)
      })
    }

    // 发送邮件
    await sendEmail(formData)

    // 返回成功响应
    return new Response(JSON.stringify({ success: true }), {
      headers: {
        'Content-Type': 'application/json',
        ...handleCORS(request)
      }
    })

  } catch (error) {
    // 错误处理
    return new Response(JSON.stringify({ 
      success: false, 
      error: error.message 
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        ...handleCORS(request)
      }
    })
  }
}

// 注册 Worker
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
}) 