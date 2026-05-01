export default function Features() {
  const features = [
    {
      icon: '🔍',
      title: 'بحث ذكي',
      description: 'ابحث بالعربية أو الإنجليزية أو برمز E-number',
      color: 'bg-blue-50 border-blue-100',
      iconBg: 'bg-blue-100',
    },
    {
      icon: '📋',
      title: 'تحليل شامل',
      description: 'الصق قائمة المكونات من غلاف المنتج ونحللها لك',
      color: 'bg-emerald-50 border-emerald-100',
      iconBg: 'bg-emerald-100',
    },
    {
      icon: '📚',
      title: 'قاعدة بيانات غنية',
      description: 'أكثر من 137 مكوّن وإضافة غذائية مع تفاصيل شرعية',
      color: 'bg-purple-50 border-purple-100',
      iconBg: 'bg-purple-100',
    },
    {
      icon: '💡',
      title: 'بدائل حلال',
      description: 'بدائل حلال مقترحة لكل مكوّن حرام أو مشتبه',
      color: 'bg-amber-50 border-amber-100',
      iconBg: 'bg-amber-100',
    },
    {
      icon: '📷',
      title: 'مسح الباركود',
      description: 'امسح باركود المنتج واحصل على تحليل فوري',
      color: 'bg-red-50 border-red-100',
      iconBg: 'bg-red-100',
    },
    {
      icon: '📤',
      title: 'مشاركة النتائج',
      description: 'شارك نتائج الفحص عبر واتساب أو تيليجرام',
      color: 'bg-green-50 border-emerald-100',
      iconBg: 'bg-green-100',
    },
  ];

  return (
    <section id="features" className="py-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            لماذا <span className="gradient-text">حلال تشيك</span>؟
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">أدوات ذكية لاتخاذ قرارات غذائية مطمئنة</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`${feature.color} border rounded-2xl p-5 hover:shadow-md transition-all duration-300 animate-slide-up`}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className={`w-10 h-10 ${feature.iconBg} rounded-xl flex items-center justify-center text-xl mb-3`}>
                {feature.icon}
              </div>
              <h3 className="font-bold text-gray-800 text-sm mb-1">{feature.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
