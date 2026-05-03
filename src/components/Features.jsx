export default function Features() {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      title: '137+ مكوّن في القاعدة',
      description: 'ابحث بالاسم أو الرمز واطّلع على التفاصيل الشرعية الكاملة.',
    },
    {
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'حكم واضح ومصدره',
      description: 'كل نتيجة موسومة: حلال أو حرام أو مشتبه — مع السياق والمصدر.',
    },
    {
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: 'خصوصية بالتصميم',
      description: 'بياناتك لا تُخزّن ولا تُشارك. كل الفحوصات تتم محلياً.',
    },
    {
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'نتائج فورية',
      description: 'احصل على الحكم الشرعي في أقل من ثانية — بدون تأخير.',
    },
  ];

  return (
    <section id="features" className="py-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-full mb-4">
            لماذا تثق بنا
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            مبني لفحص حلال <span className="gradient-text">سريع ودقيق</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-lg mx-auto">
            أحكام واضحة ومصادر موثوقة وخصوصية تامة
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <a
              key={feature.title}
              href="#"
              className="bg-white border border-gray-100 rounded-2xl p-6 card-hover block animate-slide-up group"
              style={{ animationDelay: `${index * 0.08}s` }}
              onClick={(e) => e.preventDefault()}
            >
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-100 transition-colors">
                {feature.icon}
              </div>
              <h3 className="font-bold text-gray-800 text-sm mb-2">{feature.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{feature.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
