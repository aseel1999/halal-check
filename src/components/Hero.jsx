export default function Hero() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36 lg:py-44">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/30 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10 flex flex-col items-center justify-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 bg-emerald-50 border border-emerald-200 rounded-full px-6 py-2.5 mb-12 animate-slide-up">
          <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
          </svg>
          <span className="text-emerald-700 text-sm font-bold">مدقق المكونات الغذائية الحلال</span>
        </div>
        
        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-10 leading-[1.3] animate-slide-up" style={{animationDelay: '0.1s'}}>
          هل هذا المكوّن{' '}
          <span className="gradient-text">حلال؟</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-gray-500 text-lg sm:text-xl lg:text-2xl max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{animationDelay: '0.15s'}}>
          ابحث عن أي مكوّن أو إضافة غذائية. امسح غلاف المنتج.
          <br className="hidden sm:block" />
          احصل فوراً على حكم حلال أو حرام أو مشتبه — بدون تخمين.
        </p>
      </div>
    </section>
  );
}
