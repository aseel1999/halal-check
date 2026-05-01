export default function SearchBar({ value, onChange, disabled }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 mb-6 shadow-sm">
      <div className="relative">
        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-xl pointer-events-none">
          {disabled ? '🔒' : '🔍'}
        </div>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={disabled ? 'انتهت عمليات البحث المجانية — ترقَّ للمميزة' : 'ابحث عن مكوّن... مثال: E471، جيلاتين، Gelatin'}
          className={`w-full pr-12 pl-4 py-3.5 text-base border-2 rounded-xl focus:outline-none transition-all duration-200 font-medium placeholder-gray-300 ${
            disabled
              ? 'bg-gray-50 border-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-gray-50 border-gray-200 focus:border-emerald-400 focus:bg-white text-gray-800'
          }`}
          dir="rtl"
          disabled={disabled}
        />
      </div>
      {!disabled && (
        <div className="flex flex-wrap items-center gap-2 mt-3">
          <span className="text-xs text-gray-300 font-medium">جرّب:</span>
          {['E471', 'جيلاتين', 'E120', 'ليسيثين', 'E441'].map((tag) => (
            <button
              key={tag}
              onClick={() => onChange(tag)}
              className="text-xs text-emerald-600 px-2.5 py-1 rounded-lg hover:bg-emerald-50 transition-colors font-bold cursor-pointer border border-transparent hover:border-emerald-200"
            >
              {tag}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
