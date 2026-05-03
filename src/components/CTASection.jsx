export default function CTASection({ onScrollToSearch }) {
  return (
    <section className="py-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
          
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl font-black mb-3">
              جاهز تفحص مكوّن؟
            </h2>
            <p className="text-emerald-100 text-sm sm:text-base mb-8 max-w-md mx-auto">
              ابحث عن أي إضافة غذائية أو امسح غلاف المنتج — واحصل فوراً على الحكم الشرعي.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={onScrollToSearch}
                className="bg-white text-emerald-700 font-bold text-sm px-8 py-3 rounded-xl hover:bg-emerald-50 transition-colors cursor-pointer shadow-lg hover:shadow-xl w-full sm:w-auto"
              >
                ابدأ البحث الآن
              </button>
              <a
                href="#pricing"
                className="text-white/90 font-medium text-sm px-6 py-3 rounded-xl hover:bg-white/10 transition-colors border border-white/20 w-full sm:w-auto text-center"
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
