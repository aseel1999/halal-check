export default function AdBanner() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 my-6">
      <div className="bg-gradient-to-l from-gray-50 to-gray-100 border-2 border-dashed border-gray-300 rounded-2xl p-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
          </svg>
          <span className="text-xs text-gray-400 font-bold">إعلان</span>
        </div>
        <div className="bg-white/60 rounded-xl p-8 mb-3">
          <p className="text-gray-400 text-sm font-bold">مساحة إعلانية — Google AdSense</p>
          <p className="text-gray-300 text-xs mt-1">728 × 90</p>
        </div>
        <p className="text-[10px] text-gray-300">
          ترقّى للباقة المميزة للتخلّص من الإعلانات
        </p>
      </div>
    </div>
  );
}
