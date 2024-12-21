'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

interface Contact {
  id: number
  name: string
  email: string
  phone: string | null
  company: string | null
  message: string
  created_at: string
}

interface Pagination {
  total: number
  page: number
  pageSize: number
  totalPages: number
}

export default function AdminPage() {
  const router = useRouter()
  const [contacts, setContacts] = useState<Contact[]>([])
  const [loading, setLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [pagination, setPagination] = useState<Pagination | null>(null)

  const fetchContacts = async (page = 1, pageSize = 10) => {
    try {
      setLoading(true)
      const token = localStorage.getItem('admin-token')
      const response = await fetch(
        `https://canghai-software.a65628853.workers.dev/api/contacts?page=${page}&pageSize=${pageSize}`,
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      )
      const data = await response.json()
      console.log('API Response:', data)
      
      if (data.success) {
        setContacts(data.contacts)
        setPagination(data.pagination)
        setCurrentPage(page)
        console.log('Pagination:', data.pagination)
      } else {
        throw new Error(data.error)
      }
    } catch (error) {
      console.error('Fetch error:', error)
      toast.error('获取数据失败')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('admin-token')
    if (!token) {
      router.replace('/admin/login')
    } else {
      setIsAuthenticated(true)
      fetchContacts(1, 10)
    }
  }, [router])

  const handleDelete = async (id: number) => {
    if (!confirm('确定要删除这条记录吗？')) return

    try {
      const token = localStorage.getItem('admin-token')
      const response = await fetch(`https://canghai-software.a65628853.workers.dev/api/contacts/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      const data = await response.json()
      
      if (data.success) {
        toast.success('删除成功')
        setContacts(contacts.filter(contact => contact.id !== id))
      } else {
        throw new Error(data.error)
      }
    } catch (error) {
      toast.error('删除失败')
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('admin-token')
    router.push('/admin/login')
  }

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > pagination?.totalPages || !pagination) return
    fetchContacts(newPage, pagination.pageSize)
  }

  const getPaginationInfo = () => {
    return {
      total: pagination?.total || 0,
      pageSize: pagination?.pageSize || 10,
      totalPages: pagination?.totalPages || 1
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
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            联系表单管理
          </h1>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => fetchContacts(pagination?.page || 1, pagination?.pageSize || 10)}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              刷新数据
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
            >
              退出登录
            </button>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        ) : contacts.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-gray-500">暂无数据</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    姓名
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    邮箱
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    电话
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    公司
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    留言内容
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    提交时间
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    操作
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {contacts.map((contact) => (
                  <motion.tr
                    key={contact.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {contact.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {contact.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {contact.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {contact.phone || '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {contact.company || '-'}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {contact.message}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {new Date(contact.created_at).toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <button
                        onClick={() => handleDelete(contact.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        删除
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {!loading && contacts.length > 0 && pagination && (
          <div className="mt-8 border-t border-gray-200 bg-white px-4 py-5 sm:px-6">
            {/* 移动端分页 */}
            <div className="flex flex-1 justify-between sm:hidden">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage <= 1}
                className={`relative inline-flex items-center space-x-2 rounded-md px-4 py-2 text-sm font-medium transition-colors
                  ${currentPage <= 1 
                    ? 'bg-gray-50 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-300'
                  }`}
              >
                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                </svg>
                <span>上一页</span>
              </button>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage >= getPaginationInfo().totalPages}
                className={`relative inline-flex items-center space-x-2 rounded-md px-4 py-2 text-sm font-medium transition-colors
                  ${currentPage >= getPaginationInfo().totalPages
                    ? 'bg-gray-50 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-300'
                  }`}
              >
                <span>下一页</span>
                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* 桌面端分页 */}
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  显示第 <span className="font-medium text-blue-600">{(currentPage - 1) * getPaginationInfo().pageSize + 1}</span> 到{' '}
                  <span className="font-medium text-blue-600">
                    {Math.min(currentPage * getPaginationInfo().pageSize, getPaginationInfo().total)}
                  </span>{' '}
                  条，共 <span className="font-medium text-blue-600">{getPaginationInfo().total}</span> 条
                </p>
              </div>
              <div>
                <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage <= 1}
                    className={`relative inline-flex items-center rounded-l-md px-3 py-2 text-sm font-medium transition-colors
                      ${currentPage <= 1
                        ? 'bg-gray-50 text-gray-400 cursor-not-allowed'
                        : 'bg-white text-gray-500 hover:bg-blue-50 hover:text-blue-600 border border-gray-300'
                      }`}
                  >
                    <span className="sr-only">上一页</span>
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                    </svg>
                  </button>
                  {Array.from({ length: getPaginationInfo().totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`relative inline-flex items-center px-4 py-2 text-sm font-medium transition-colors
                        ${currentPage === page
                          ? 'z-10 bg-blue-600 text-white border border-blue-600 hover:bg-blue-700'
                          : 'text-gray-900 border border-gray-300 hover:bg-blue-50 hover:text-blue-600'
                        }`}
                    >
                      {page}
                    </button>
                  ))}
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage >= getPaginationInfo().totalPages}
                    className={`relative inline-flex items-center rounded-r-md px-3 py-2 text-sm font-medium transition-colors
                      ${currentPage >= getPaginationInfo().totalPages
                        ? 'bg-gray-50 text-gray-400 cursor-not-allowed'
                        : 'bg-white text-gray-500 hover:bg-blue-50 hover:text-blue-600 border border-gray-300'
                      }`}
                  >
                    <span className="sr-only">下一页</span>
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                    </svg>
                  </button>
                </nav>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
} 