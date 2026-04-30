export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 sm:pt-16 sm:pb-32">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-green-200 rounded-full opacity-15 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-100 rounded-full opacity-10 blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-2 mb-6 animate-slide-up">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
          <span className="text-emerald-700 text-xs font-bold">مدعوم بالذكاء الاصطناعي • قاعدة بيانات شاملة</span>
        </div>
        
        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-4 leading-tight animate-slide-up" style={{animationDelay: '0.1s'}}>
          تحقق من{' '}
          <span className="gradient-text">حلال</span>
          {' '}المكونات
          <br />
          <span className="text-3xl sm:text-4xl md:text-5xl">في ثوانٍ معدودة</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-gray-500 text-lg sm:text-xl max-w-2xl mx-auto mb-8 animate-slide-up leading-relaxed" style={{animationDelay: '0.2s'}}>
          امسح المكونات أو ابحث عن أي إضافة غذائية (E-numbers) واحصل فوراً على حالتها الشرعية مع التفاصيل والبدائل الحلال
        </p>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-6 animate-slide-up" style={{animationDelay: '0.3s'}}>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
            <span>مجاني بالكامل</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
            <span>بدون تسجيل</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
            <span>يدعم العربية والإنجليزية</span>
          </div>
        </div>
      </div>
    </section>
  );
}
