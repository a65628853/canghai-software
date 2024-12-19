'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function About() {
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
            关于我们
          </motion.h1>
          <motion.p 
            className="mt-4 max-w-3xl mx-auto text-xl text-gray-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            沧海软件是一家专注于企业数字化转型的技术服务公司，致力于为客户提供专业的软件开发和技术解决方案
          </motion.p>
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 左侧：我们的使命 */}
          <motion.div 
            className="bg-white rounded-2xl shadow-lg p-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">我们的使命</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-600">
                  <span className="font-medium text-gray-900">技术赋能：</span>
                  通过创新的技术解决方案，助力企业实现数字化转型，提升运营效率，创造更大的商业价值。
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-600">
                  <span className="font-medium text-gray-900">客户至上：</span>
                  始终坚持以客户需求为导向，提供专业、可靠的技术服务，与客户共同成长。
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-600">
                  <span className="font-medium text-gray-900">持续创新：</span>
                  不断探索和应用新技术，为客户提供更高效、更智能的解决方案。
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-600">
                  <span className="font-medium text-gray-900">品质承诺：</span>
                  严格的质量管理体系，确保每个项目的交付质量，为客户创造长期价值。
                </p>
              </div>
            </div>
            <div className="mt-8">
              <Link 
                href="/contact"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                了解更多
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>

          {/* 右侧：CEO 引用 */}
          <motion.div 
            className="bg-blue-600 rounded-2xl p-8 text-white"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="h-full flex flex-col justify-center">
              <blockquote>
                <svg
                  className="h-12 w-12 text-blue-400 mb-6"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-xl leading-relaxed mb-6">
                  创新是发展的动力，技术是进步的阶梯。我们致力于用科技改变世界，让数字化为企业赋能。在数字化转型的浪潮中，我们将始终与客户并肩前行，共创美好未来。
                </p>
                <footer>
                  <p className="text-lg font-semibold">张总</p>
                  <p className="text-blue-200">沧海软件 CEO</p>
                </footer>
              </blockquote>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 