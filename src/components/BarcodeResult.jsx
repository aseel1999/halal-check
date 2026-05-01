export default function BarcodeResult({ result, analysisResult, onAnalyze, onReset }) {
  if (!result) return null;

  if (!result.found) {
    return (
      <div className="glass-strong rounded-2xl shadow-xl shadow-gray-200/50 p-6 mb-6 animate-scale-in">
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
            🔍
          </div>
          <h3 className="font-bold text-gray-800 text-lg mb-2">منتج غير موجود</h3>
          <p className="text-sm text-gray-500 mb-2">{result.message}</p>
          <p className="text-xs text-gray-400 font-mono mb-4">باركود: {result.barcode}</p>
          <button
            onClick={onReset}
            className="bg-emerald-50 text-emerald-600 px-6 py-2 rounded-xl font-bold text-sm hover:bg-emerald-100 transition-colors border border-emerald-100 cursor-pointer"
          >
            🔄 مسح باركود آخر
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="glass-strong rounded-2xl shadow-xl shadow-gray-200/50 p-6 mb-6 animate-scale-in">
      {/* Product info */}
      <div className="flex items-start gap-4 mb-4 pb-4 border-b border-gray-100">
        <div className="w-14 h-14 bg-gradient-to-bl from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center text-2xl shadow-lg flex-shrink-0">
          📦
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-gray-900 text-lg">{result.name}</h3>
          <p className="text-sm text-gray-500">العلامة التجارية: <span className="font-bold text-gray-700">{result.brand}</span></p>
          <p className="text-xs text-gray-400 font-mono mt-1">باركود: {result.barcode}</p>
        </div>
      </div>

      {/* Ingredients */}
      <div className="mb-4">
        <h4 className="text-sm font-bold text-gray-700 mb-2">📋 المكونات:</h4>
        <p className="text-sm text-gray-600 bg-gray-50 rounded-xl p-3 leading-relaxed">{result.ingredients}</p>
      </div>

      {/* Analyze button */}
      {!analysisResult && (
        <button
          onClick={() => onAnalyze(result.ingredients)}
          className="w-full bg-gradient-to-l from-emerald-500 to-emerald-600 text-white py-3 rounded-xl font-bold text-sm hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-md shadow-emerald-200 cursor-pointer"
        >
          🔬 تحليل المكونات — هل هي حلال؟
        </button>
      )}

      {/* Reset */}
      <button
        onClick={onReset}
        className="w-full mt-2 text-gray-500 bg-gray-50 py-2 rounded-xl font-bold text-sm hover:bg-gray-100 transition-colors cursor-pointer"
      >
        🔄 مسح منتج آخر
      </button>
    </div>
  );
}
