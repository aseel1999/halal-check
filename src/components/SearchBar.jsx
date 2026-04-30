export default function SearchBar({ value, onChange }) {
  return (
    <div className="glass-strong rounded-2xl shadow-xl shadow-gray-200/50 p-6 mb-6">
      <div className="relative">
        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl pointer-events-none">
          🔍
        </div>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="ابحث عن مكوّن... مثال: E471، جيلاتين، Gelatin"
          className="w-full pr-14 pl-4 py-4 text-lg bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-emerald-400 focus:bg-white focus:outline-none transition-all duration-300 font-medium text-gray-800 placeholder-gray-400"
          dir="rtl"
        />
      </div>
      <div className="flex flex-wrap gap-2 mt-3">
        <span className="text-xs text-gray-400 font-medium mt-1">جرّب:</span>
        {['E471', 'جيلاتين', 'E120', 'ليسيثين', 'E441'].map((tag) => (
          <button
            key={tag}
            onClick={() => onChange(tag)}
            className="text-xs bg-emerald-50 text-emerald-600 px-3 py-1.5 rounded-lg hover:bg-emerald-100 transition-colors font-bold border border-emerald-100 cursor-pointer"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}
