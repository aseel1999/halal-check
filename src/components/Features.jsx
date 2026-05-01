export default function Features() {
  const features = [
    {
      icon: '🔍',
      title: 'بحث ذكي',
      description: 'ابحث بالعربية أو الإنجليزية أو برمز E-number واحصل على النتائج فوراً',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: '📋',
      title: 'تحليل شامل',
      description: 'الصق قائمة المكونات كاملة من غلاف المنتج ونحللها لك في ثوانٍ',
      gradient: 'from-emerald-500 to-green-500',
    },
    {
      icon: '📚',
      title: 'قاعدة بيانات غنية',
      description: 'أكثر من 100 مكوّن وإضافة غذائية مع تفاصيل شرعية دقيقة',
      gradient: 'from-purple-500 to-violet-500',
    },
    {
      icon: '💡',
      title: 'بدائل حلال',
      description: 'نقترح لك بدائل حلال لكل مكوّن حرام أو مشتبه فيه',
      gradient: 'from-amber-500 to-orange-500',
    },
    {
      icon: '🌐',
      title: 'يدعم اللغتين',
      description: 'ابحث بالعربية أو الإنجليزية — قاعدة البيانات ثنائية اللغة',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: '👑',
      title: 'باقة مميزة',
      description: 'ترقَّ للحصول على بحث بلا حدود، مسح الباركود، وحفظ المفضلة',
      gradient: 'from-amber-500 to-yellow-500',
    },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">
            لماذا{' '}<span className="gradient-text">حلال تشيك</span>؟
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">أدوات ذكية تساعدك على اتخاذ قرارات غذائية مطمئنة</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass-strong rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 bg-gradient-to-bl ${feature.gradient} rounded-xl flex items-center justify-center text-2xl shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="font-bold text-gray-800 text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
