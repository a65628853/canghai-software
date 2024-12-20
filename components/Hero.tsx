'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 overflow-hidden pt-16 scroll-mt-16">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* 动态波纹效果 */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-blue-300 rounded-full animate-ping" style={{ animationDuration: '2.5s' }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-5 h-5 bg-blue-200 rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>
        </div>
      </div>

      <div className="relative h-[calc(100vh-4rem)] flex flex-col items-center justify-center">
        <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center space-y-16">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <h1 className="text-5xl tracking-tight font-extrabold text-white sm:text-6xl md:text-7xl">
                <span className="block">智造数字未来</span>
                <span className="block text-blue-200 mt-2">创新科技价值</span>
              </h1>
              <p className="max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl text-blue-100">
                深耕企业数字化建设，打造行业领先解决方案
              </p>
              <p className="max-w-2xl mx-auto text-base sm:text-lg text-blue-200">
                十年技术积淀，为企业提供全方位的软件开发与数字化转型服务
              </p>
              <div className="mt-8">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 border border-transparent text-base sm:text-lg font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 transition-colors duration-300"
                  >
                    咨询解决方案
                    <svg className="ml-2 -mr-1 w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* 服务特点卡片 */}
          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {[
              { 
                title: '技术创新', 
                desc: '持续研发投入，掌握行业前沿技术' 
              },
              { 
                title: '专业服务', 
                desc: '全周期项目管理，7×24小时技术支持' 
              },
              { 
                title: '优质团队', 
                desc: '资深研发工程师，丰富项目交付经验' 
              }
            ].map((item, index) => (
              <div
                key={index}
                className="relative bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 text-white hover:bg-opacity-20 transition-all duration-300"
              >
                <div className="text-xl font-semibold mb-3">{item.title}</div>
                <div className="text-blue-200">{item.desc}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* 底部波浪效果 */}
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
  )
} 