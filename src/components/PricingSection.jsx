export default function PricingSection({ onActivatePro, isPro }) {
  const plans = [
    {
      name: 'مجانية',
      nameEn: 'Free',
      price: '0',
      period: 'مجاناً للأبد',
      description: 'ابدأ بالتحقق من المكونات الآن',
      features: [
        { text: '5 عمليات بحث يومياً', included: true },
        { text: 'تحليل قائمة مكونات', included: true },
        { text: '137 مكوّن في القاعدة', included: true },
        { text: 'بدائل حلال مقترحة', included: true },
        { text: 'بحث بلا حدود', included: false },
        { text: 'مسح الباركود', included: false },
        { text: 'حفظ المنتجات المفضلة', included: false },
        { text: 'بدون إعلانات', included: false },
      ],
      buttonText: 'الخطة الحالية',
      buttonStyle: 'bg-gray-100 text-gray-500 cursor-default',
      popular: false,
      gradient: 'from-gray-500 to-gray-600',
    },
    {
      name: 'المميزة',
      nameEn: 'Pro',
      price: '4.99',
      period: 'شهرياً',
      description: 'للمهتمين بتغذية حلال موثوقة',
      features: [
        { text: 'بحث وتحليل بلا حدود', included: true },
        { text: 'تحليل قائمة مكونات', included: true },
        { text: '500+ مكوّن في القاعدة', included: true },
        { text: 'بدائل حلال مقترحة', included: true },
        { text: 'مسح الباركود بالكاميرا', included: true },
        { text: 'حفظ المنتجات المفضلة', included: true },
        { text: 'مشاركة عبر واتساب', included: true },
        { text: 'بدون إعلانات', included: true },
      ],
      buttonText: isPro ? 'مفعّلة ✓' : 'ابدأ الآن — مجاناً 7 أيام',
      buttonStyle: isPro
        ? 'bg-emerald-100 text-emerald-700 cursor-default'
        : 'bg-gradient-to-l from-emerald-500 to-emerald-600 text-white hover:from-emerald-600 hover:to-emerald-700 shadow-lg shadow-emerald-200 cursor-pointer',
      popular: true,
      gradient: 'from-emerald-500 to-emerald-600',
    },
    {
      name: 'الأعمال',
      nameEn: 'Business',
      price: '29.99',
      period: 'شهرياً',
      description: 'للمتاجر والمطاعم والشركات',
      features: [
        { text: 'كل مميزات المميزة', included: true },
        { text: 'API للتكامل مع متجرك', included: true },
        { text: 'شارة "حلال موثّق" لمتجرك', included: true },
        { text: 'لوحة تحكم للفريق', included: true },
        { text: 'تقارير تحليلية شهرية', included: true },
        { text: 'دعم فني مباشر', included: true },
        { text: '10,000 فحص شهرياً عبر API', included: true },
        { text: 'أولوية في الميزات الجديدة', included: true },
      ],
      buttonText: 'تواصل معنا',
      buttonStyle: 'bg-gradient-to-l from-purple-500 to-violet-600 text-white hover:from-purple-600 hover:to-violet-700 shadow-lg shadow-purple-200 cursor-pointer',
      popular: false,
      gradient: 'from-purple-500 to-violet-600',
    },
  ];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-1.5 mb-4">
            <span className="text-sm">💎</span>
            <span className="text-sm font-bold text-emerald-700">خطط الأسعار</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">
            اختر الخطة <span className="gradient-text">المناسبة لك</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            ابدأ مجاناً وترقَّ عندما تحتاج المزيد
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 transition-all duration-300 animate-slide-up ${
                plan.popular
                  ? 'bg-white shadow-2xl shadow-emerald-100 border-2 border-emerald-200 scale-105 md:-mt-4 md:mb-4'
                  : 'glass-strong shadow-lg hover:shadow-xl'
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-l from-emerald-500 to-emerald-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                    الأكثر طلباً
                  </div>
                </div>
              )}

              {/* Plan header */}
              <div className="text-center mb-6">
                <div className={`w-14 h-14 bg-gradient-to-bl ${plan.gradient} rounded-2xl flex items-center justify-center text-2xl shadow-lg mx-auto mb-4`}>
                  {plan.name === 'مجانية' ? '🆓' : plan.name === 'المميزة' ? '👑' : '🏢'}
                </div>
                <h3 className="font-black text-xl text-gray-900">{plan.name}</h3>
                <p className="text-xs text-gray-400 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-black text-gray-900">${plan.price}</span>
                  <span className="text-sm text-gray-400 font-medium">/ {plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <div key={feature.text} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0 ${
                      feature.included
                        ? 'bg-emerald-100 text-emerald-600'
                        : 'bg-gray-100 text-gray-400'
                    }`}>
                      {feature.included ? '✓' : '—'}
                    </div>
                    <span className={`text-sm ${
                      feature.included ? 'text-gray-700 font-medium' : 'text-gray-400'
                    }`}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                onClick={() => {
                  if (plan.name === 'المميزة' && !isPro) {
                    onActivatePro();
                  }
                }}
                className={`w-full py-4 rounded-2xl font-bold text-sm transition-all duration-300 ${plan.buttonStyle}`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          {[
            { icon: '🔒', text: 'دفع آمن ومشفّر' },
            { icon: '↩️', text: 'استرجاع خلال 30 يوم' },
            { icon: '🚫', text: 'إلغاء في أي وقت' },
          ].map((badge) => (
            <div key={badge.text} className="flex items-center gap-2 text-sm text-gray-400">
              <span>{badge.icon}</span>
              <span className="font-medium">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
