export default function SearchBar({ value, onChange, disabled }) {
  const trendingTags = ['E471', 'جيلاتين', 'E120', 'ليسيثين', 'E441', 'E330'];
  const categories = ['مستحلبات', 'ملونات', 'محليات', 'مواد حافظة', 'منكهات'];

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 mb-8 shadow-sm text-center">
      {/* Search Input */}
      <div className="relative">
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg className={`w-5 h-5 ${disabled ? 'text-gray-300' : 'text-emerald-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={disabled ? 'انتهت عمليات البحث المجانية — ترقَّ للمميزة' : 'ابحث عن مكوّن أو إضافة غذائية أو علامة تجارية...'}
          className={`w-full pr-12 pl-4 py-4 text-base sm:text-lg border-2 rounded-xl focus:outline-none transition-all duration-200 font-medium placeholder-gray-300 ${
            disabled
              ? 'bg-gray-50 border-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-gray-50 border-gray-200 focus:border-emerald-400 focus:bg-white text-gray-800'
          }`}
          dir="rtl"
          disabled={disabled}
        />
      </div>

      {!disabled && (
        <div className="mt-4 space-y-3">
          {/* Trending */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs text-gray-400 font-medium ml-1">رائج:</span>
            {trendingTags.map((tag) => (
              <button
                key={tag}
                onClick={() => onChange(tag)}
                className="text-xs text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg hover:bg-emerald-100 transition-colors font-bold cursor-pointer border border-emerald-100 hover:border-emerald-200"
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Categories */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs text-gray-400 font-medium ml-1">فئات:</span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => onChange(cat)}
                className="text-xs text-gray-500 bg-gray-50 px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-colors font-medium cursor-pointer border border-gray-100 hover:border-gray-200"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
