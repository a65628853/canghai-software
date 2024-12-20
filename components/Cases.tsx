'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Cases() {
  const cases = [
    {
      id: 1,
      title: '大型零售集团全渠道系统',
      industry: '零售行业',
      summary: '构建线上线下一体化零售系统，实现全渠道库存管理、会员营销、订单履约，年交易额突破50亿。',
      highlight: '年交易50亿+'
    },
    {
      id: 2,
      title: '智慧园区综合管理平台',
      industry: '产业园区',
      summary: '打造园区一体化管理平台，覆盖安防、能耗、物业、企业服务等场景，入驻企业满意度提升85%。',
      highlight: '满意度85%+'
    },
    {
      id: 3,
      title: '供应链协同管理系统',
      industry: '供应链',
      summary: '基于区块链技术构建供应链协同平台，打通上下游数据流，实现物流时效提升40%，成本降低25%。',
      highlight: '效率提升40%'
    },
    {
      id: 4,
      title: '政务服务一体化平台',
      industry: '政务服务',
      summary: '建设"一网通办"政务服务平台，实现90%政务服务事项在线办理，年服务企业和群众300万+。',
      highlight: '服务300万+'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900">成功案例</h2>
            <p className="mt-4 text-xl text-gray-600">用专业实力助力企业腾飞</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((item) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: item.id * 0.1 }}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full">
                      {item.industry}
                    </span>
                  </div>
                  <span className="text-lg font-bold text-blue-600">
                    {item.highlight}
                  </span>
                </div>
                <p className="text-gray-600">
                  {item.summary}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
          >
            了解更多案例
            <svg className="ml-2 -mr-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 