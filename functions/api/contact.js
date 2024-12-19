export async function onRequestPost(context) {
  const { request, env } = context;
  
  // CORS 处理
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  // 处理 OPTIONS 请求
  if (request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData = await request.json();
    
    // 基本验证
    if (!formData.name || !formData.email || !formData.message) {
      return new Response(
        JSON.stringify({ success: false, error: 'Missing required fields' }), 
        { 
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders
          }
        }
      );
    }

    // 发送邮件
    const response = await fetch('https://smtp-relay.brevo.com/v2/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': env.EMAIL_API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        sender: {
          name: 'Contact Form',
          email: env.TO_EMAIL
        },
        to: [{
          email: env.TO_EMAIL,
          name: 'Admin'
        }],
        subject: `网站联系表单 - 来自 ${formData.name}`,
        textContent: `
新的联系表单提交：

姓名: ${formData.name}
邮箱: ${formData.email}
电话: ${formData.phone || '未提供'}
公司: ${formData.company || '未提供'}

留言内容:
${formData.message}
        `,
        replyTo: {
          email: formData.email,
          name: formData.name
        }
      })
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    return new Response(
      JSON.stringify({ success: true }), 
      { 
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders
        }
      }
    );

  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }), 
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders
        }
      }
    );
  }
} 