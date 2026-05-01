export default function UpgradeModal({ onClose, onScrollToPricing }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      
      <div 
        className="relative bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6 animate-bounce-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 left-3 w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-400 text-sm cursor-pointer"
        >
          ✕
        </button>

        <div className="text-center mb-5">
          <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-3">
            👑
          </div>
          <h2 className="text-lg font-black text-gray-900 mb-1">
            انتهت العمليات المجانية
          </h2>
          <p className="text-gray-400 text-xs">
            ترقَّ للمميزة واحصل على ميزات أكثر
          </p>
        </div>

        <div className="space-y-2.5 mb-5">
          {[
            { icon: '🔓', text: 'بحث غير محدود' },
            { icon: '📷', text: 'مسح الباركود' },
            { icon: '⭐', text: 'حفظ المفضلة' },
            { icon: '📱', text: 'مشاركة واتساب' },
            { icon: '🚫', text: 'بدون إعلانات' },
          ].map((feature) => (
            <div key={feature.text} className="flex items-center gap-2.5">
              <span className="text-base">{feature.icon}</span>
              <span className="text-xs font-medium text-gray-600">{feature.text}</span>
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <button
            onClick={onScrollToPricing}
            className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-xl font-bold text-sm transition-colors cursor-pointer"
          >
            ترقية — $4.99/شهر
          </button>
          <button
            onClick={onClose}
            className="w-full text-gray-400 py-2 rounded-xl font-medium text-xs hover:bg-gray-50 transition-colors cursor-pointer"
          >
            سأعود غداً
          </button>
        </div>

        <p className="text-center text-[10px] text-gray-300 mt-3">
          تتجدد العمليات كل يوم عند منتصف الليل
        </p>
      </div>
    </div>
  );
}
