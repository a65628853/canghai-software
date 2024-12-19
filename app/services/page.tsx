'use client'
import { motion } from 'framer-motion'
import Features from '@/components/Features'
import Solutions from '@/components/Solutions'

export default function ServicesPage() {
  const serviceCards = [
    {
      title: '专业团队',
      desc: '10年+行业经验',
      icon: (
        <svg className="h-8 w-8 mb-4 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: '优质服务',
      desc: '7×24小时支持',
      icon: (
        <svg className="h-8 w-8 mb-4 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: '成功案例',
      desc: '1000+项目经验',
      icon: (
        <svg className="h-8 w-8 mb-4 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    }
  ]

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-blue-600 via-blue-700 to-blue-800 overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-[800px] h-[800px] -top-40 -right-40 opacity-10">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#FFFFFF"
                d="M42.9,-68.5C54.1,-62.1,60.5,-47.1,65.8,-32.5C71.1,-17.9,75.2,-3.7,73.6,9.8C72,23.4,64.6,36.2,54.7,45.9C44.8,55.6,32.3,62.2,18.6,67.3C4.9,72.4,-10,76,-23.5,73.2C-37,70.4,-49.1,61.2,-57.4,49.3C-65.7,37.4,-70.2,22.8,-71.7,7.8C-73.2,-7.2,-71.8,-22.6,-65.1,-35.6C-58.4,-48.6,-46.5,-59.2,-33.4,-64.5C-20.3,-69.8,-6,-69.8,8.8,-69.8C23.6,-69.8,47.2,-69.8,42.9,-68.5Z"
              />
            </svg>
          </div>
          <div className="absolute w-[600px] h-[600px] -bottom-40 -left-40 opacity-10">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#FFFFFF"
                d="M47.7,-67.1C58.9,-62.3,63.2,-44.3,69,-27.2C74.8,-10.1,82.1,6,79.6,20.8C77.1,35.5,64.8,48.9,50.6,57.2C36.4,65.6,20.2,69,-0.2,69.2C-20.5,69.5,-41.1,66.7,-54.3,56.1C-67.5,45.5,-73.4,27.1,-74.3,9.2C-75.1,-8.7,-70.9,-26.2,-60.8,-38.9C-50.7,-51.6,-34.6,-59.5,-19.2,-62.5C-3.8,-65.5,10.9,-63.6,25.9,-63.1C40.9,-62.6,56.1,-63.5,47.7,-67.1Z"
              />
            </svg>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              产品服务
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-100">
              为企业提供全方位的软件开发和技术服务解决方案
            </p>
          </motion.div>

          {/* 服务概览卡片 */}
          <motion.div 
            className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {serviceCards.map((item, index) => (
              <div
                key={index}
                className="relative bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-white hover:bg-opacity-20 transition-all duration-300 flex flex-col items-center text-center"
              >
                {item.icon}
                <div className="text-xl font-semibold mb-2">{item.title}</div>
                <div className="text-blue-200">{item.desc}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* 波浪装饰 */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none">
            <defs>
              <path id="wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g className="parallax">
              <use href="#wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
              <use href="#wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
              <use href="#wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
              <use href="#wave" x="48" y="7" fill="#ffffff" />
            </g>
          </svg>
        </div>
      </div>

      {/* 主要内容区域 */}
      <div className="scroll-mt-16">
        <div className="relative z-10 bg-white">
          <Features />
          <Solutions />
        </div>
      </div>
    </main>
  )
} 