'use client'
import { motion } from 'framer-motion'

export default function Culture() {
  const values = [
    {
      title: "创新",
      description: "持续探索新技术，追求卓越的创新精神"
    },
    {
      title: "专注",
      description: "专注于技术领域，深耕行业解决方案"
    },
    {
      title: "协作",
      description: "团队协作，共同成长，追求共赢"
    },
    {
      title: "责任",
      description: "对客户负责，对社会负责，践行企业责任"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-extrabold text-gray-900">
            企业文化
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            以人为本，追求卓越，持续创新
          </p>
        </motion.div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-24 w-24 rounded-full bg-blue-100 opacity-50"></div>
                  </div>
                  <div className="relative flex items-center justify-center h-24">
                    <span className="text-4xl font-bold text-blue-600">
                      {value.title}
                    </span>
                  </div>
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 