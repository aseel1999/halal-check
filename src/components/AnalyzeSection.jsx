export default function AnalyzeSection({ value, onChange, onAnalyze, onClear, disabled }) {
  const sampleText = 'سكر، ماء، زيت نباتي، E471، جيلاتين، E120، نشا الذرة، ملح، E330، فانيليا طبيعية';
  
  return (
    <div className="glass-strong rounded-2xl shadow-xl shadow-gray-200/50 p-6 mb-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-gradient-to-bl from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center text-white text-lg shadow-md shadow-emerald-200">
          📋
        </div>
        <div>
          <h3 className="font-bold text-gray-800 text-lg">تحليل قائمة المكونات</h3>
          <p className="text-xs text-gray-400">الصق قائمة المكونات من غلاف المنتج وسنحلّلها لك فوراً</p>
        </div>
      </div>

      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={disabled ? 'انتهت عمليات التحليل المجانية اليوم — ترقَّ للباقة المميزة' : 'الصق قائمة المكونات هنا... \nمثال: سكر، ماء، زيت نباتي، E471، جيلاتين، نشا'}
        className={`w-full h-36 p-4 border-2 rounded-xl focus:outline-none transition-all duration-300 font-medium placeholder-gray-400 resize-none text-sm leading-relaxed ${
          disabled
            ? 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-gray-50 border-gray-200 focus:border-emerald-400 focus:bg-white text-gray-800'
        }`}
        dir="rtl"
        disabled={disabled}
      />

      <div className="flex flex-wrap gap-3 mt-4">
        <button
          onClick={onAnalyze}
          disabled={!value.trim() || disabled}
          className="flex-1 sm:flex-none bg-gradient-to-l from-emerald-500 to-emerald-600 text-white px-8 py-3 rounded-xl font-bold text-sm hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-md shadow-emerald-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          🔬 تحليل المكونات
        </button>
        {!disabled && (
          <button
            onClick={() => onChange(sampleText)}
            className="text-emerald-600 bg-emerald-50 px-4 py-3 rounded-xl font-bold text-sm hover:bg-emerald-100 transition-colors border border-emerald-100 cursor-pointer"
          >
            📝 مثال تجريبي
          </button>
        )}
        {value && (
          <button
            onClick={onClear}
            className="text-gray-500 bg-gray-50 px-4 py-3 rounded-xl font-bold text-sm hover:bg-gray-100 transition-colors cursor-pointer"
          >
            🗑️ مسح
          </button>
        )}
      </div>
    </div>
  );
}
