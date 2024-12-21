export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">
          隐私政策
        </h1>
        
        <div className="prose prose-blue max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. 信息收集</h2>
            <p className="text-gray-600 mb-4">
              我们仅收集必要的个人信息，包括但不限于：姓名、联系方式、公司信息等。这些信息用于提供更好的服务和体验。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. 信息使用</h2>
            <p className="text-gray-600 mb-4">
              收集的信息仅用于：
            </p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>提供和改进我们的服务</li>
              <li>与您联系并提供支持</li>
              <li>发送服务相关通知</li>
              <li>防止欺诈和提升安全性</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. 信息保护</h2>
            <p className="text-gray-600 mb-4">
              我们采用业界标准的安全措施保护您的个人信息，防止未经授权的访问、使用或泄露。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. 信息共享</h2>
            <p className="text-gray-600 mb-4">
              除非经过您的明确同意或法律要求，我们不会与任何第三方分享您的个人信息。
            </p>
          </section>
        </div>
      </div>
    </main>
  )
} 