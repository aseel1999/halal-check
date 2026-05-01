export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 sm:pt-20 sm:pb-28">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/60 via-transparent to-transparent"></div>
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white border border-emerald-200 rounded-full px-4 py-2 mb-8 shadow-sm animate-slide-up">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
          <span className="text-emerald-700 text-xs font-bold">مدقق المكونات الغذائية الحلال</span>
        </div>
        
        {/* Main heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-5 leading-snug animate-slide-up" style={{animationDelay: '0.1s'}}>
          تحقق من حالة المكونات
          <br />
          <span className="gradient-text">الحلال في ثوانٍ</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto mb-10 animate-slide-up leading-relaxed" style={{animationDelay: '0.2s'}}>
          ابحث عن أي مكوّن أو إضافة غذائية واحصل فوراً على حالتها الشرعية مع التفاصيل والبدائل الحلال
        </p>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 animate-slide-up" style={{animationDelay: '0.3s'}}>
          {[
            'مجاني بالكامل',
            'بدون تسجيل',
            'عربي وإنجليزي',
          ].map((text) => (
            <div key={text} className="flex items-center gap-2 text-gray-500 text-sm">
              <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
