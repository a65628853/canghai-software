import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '沧海软件 - 专业的软件开发服务商',
  description: '专注于提供软件定制开发、系统集成、技术咨询等专业服务，助力企业实现数字化转型',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  )
} 