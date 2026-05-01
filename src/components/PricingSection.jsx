export default function PricingSection({ onActivatePlan, currentPlan }) {
  const plans = [
    {
      key: 'free',
      name: 'مجانية',
      price: '0',
      period: 'مجاناً للأبد',
      description: 'ابدأ بالتحقق من المكونات',
      features: [
        '5 عمليات بحث يومياً',
        '5 تحليلات قوائم يومياً',
        '137 مكوّن في القاعدة',
        'بدائل حلال مقترحة',
      ],
      excluded: [
        'بحث غير محدود',
        'مسح الباركود',
        'حفظ المفضلة',
        'بدون إعلانات',
      ],
      icon: '🆓',
      color: 'border-gray-200',
      btnActive: 'bg-gray-100 text-gray-500 cursor-default',
      btnUpgrade: 'bg-gray-200 text-gray-700 hover:bg-gray-300 cursor-pointer',
    },
    {
      key: 'pro',
      name: 'المميزة',
      price: '4.99',
      period: 'شهرياً',
      description: 'للمهتمين بتغذية حلال موثوقة',
      features: [
        'بحث غير محدود',
        '20 تحليل يومياً',
        'مسح الباركود بالكاميرا',
        'حفظ المنتجات المفضلة',
        'مشاركة واتساب وتيليجرام',
        'بدون إعلانات',
      ],
      excluded: [
        'API للتكامل',
        'شارة حلال لمتجرك',
      ],
      icon: '👑',
      color: 'border-emerald-300',
      popular: true,
      btnActive: 'bg-emerald-100 text-emerald-700 cursor-default',
      btnUpgrade: 'bg-emerald-500 text-white hover:bg-emerald-600 cursor-pointer',
    },
    {
      key: 'business',
      name: 'الأعمال',
      price: '29.99',
      period: 'شهرياً',
      description: 'للمتاجر والمطاعم والشركات',
      features: [
        'كل مميزات المميزة',
        'تحليل غير محدود',
        'API غير محدود',
        'شارة حلال لمتجرك',
        'لوحة تحكم للفريق',
        'دعم فني مخصص',
        'تقارير شهرية',
        'أولوية بالميزات الجديدة',
      ],
      excluded: [],
      icon: '🏢',
      color: 'border-purple-300',
      btnActive: 'bg-purple-100 text-purple-700 cursor-default',
      btnUpgrade: 'bg-purple-600 text-white hover:bg-purple-700 cursor-pointer',
    },
  ];

  return (
    <section id="pricing" className="py-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
            اختر الخطة <span className="gradient-text">المناسبة لك</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            ابدأ مجاناً وترقَّ عندما تحتاج المزيد
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {plans.map((plan, index) => {
            const isActive = currentPlan === plan.key;
            return (
              <div
                key={plan.key}
                className={`relative bg-white rounded-2xl border-2 ${
                  isActive ? plan.color + ' shadow-lg' : plan.popular ? plan.color + ' shadow-lg' : 'border-gray-200'
                } p-6 transition-all duration-300 animate-slide-up ${
                  plan.popular && !isActive ? 'md:-mt-3 md:mb-3' : ''
                }`}
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                {/* Badge */}
                {plan.popular && !isActive && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-emerald-500 text-white text-[11px] font-bold px-4 py-1 rounded-full">
                      الأكثر طلباً
                    </span>
                  </div>
                )}
                {isActive && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-blue-500 text-white text-[11px] font-bold px-4 py-1 rounded-full">
                      خطتك الحالية
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className="text-center mb-5 pt-1">
                  <div className="text-3xl mb-2">{plan.icon}</div>
                  <h3 className="font-black text-lg text-gray-900">{plan.name}</h3>
                  <p className="text-[11px] text-gray-400 mb-3">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-3xl font-black text-gray-900">${plan.price}</span>
                    <span className="text-xs text-gray-400">/ {plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2.5 mb-6">
                  {plan.features.map((text) => (
                    <div key={text} className="flex items-center gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                        <svg className="w-2.5 h-2.5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700">{text}</span>
                    </div>
                  ))}
                  {plan.excluded.map((text) => (
                    <div key={text} className="flex items-center gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-[8px] text-gray-400">—</span>
                      </div>
                      <span className="text-sm text-gray-300">{text}</span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <button
                  onClick={() => {
                    if (!isActive) onActivatePlan(plan.key);
                  }}
                  className={`w-full py-3 rounded-xl font-bold text-sm transition-all duration-200 ${
                    isActive ? plan.btnActive : plan.btnUpgrade
                  }`}
                >
                  {isActive
                    ? 'خطتك الحالية'
                    : plan.key === 'free'
                      ? 'الرجوع للمجانية'
                      : 'ابدأ الآن — مجاناً 7 أيام'}
                </button>
              </div>
            );
          })}
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {['🔒 دفع آمن', '↩️ استرجاع 30 يوم', '🚫 إلغاء في أي وقت'].map((text) => (
            <span key={text} className="text-xs text-gray-400">{text}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
