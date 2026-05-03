export default function UpgradeModal({ isOpen, onClose, onUpgrade }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in" onClick={onClose}>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      <div className="relative bg-white rounded-2xl max-w-sm w-full p-6 shadow-2xl animate-slide-up" onClick={(e) => e.stopPropagation()}>
        {/* Close */}
        <button onClick={onClose} className="absolute top-3 left-3 w-8 h-8 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors cursor-pointer">
          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Icon */}
        <div className="text-center mb-5">
          <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">👑</span>
          </div>
          <h3 className="font-black text-lg text-gray-900 mb-1">انتهت العمليات المجانية!</h3>
          <p className="text-sm text-gray-400">ترقَّ للمميزة واستمتع بمزايا أكثر</p>
        </div>

        {/* Features */}
        <div className="bg-emerald-50/50 rounded-xl p-4 mb-5 space-y-2.5">
          {['بحث غير محدود', 'مسح الباركود بالكاميرا', 'حفظ المنتجات المفضلة', 'بدون إعلانات'].map((text) => (
            <div key={text} className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-700">{text}</span>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="space-y-2.5">
          <button
            onClick={onUpgrade}
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-xl font-bold text-sm transition-colors cursor-pointer shadow-sm"
          >
            ترقية الآن — $4.99/شهر
          </button>
          <button
            onClick={onClose}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-500 py-2.5 rounded-xl font-medium text-xs transition-colors cursor-pointer"
          >
            سأعود غداً
          </button>
        </div>

        <p className="text-center text-[10px] text-gray-300 mt-3">
          تجربة مجانية 7 أيام • إلغاء في أي وقت
        </p>
      </div>
    </div>
  );
}
