export default function UpgradeModal({ onClose, onScrollToPricing }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      
      <div 
        className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 animate-bounce-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-500 cursor-pointer"
        >
          ✕
        </button>

        {/* Icon */}
        <div className="text-center mb-6">
          <div className="w-20 h-20 bg-gradient-to-bl from-amber-400 to-amber-600 rounded-3xl flex items-center justify-center text-4xl shadow-lg shadow-amber-200 mx-auto mb-4">
            👑
          </div>
          <h2 className="text-2xl font-black text-gray-900 mb-2">
            انتهت عمليات البحث المجانية!
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            لقد استخدمت 5 عمليات بحث اليوم. ترقَّ للباقة المميزة للحصول على بحث بلا حدود!
          </p>
        </div>

        {/* Features */}
        <div className="space-y-3 mb-6">
          {[
            { icon: '🔓', text: 'بحث وتحليل بلا حدود' },
            { icon: '📷', text: 'مسح الباركود بالكاميرا (قريباً)' },
            { icon: '⭐', text: 'حفظ المنتجات المفضلة' },
            { icon: '📱', text: 'مشاركة النتائج عبر واتساب' },
            { icon: '🚫', text: 'بدون إعلانات' },
          ].map((feature) => (
            <div key={feature.text} className="flex items-center gap-3">
              <span className="text-lg">{feature.icon}</span>
              <span className="text-sm font-medium text-gray-700">{feature.text}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="space-y-3">
          <button
            onClick={onScrollToPricing}
            className="w-full bg-gradient-to-l from-amber-500 to-amber-600 text-white py-4 rounded-2xl font-bold text-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg shadow-amber-200 cursor-pointer"
          >
            👑 ترقية للباقة المميزة — $4.99/شهر
          </button>
          <button
            onClick={onClose}
            className="w-full text-gray-500 py-3 rounded-2xl font-medium text-sm hover:bg-gray-50 transition-colors cursor-pointer"
          >
            سأعود غداً — شكراً
          </button>
        </div>

        {/* Timer hint */}
        <p className="text-center text-xs text-gray-400 mt-4">
          ⏰ تتجدد العمليات المجانية كل يوم عند منتصف الليل
        </p>
      </div>
    </div>
  );
}
