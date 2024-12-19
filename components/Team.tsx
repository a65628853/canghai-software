'use client'
import { motion } from 'framer-motion'

export default function Team() {
  const team = [
    {
      name: "张三",
      role: "创始人 & CEO",
      image: "/team/ceo.jpg",
      description: "拥有15年软件开发经验，曾任多家知名企业技术总监"
    },
    {
      name: "李四",
      role: "技术总监",
      image: "/team/cto.jpg",
      description: "专注于企业数字化转型，具有丰富的解决方案经验"
    },
    {
      name: "王五",
      role: "产品总监",
      image: "/team/pm.jpg",
      description: "10年产品经理经验，深谙用户需求与产品设计"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-extrabold text-gray-900">
            核心团队
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            专业的团队是我们最宝贵的财富
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-3">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative mx-auto w-48 h-48 rounded-full overflow-hidden mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600" />
                <div className="absolute inset-2 bg-white rounded-full">
                  <div className="w-full h-full flex items-center justify-center text-3xl font-bold text-blue-600">
                    {member.name[0]}
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-medium text-gray-900">
                {member.name}
              </h3>
              <p className="text-blue-600 mb-4">{member.role}</p>
              <p className="text-gray-500">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 