import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // 检查是否是管理页面
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // 如果是登录页面，直接放行
    if (request.nextUrl.pathname === '/admin/login') {
      return NextResponse.next()
    }

    // 如果是管理页面但不是登录页，检查是否有 token
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('admin-token')
      if (!token) {
        return NextResponse.redirect(new URL('/admin/login', request.url))
      }
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*']
} 