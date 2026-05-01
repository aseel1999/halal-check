export default function PricingSection({ onActivatePlan, currentPlan }) {
  const plans = [
    {
      key: 'free',
      name: 'مجانية',
      nameEn: 'Free',
      price: '0',
      period: 'مجاناً للأبد',
      description: 'ابدأ بالتحقق من المكونات الآن',
      features: [
        { text: '5 عمليات بحث يومياً', included: true },
        { text: '5 تحليلات قوائم يومياً', included: true },
        { text: '137 مكوّن في القاعدة', included: true },
        { text: 'بدائل حلال مقترحة', included: true },
        { text: 'بحث غير محدود', included: false },
        { text: 'مسح الباركود بالكاميرا', included: false },
        { text: 'حفظ المنتجات المفضلة', included: false },
        { text: 'بدون إعلانات', included: false },
      ],
      popular: false,
      gradient: 'from-gray-500 to-gray-600',
    },
    {
      key: 'pro',
      name: 'المميزة',
      nameEn: 'Pro',
      price: '4.99',
      period: 'شهرياً',
      description: 'للمهتمين بتغذية حلال موثوقة',
      features: [
        { text: 'بحث غير محدود', included: true },
        { text: '20 تحليل قائمة يومياً', included: true },
        { text: 'مسح الباركود بالكاميرا', included: true },
        { text: 'حفظ المنتجات المفضلة', included: true },
        { text: 'مشاركة عبر واتساب وتيليجرام', included: true },
        { text: 'بدون إعلانات', included: true },
        { text: 'API للتكامل', included: false },
        { text: 'شارة حلال لمتجرك', included: false },
      ],
      popular: true,
      gradient: 'from-emerald-500 to-emerald-600',
    },
    {
      key: 'business',
      name: 'الأعمال',
      nameEn: 'Business',
      price: '29.99',
      period: 'شهرياً',
      description: 'للمتاجر والمطاعم والشركات',
      features: [
        { text: 'كل مميزات المميزة', included: true },
        { text: 'تحليل غير محدود', included: true },
        { text: 'API غير محدود للتكامل مع متجرك', included: true },
        { text: 'شارة "حلال موثّق" لمتجرك', included: true },
        { text: 'لوحة تحكم للفريق', included: true },
        { text: 'تقارير تحليلية شهرية', included: true },
        { text: 'دعم فني مخصص ومباشر', included: true },
        { text: 'أولوية في الميزات الجديدة', included: true },
      ],
      popular: false,
      gradient: 'from-purple-500 to-violet-600',
    },
  ];

  const getButtonConfig = (planKey) => {
    if (currentPlan === planKey) {
      return {
        text: 'الخطة الحالية ✓',
        style: 'bg-gray-100 text-gray-500 cursor-default',
        disabled: true,
      };
    }
    if (planKey === 'free') {
      return {
        text: currentPlan !== 'free' ? 'الرجوع للمجانية' : 'الخطة الحالية',
        style: currentPlan !== 'free'
          ? 'bg-gray-200 text-gray-700 hover:bg-gray-300 cursor-pointer'
          : 'bg-gray-100 text-gray-500 cursor-default',
        disabled: currentPlan === 'free',
      };
    }
    if (planKey === 'pro') {
      return {
        text: 'ابدأ الآن — مجاناً 7 أيام',
        style: 'bg-gradient-to-l from-emerald-500 to-emerald-600 text-white hover:from-emerald-600 hover:to-emerald-700 shadow-lg shadow-emerald-200 cursor-pointer',
        disabled: false,
      };
    }
    return {
      text: 'ابدأ الآن — مجاناً 7 أيام',
      style: 'bg-gradient-to-l from-purple-500 to-violet-600 text-white hover:from-purple-600 hover:to-violet-700 shadow-lg shadow-purple-200 cursor-pointer',
      disabled: false,
    };
  };

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
          {plans.map((plan, index) => {
            const btnConfig = getButtonConfig(plan.key);
            return (
              <div
                key={plan.key}
                className={`relative rounded-3xl p-8 transition-all duration-300 animate-slide-up ${
                  plan.popular
                    ? 'bg-white shadow-2xl shadow-emerald-100 border-2 border-emerald-200 scale-105 md:-mt-4 md:mb-4'
                    : currentPlan === plan.key
                      ? 'bg-white shadow-xl border-2 border-purple-200'
                      : 'glass-strong shadow-lg hover:shadow-xl'
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-gradient-to-l from-emerald-500 to-emerald-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                      الأكثر طلباً
                    </div>
                  </div>
                )}

                {currentPlan === plan.key && !plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-gradient-to-l from-blue-500 to-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                      خطتك الحالية
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-bl ${plan.gradient} rounded-2xl flex items-center justify-center text-2xl shadow-lg mx-auto mb-4`}>
                    {plan.key === 'free' ? '🆓' : plan.key === 'pro' ? '👑' : '🏢'}
                  </div>
                  <h3 className="font-black text-xl text-gray-900">{plan.name}</h3>
                  <p className="text-xs text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-black text-gray-900">${plan.price}</span>
                    <span className="text-sm text-gray-400 font-medium">/ {plan.period}</span>
                  </div>
                </div>

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

                <button
                  onClick={() => {
                    if (!btnConfig.disabled) {
                      onActivatePlan(plan.key);
                    }
                  }}
                  className={`w-full py-4 rounded-2xl font-bold text-sm transition-all duration-300 ${btnConfig.style}`}
                >
                  {btnConfig.text}
                </button>
              </div>
            );
          })}
        </div>

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
