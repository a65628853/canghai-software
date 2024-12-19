'use client'
import { motion } from 'framer-motion'

export default function History() {
  const milestones = [
    {
      year: "2020",
      title: "公司成立",
      description: "沧海软件正式成立，开始专注于企业数字化转型服务"
    },
    {
      year: "2021",
      title: "快速发展",
      description: "成功服务超过100家企业客户，团队规模扩大到50人"
    },
    {
      year: "2022",
      title: "技术创新",
      description: "推出自主研发的数字化转型解决方案，获得多项技术专利"
    },
    {
      year: "2023",
      title: "行业领先",
      description: "成为行业领先的数字化转型服务商，服务客户超过500家"
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
            发展历程
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            见证我们的成长与进步
          </p>
        </motion.div>

        <div className="mt-20">
          <div className="relative">
            {/* 时间线 */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-blue-600 text-white font-bold shadow">
                      {milestone.year.slice(2)}
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-medium text-gray-900">
                      {milestone.title}
                    </h3>
                    <p className="mt-2 text-gray-500">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 