'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

interface Setting {
  id: number
  key: string
  value: string
  description: string
  updated_at: string
}

export default function SettingsPage() {
  const router = useRouter()
  const [settings, setSettings] = useState<Setting[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('admin-token')
    if (!token) {
      router.replace('/admin/login')
    } else {
      setIsAuthenticated(true)
      fetchSettings()
    }
  }, [router])

  const fetchSettings = async () => {
    try {
      const token = localStorage.getItem('admin-token')
      const response = await fetch('https://canghai-software.a65628853.workers.dev/api/settings', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      const data = await response.json()
      
      if (data.success) {
        setSettings(data.settings)
      } else {
        throw new Error(data.error)
      }
    } catch (error) {
      toast.error('获取设置失败')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (key: string, value: string) => {
    setSettings(settings.map(setting => 
      setting.key === key ? { ...setting, value } : setting
    ))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    try {
      const token = localStorage.getItem('admin-token')
      const response = await fetch('https://canghai-software.a65628853.workers.dev/api/settings', {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ settings })
      })
      const data = await response.json()
      
      if (data.success) {
        toast.success('保存成功')
      } else {
        throw new Error(data.error)
      }
    } catch (error) {
      toast.error('保存失败')
    } finally {
      setSaving(false)
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <main className="py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            系统设置
          </h1>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 bg-white shadow rounded-lg p-6">
            {settings.map((setting) => (
              <div key={setting.id}>
                <label htmlFor={setting.key} className="block text-sm font-medium text-gray-700">
                  {setting.description}
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id={setting.key}
                    name={setting.key}
                    value={setting.value}
                    onChange={(e) => handleChange(setting.key, e.target.value)}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  最后更新: {new Date(setting.updated_at).toLocaleString()}
                </p>
              </div>
            ))}
            
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={saving}
                className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                  saving ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {saving ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    保存中...
                  </>
                ) : '保存设置'}
              </button>
            </div>
          </form>
        )}
      </div>
    </main>
  )
} 