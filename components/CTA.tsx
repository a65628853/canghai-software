import Link from 'next/link'

export default function CTA() {
  return (
    <section className="relative bg-blue-600">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-700 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                <span className="block">准备好开始了吗？</span>
                <span className="block text-blue-200">联系我们，开启数字化转型之旅</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-blue-200">
                我们的专业团队随时为您提供咨询服务，为您的企业定制最适合的解决方案。
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                立即咨询
              </Link>
            </div>
          </div>
          <div className="relative -mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
            <div className="transform -translate-y-6 translate-x-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20">
              {/* 这里可以放置一个装饰性图形或图片 */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-20 rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 