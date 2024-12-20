'use client'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // 监听路由变化，自动关闭菜单
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const isActive = (path: string) => {
    // 处理首页
    if (path === '/') {
      return pathname === '/' 
        ? 'text-blue-600 font-medium border-b-2 border-blue-600 pb-0.5'
        : 'text-gray-700 hover:text-blue-600 transition-colors duration-200'
    }
    
    // 处理其他页面，检查 pathname 是否以 path 开头
    return pathname.startsWith(path)
      ? 'text-blue-600 font-medium border-b-2 border-blue-600 pb-0.5'
      : 'text-gray-700 hover:text-blue-600 transition-colors duration-200'
  }

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.svg"
                alt="沧海软件"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-2xl font-bold text-blue-600">沧海软件</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`${isActive('/')} py-2`}>
              首页
            </Link>
            <Link href="/services" className={`${isActive('/services')} py-2`}>
              解决方案
            </Link>
            <Link href="/about" className={`${isActive('/about')} py-2`}>
              关于我们
            </Link>
            <Link href="/contact" className={`${isActive('/contact')} py-2`}>
              联系我们
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        } md:hidden fixed top-16 right-0 bottom-0 w-full bg-white transform transition-all duration-300 ease-in-out z-50`}
      >
        <div className="pt-2 pb-3 space-y-1">
          <Link
            href="/"
            className={`block px-4 py-3 text-base font-medium ${
              pathname === '/' 
                ? 'text-blue-600 bg-blue-50'
                : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
            }`}
          >
            首页
          </Link>
          <Link
            href="/services"
            className={`block px-4 py-3 text-base font-medium ${
              pathname.startsWith('/services')
                ? 'text-blue-600 bg-blue-50'
                : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
            }`}
          >
            解决方案
          </Link>
          <Link
            href="/about"
            className={`block px-4 py-3 text-base font-medium ${
              pathname.startsWith('/about')
                ? 'text-blue-600 bg-blue-50'
                : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
            }`}
          >
            关于我们
          </Link>
          <Link
            href="/contact"
            className={`block px-4 py-3 text-base font-medium ${
              pathname.startsWith('/contact')
                ? 'text-blue-600 bg-blue-50'
                : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
            }`}
          >
            联系我们
          </Link>
        </div>
      </div>
    </nav>
  )
} 