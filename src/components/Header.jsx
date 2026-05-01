export default function Header({ onPricingClick, currentPlan, onFavoritesClick, canUseFavorites }) {
  const planBadges = {
    pro: { label: 'المميزة', icon: '👑', bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' },
    business: { label: 'الأعمال', icon: '🏢', bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
  };

  const badge = planBadges[currentPlan];

  return (
    <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 bg-emerald-500 rounded-lg flex items-center justify-center text-lg text-white">
            🌿
          </div>
          <div>
            <h1 className="text-base font-extrabold text-gray-900 leading-tight">حلال تشيك</h1>
            <p className="text-[9px] text-gray-400 font-medium -mt-0.5">HalalCheck</p>
          </div>
        </div>
        
        <nav className="flex items-center gap-2 sm:gap-3">
          <button 
            onClick={onPricingClick}
            className="text-xs text-gray-500 hover:text-emerald-600 transition-colors font-medium hidden sm:block cursor-pointer"
          >
            الأسعار
          </button>
          <a href="#features" className="text-xs text-gray-500 hover:text-emerald-600 transition-colors font-medium hidden sm:block">
            المميزات
          </a>

          {canUseFavorites && (
            <button
              onClick={onFavoritesClick}
              className="w-8 h-8 rounded-lg bg-amber-50 hover:bg-amber-100 border border-amber-200 flex items-center justify-center transition-colors cursor-pointer"
              title="المفضلة"
            >
              <span className="text-sm">⭐</span>
            </button>
          )}

          {badge ? (
            <div className={`${badge.bg} ${badge.text} text-[11px] font-bold px-3 py-1.5 rounded-lg border ${badge.border} flex items-center gap-1`}>
              <span>{badge.icon}</span> {badge.label}
            </div>
          ) : (
            <button
              onClick={onPricingClick}
              className="bg-emerald-500 hover:bg-emerald-600 text-white text-[11px] font-bold px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer"
            >
              ترقية
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}
