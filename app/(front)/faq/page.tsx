'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "你们提供哪些类型的软件开发服务？",
      answer: "我们提供全方位的软件开发服务，包括企业管理系统(ERP)、电商平台开发、数据分析平台、移动应用开发等。我们的团队可以根据客户需求提供定制化的解决方案。"
    },
    {
      question: "开发周期一般是多久？",
      answer: "开发周期取决于项目的规模和复杂度。一般小型项目1-3个月，中型项目3-6个月，大型项目6个月以上。我们会在项目启动前提供详细的时间规划。"
    },
    {
      question: "提供售后服务吗？",
      answer: "是的，我们提供完善的售后服务。包括系统维护、技术支持、问题修复等。我们提供7x24小时技术支持，确保系统稳定运行。"
    },
    {
      question: "如何保证项目质量？",
      answer: "我们有严格的质量管理体系，包括需求分析、设计评审、代码审查、测试验证等环节。同时我们采用敏捷开发方法，确保及时响应客户需求变化。"
    },
    {
      question: "开发费用如何计算？",
      answer: "费用根据项目具体需求、开发周期、技术难度等因素综合评估。我们会提供详细的报价方案，包括开发费用、维护费用等，确保费用透明合理。"
    }
  ]

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">
          常见问题
        </h1>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 focus:outline-none flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                <svg
                  className={`h-5 w-5 text-gray-500 transform transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
} 