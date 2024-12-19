'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function News() {
  const news = [
    {
      id: 1,
      title: 'Spring Cloud Gateway 动态路由实践',
      date: '2023-12-20',
      category: '微服务',
      summary: '介绍在微服务架构中实现动态路由配置的解决方案，包括配置中心集成、路由规则管理、灰度发布等实用场景...'
    },
    {
      id: 2,
      title: 'MySQL 分库分表实战：从设计到实现',
      date: '2023-11-15',
      category: '数据库',
      summary: '详解大规模数据下的分库分表方案，包括分片策略、数据迁移、分布式事务处理、SQL路由实现等核心技术点...'
    },
    {
      id: 3,
      title: 'React + TypeScript 工程化实践',
      date: '2023-10-25',
      category: '前端开发',
      summary: '分享大型前端项目的工程化实践，包括项目架构、状态管理、组件设计、性能优化、自动化测试等最佳实践...'
    },
    {
      id: 4,
      title: 'Kafka 在大数据实时处理中的应用',
      date: '2023-12-05',
      category: '中间件',
      summary: '深入剖析 Kafka 在实时数据处理中的最佳实践，包括集群架构、性能调优、消息压缩、监控告警、容灾备份等方案...'
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
            <h2 className="text-3xl font-bold text-gray-900">技术动态</h2>
            <p className="mt-4 text-xl text-gray-600">分享实战经验，探讨技术难点</p>
          </motion.div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {news.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <Link href={`/news/${item.id}`} className="block p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 text-sm text-blue-600 bg-blue-50 rounded-full">
                    {item.category}
                  </span>
                  <time className="text-sm text-gray-500">{item.date}</time>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {item.summary}
                </p>
                <div className="flex items-center text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                  <span className="text-sm font-medium">阅读全文</span>
                  <svg 
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/news"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105"
          >
            <span>更多技术文章</span>
            <svg 
              className="w-5 h-5 ml-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
} 