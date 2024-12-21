'use client'
import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { 
  HomeIcon, 
  Cog6ToothIcon,
  ArrowLeftOnRectangleIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline'

const menuItems = [
  {
    name: '控制台',
    href: '/admin',
    icon: HomeIcon
  },
  {
    name: '联系表单管理',
    href: '/admin/contacts',
    icon: EnvelopeIcon
  },
  {
    name: '系统设置',
    href: '/admin/settings',
    icon: Cog6ToothIcon
  }
]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkAuth = () => {
      if (pathname === '/admin/login' || pathname === '/admin/login/') {
        setIsLoading(false)
        return
      }

      const token = localStorage.getItem('admin-token')
      if (!token) {
        router.replace('/admin/login')
      } else {
        setIsAuthenticated(true)
      }
      setIsLoading(false)
    }

    checkAuth()
  }, [router, pathname])

  const handleLogout = () => {
    localStorage.removeItem('admin-token')
    setIsAuthenticated(false)
    router.replace('/admin/login')
  }

  if (pathname === '/admin/login' || pathname === '/admin/login/') {
    return children
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!isAuthenticated && pathname !== '/admin/login') {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 侧边栏 */}
      <div className="fixed inset-y-0 left-0 w-64 bg-white border-r border-gray-200 shadow-sm">
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center h-16 px-6 border-b border-gray-200">
            <Image 
              src="/logo.svg" 
              alt="Logo" 
              width={32} 
              height={32} 
              className="mr-3"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              管理后台
            </span>
          </div>

          {/* 菜单 */}
          <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
            {menuItems.map((item) => {
              const isActive = item.href === '/admin' 
                ? pathname === '/admin'
                : pathname.startsWith(item.href)
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                  }`}
                >
                  <item.icon className={`flex-shrink-0 mr-3 h-5 w-5 transition-colors duration-200 ${
                    isActive ? 'text-blue-700' : 'text-gray-400 group-hover:text-blue-600'
                  }`} />
                  {item.name}
                </Link>
              )
            })}
          </nav>

          {/* 退出按钮 */}
          <div className="p-4 border-t border-gray-200">
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-3 py-2.5 text-sm font-medium text-gray-700 rounded-lg hover:bg-red-50 hover:text-red-600 transition-all duration-200 group"
            >
              <ArrowLeftOnRectangleIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-red-600 transition-colors duration-200" />
              退出登录
            </button>
          </div>
        </div>
      </div>

      {/* 主内容区 */}
      <div className="pl-64">
        <div className="min-h-screen p-8">
          {children}
        </div>
      </div>
    </div>
  )
} 