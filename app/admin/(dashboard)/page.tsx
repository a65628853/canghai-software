'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  UsersIcon, 
  EnvelopeIcon,
  Cog6ToothIcon 
} from '@heroicons/react/24/outline'

interface Stats {
  totalContacts: number
  todayContacts: number
  settings: number
}

export default function DashboardPage() {
  const [stats, setStats] = useState<Stats>({
    totalContacts: 0,
    todayContacts: 0,
    settings: 0
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem('admin-token')
        const response = await fetch('https://canghai-software.a65628853.workers.dev/api/stats', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        const data = await response.json()
        if (data.success) {
          setStats(data.stats)
        }
      } catch (error) {
        console.error('Failed to fetch stats:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  const statCards = [
    {
      title: '总联系表单',
      value: stats.totalContacts,
      icon: EnvelopeIcon,
      color: 'bg-blue-500'
    },
    {
      title: '今日新增',
      value: stats.todayContacts,
      icon: UsersIcon,
      color: 'bg-green-500'
    },
    {
      title: '系统配置',
      value: stats.settings,
      icon: Cog6ToothIcon,
      color: 'bg-purple-500'
    }
  ]

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            控制台
          </h1>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {statCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{card.title}</p>
                    <p className="mt-2 text-3xl font-bold text-gray-900">{card.value}</p>
                  </div>
                  <div className={`p-3 rounded-lg ${card.color}`}>
                    <card.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
} 