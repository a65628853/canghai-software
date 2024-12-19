'use client'
import { motion } from 'framer-motion'

export default function Stats() {
  const stats = [
    { id: 1, name: '服务客户', value: '500+', suffix: '家' },
    { id: 2, name: '项目经验', value: '1000+', suffix: '个' },
    { id: 3, name: '技术专家', value: '100+', suffix: '名' },
    { id: 4, name: '客户满意度', value: '99', suffix: '%' },
  ]

  return (
    <section className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: stat.id * 0.1 }}
            >
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}{stat.suffix}
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  )
} 