export default function TermsPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">
          服务条款
        </h1>
        
        <div className="prose prose-blue max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. 服务内容</h2>
            <p className="text-gray-600 mb-4">
              沧海软件提供包括但不限于软件开发、系统集成、技术咨询等服务。我们保证所提供的服务符合国家相关法律法规的要求。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. 知识产权</h2>
            <p className="text-gray-600 mb-4">
              除非另有约定，我们为客户开发的软件及相关技术文档的知识产权归客户所有。我们承诺尊重并保护客户的知识产权。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. 保密义务</h2>
            <p className="text-gray-600 mb-4">
              我们承诺对在服务过程中获知的客户商业秘密严格保密，未经客户书面同意，不得向第三方披露。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. 服务质量</h2>
            <p className="text-gray-600 mb-4">
              我们承诺提供高质量的服务，如出现质量问题，我们将及时进行修复和完善，直至满足约定的质量标准。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. 其他条款</h2>
            <p className="text-gray-600 mb-4">
              本服务条款的最终解释权归沧海软件所有。如有争议，双方应本着友好协商的原则解决。
            </p>
          </section>
        </div>
      </div>
    </main>
  )
} 