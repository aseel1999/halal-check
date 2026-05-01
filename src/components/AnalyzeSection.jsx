export default function AnalyzeSection({ value, onChange, onAnalyze, onClear, disabled }) {
  const sampleText = 'سكر، ماء، زيت نباتي، E471، جيلاتين، E120، نشا الذرة، ملح، E330، فانيليا طبيعية';
  
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5 mb-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-9 h-9 bg-emerald-100 rounded-lg flex items-center justify-center text-lg">
          📋
        </div>
        <div>
          <h3 className="font-bold text-gray-800 text-sm">تحليل قائمة المكونات</h3>
          <p className="text-[11px] text-gray-400">الصق المكونات من غلاف المنتج</p>
        </div>
      </div>

      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={disabled ? 'انتهت عمليات التحليل المجانية — ترقَّ للمميزة' : 'الصق قائمة المكونات هنا...\nمثال: سكر، ماء، زيت نباتي، E471، جيلاتين'}
        className={`w-full h-32 p-4 border-2 rounded-xl focus:outline-none transition-all duration-200 font-medium placeholder-gray-300 resize-none text-sm leading-relaxed ${
          disabled
            ? 'bg-gray-50 border-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-gray-50 border-gray-200 focus:border-emerald-400 focus:bg-white text-gray-800'
        }`}
        dir="rtl"
        disabled={disabled}
      />

      <div className="flex flex-wrap gap-2 mt-3">
        <button
          onClick={onAnalyze}
          disabled={!value.trim() || disabled}
          className="flex-1 sm:flex-none bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
        >
          تحليل المكونات
        </button>
        {!disabled && (
          <button
            onClick={() => onChange(sampleText)}
            className="text-emerald-600 bg-emerald-50 px-4 py-2.5 rounded-xl font-bold text-xs hover:bg-emerald-100 transition-colors cursor-pointer"
          >
            مثال تجريبي
          </button>
        )}
        {value && (
          <button
            onClick={onClear}
            className="text-gray-400 bg-gray-50 px-4 py-2.5 rounded-xl font-bold text-xs hover:bg-gray-100 transition-colors cursor-pointer"
          >
            مسح
          </button>
        )}
      </div>
    </div>
  );
}
