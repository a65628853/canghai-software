'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const navigation = {
    solutions: [
      { name: '软件定制开发', href: '/services#custom' },
      { name: '系统集成服务', href: '/services#integration' },
      { name: '技术咨询服务', href: '/services#consulting' },
      { name: '运维支持服务', href: '/services#operation' },
      { name: '数字化转型', href: '/services#digital' },
    ],
    company: [
      { name: '公司简介', href: '/about#about' },
      { name: '企业文化', href: '/about#culture' },
      { name: '技术团队', href: '/about#team' },
      { name: '发展历程', href: '/about#history' },
    ],
    support: [
      { name: '技术支持', href: '/contact' },
      { name: '在线咨询', href: '/contact#online' },
      { name: '项目合作', href: '/contact#cooperation' },
      { name: '加入我们', href: '/contact#jobs' },
    ],
  }

  return (
    <footer className="bg-[#1a1f2e]">
      <div className="max-w-7xl mx-auto">
        {/* 主要内容区 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 px-6 py-16">
          {/* Logo 和联系信息 */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-10 h-10 overflow-hidden rounded-lg bg-white bg-opacity-10 p-1">
                <Image
                  src="/logo.svg"
                  alt="沧海软件"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-2xl font-bold text-white">沧海软件</span>
            </Link>
            <p className="text-gray-400">
              专业的软件开发服务商，为企业提供全方位的技术解决方案
            </p>
            <div className="pt-4">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                联系方式
              </h3>
              <div className="space-y-3 text-gray-400">
                <p className="flex items-center space-x-3">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>400-XXX-XXXX</span>
                </p>
                <p className="flex items-center space-x-3">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>a65628853@outlook.com</span>
                </p>
              </div>
            </div>
          </div>

          {/* 产品服务 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              产品服务
            </h3>
            <ul className="space-y-3">
              {navigation.solutions.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                    scroll={true}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 关于我们 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              关于我们
            </h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                    scroll={true}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 支持与服务 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              支持与服务
            </h3>
            <ul className="space-y-3">
              {navigation.support.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                    scroll={true}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 底部版权信息 */}
        <div className="border-t border-gray-800">
          <div className="px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400">
                © {new Date().getFullYear()} 沧海软件. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 mt-4 md:mt-0">
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  服务条款
                </Link>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  隐私政策
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 备案信息 */}
        <div className="border-t border-gray-800/50">
          <div className="px-6 py-4">
            <p className="text-center text-gray-500 text-sm">
              <a
                href="https://beian.miit.gov.cn/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors"
              >
                沪ICP备XXXXXXXX号-1
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 