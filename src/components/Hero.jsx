export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-8 sm:pt-16 sm:pb-10">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/40 to-transparent"></div>
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-1.5 mb-6 animate-slide-up">
          <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
          </svg>
          <span className="text-emerald-700 text-xs font-bold">مدقق المكونات الغذائية الحلال</span>
        </div>
        
        {/* Main heading */}
        <h1 className="text-3xl sm:text-4xl md:text-[2.75rem] font-black text-gray-900 mb-4 leading-tight animate-slide-up" style={{animationDelay: '0.1s'}}>
          هل هذا المكوّن{' '}
          <span className="gradient-text">حلال؟</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-gray-500 text-sm sm:text-base max-w-lg mx-auto mb-6 animate-slide-up leading-relaxed" style={{animationDelay: '0.15s'}}>
          ابحث عن أي مكوّن أو إضافة غذائية. امسح غلاف المنتج.
          <br className="hidden sm:block" />
          احصل فوراً على حكم حلال أو حرام أو مشتبه — بدون تخمين.
        </p>
      </div>
    </section>
  );
}
