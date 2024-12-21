'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import toast from 'react-hot-toast'

// 修改输入框样式类
const inputClasses = `
  mt-1 block w-full rounded-md border border-gray-300
  pl-10 pr-8 py-2
  text-gray-900 placeholder-gray-400
  focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500
  transition-all duration-200
`

// 修改标签样式类
const labelClasses = `
  block text-sm font-medium text-gray-700 mb-1
  after:content-['*'] after:ml-0.5 after:text-red-500
`

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: ''
  })

  const contactInfo = [
    {
      title: "电话咨询",
      value: "400-XXX-XXXX",
      description: "周一至周五 9:00-18:00",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      title: "邮件联系",
      value: "a65628853@outlook.com",
      description: "7x24小时邮件支持",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "公司地址",
      value: "XX省XX市XX区",
      description: "欢迎来访交流",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ loading: true, success: false, error: '' })
    
    try {
      const response = await fetch('https://canghai-software.a65628853.workers.dev/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      const result = await response.json()

      if (result.success) {
        setStatus({ loading: false, success: true, error: '' })
        setFormData({ name: '', email: '', phone: '', company: '', message: '' })
        toast.success('感谢您的留言，我们会尽快与您联系！', {
          duration: 3000,
          position: 'top-center',
          style: {
            background: '#4CAF50',
            color: '#fff',
            padding: '16px',
            borderRadius: '8px',
          },
          icon: '👋',
        })
      } else {
        throw new Error(result.error || '提交失败，请稍后重试')
      }
    } catch (error: unknown) {
      setStatus({ 
        loading: false, 
        success: false, 
        error: error instanceof Error ? error.message : '提交失败，请稍后重试'
      })
      toast.error(error instanceof Error ? error.message : '提交失败，请稍后重试', {
        duration: 3000,
        position: 'top-center',
        style: {
          background: '#f44336',
          color: '#fff',
          padding: '16px',
          borderRadius: '8px',
        },
        icon: '❌',
      })
    }
  }

  return (
    <section className="relative py-20 overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1 
            className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            联系我们
          </motion.h1>
          <motion.p 
            className="mt-4 max-w-3xl mx-auto text-xl text-gray-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            如果您有任何问题或需求，请随时与我们联系
          </motion.p>
        </div>

        {/* 联系方式 */}
        <motion.div 
          className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-blue-600 mb-4">
                {info.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {info.title}
              </h3>
              <p className="text-lg font-medium text-gray-900 mb-1">
                {info.value}
              </p>
              <p className="text-gray-500">
                {info.description}
              </p>
            </div>
          ))}
        </motion.div>

        {/* 联系表单 */}
        <motion.div 
          className="mt-20 bg-white rounded-2xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 sm:p-12 bg-blue-600">
              <h3 className="text-2xl font-bold text-white mb-4">
                让我们开始对话
              </h3>
              <p className="text-blue-100 mb-8">
                填写以下表单，我们的专业团队将尽快与您联系，为您提供专业的解决方案。
              </p>
              <ul className="space-y-4 text-blue-100">
                <li className="flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  专业的技术咨询
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  定制化解决方案
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  快速响应服务
                </li>
              </ul>
            </div>
            <div className="p-8 sm:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={labelClasses}>
                      姓名
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={inputClasses}
                        placeholder="请输入您的姓名"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      公司名称
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className={inputClasses}
                        placeholder="请输入公司名称（选填）"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className={labelClasses}>
                      邮箱
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={inputClasses}
                        placeholder="请输入您的邮箱"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      电话
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={inputClasses}
                        placeholder="请输入您的电话（选填）"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className={labelClasses}>
                    留言内容
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`${inputClasses} min-h-[120px]`}
                      placeholder="请输入您的留言内容"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={status.loading}
                    className={`w-full flex justify-center items-center px-6 py-2
                      bg-blue-600 text-white text-base font-medium rounded-md
                      ${status.loading ? 'opacity-75 cursor-not-allowed' : 'hover:bg-blue-700'}
                      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                      transition-colors duration-300`}
                  >
                    {status.loading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        提交中...
                      </>
                    ) : '提交'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 