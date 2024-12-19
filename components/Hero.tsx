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
              <h1 className="text-6xl tracking-tight font-extrabold text-white sm:text-7xl md:text-8xl">
                <span className="block">沧海软件</span>
              </h1>
              <p className="max-w-3xl mx-auto text-xl text-blue-100">
                深耕软件开发十余载，以技术创新为企业赋能
              </p>
              <p className="max-w-2xl mx-auto text-lg text-blue-200">
                专注于软件定制开发、系统集成、技术咨询等专业服务
              </p>
            </motion.div>

            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/contact"
                  className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10 transition-all duration-300"
                >
                  立即咨询
                </Link>
                <Link
                  href="/services"
                  className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 bg-opacity-30 hover:bg-opacity-40 md:py-4 md:text-lg md:px-10 transition-all duration-300"
                >
                  了解更多
                </Link>
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