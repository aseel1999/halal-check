export default function CTASection({ onScrollToSearch }) {
  return (
    <section className="py-28 sm:py-36 lg:py-44 px-6 sm:px-8 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-3xl p-12 sm:p-20 text-center text-white relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-56 h-56 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
              جاهز تفحص مكوّن؟
            </h2>
            <p className="text-emerald-100 text-lg sm:text-xl mb-12 max-w-xl mx-auto leading-relaxed">
              ابحث عن أي إضافة غذائية أو امسح غلاف المنتج — واحصل فوراً على الحكم الشرعي.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onScrollToSearch}
                className="bg-white text-emerald-700 font-bold text-base px-10 py-4 rounded-xl hover:bg-emerald-50 transition-colors cursor-pointer shadow-lg hover:shadow-xl w-full sm:w-auto"
              >
                ابدأ البحث الآن
              </button>
              <a
                href="#pricing"
                className="text-white/90 font-medium text-base px-8 py-4 rounded-xl hover:bg-white/10 transition-colors border border-white/20 w-full sm:w-auto text-center"
              >
                تصفّح الباقات
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
