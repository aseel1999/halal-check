export default function HowToUse() {
  const methods = [
    {
      icon: (
        <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: 'البحث عن مكوّن',
      description: 'اكتب اسم المكوّن بالعربية أو الإنجليزية أو رمز E-number واحصل على النتيجة فوراً.',
      link: 'ابدأ البحث',
    },
    {
      icon: (
        <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'تحليل قائمة المكونات',
      description: 'الصق قائمة المكونات كاملة من غلاف المنتج ونحلّلها لك ونعطيك الحكم الشامل.',
      link: 'جرّب التحليل',
    },
    {
      icon: (
        <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'مسح الباركود',
      description: 'وجّه الكاميرا نحو باركود المنتج واحصل على تحليل فوري لجميع مكوناته.',
      link: 'امسح منتج',
    },
  ];

  return (
    <section id="how-to-use" className="py-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-full mb-4">
            كيف تبدأ
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            ثلاث طرق للتحقق من أي مكوّن
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            جديد هنا؟ إليك كيف تعمل كل طريقة — اختر الأنسب لك.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {methods.map((method, index) => (
            <div
              key={method.title}
              className="bg-white border border-gray-100 rounded-2xl p-6 card-hover animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-emerald-100 transition-colors">
                {method.icon}
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-2">{method.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{method.description}</p>
              <span className="inline-flex items-center gap-1.5 text-emerald-600 text-sm font-bold group-hover:gap-2.5 transition-all">
                {method.link}
                <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
