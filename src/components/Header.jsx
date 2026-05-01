export default function Header({ onPricingClick, currentPlan, onFavoritesClick, canUseFavorites }) {
  const planBadges = {
    pro: { label: 'المميزة', icon: '👑', bg: 'from-amber-100 to-yellow-50', text: 'text-amber-700', border: 'border-amber-200' },
    business: { label: 'الأعمال', icon: '🏢', bg: 'from-purple-100 to-indigo-50', text: 'text-purple-700', border: 'border-purple-200' },
  };

  const badge = planBadges[currentPlan];

  return (
    <header className="glass-strong sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-bl from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center shadow-md shadow-emerald-200 text-xl">
            🌿
          </div>
          <div>
            <h1 className="text-lg font-extrabold gradient-text leading-tight">حلال تشيك</h1>
            <p className="text-[10px] text-gray-400 font-medium">HalalCheck</p>
          </div>
        </div>
        
        <nav className="flex items-center gap-2 sm:gap-4">
          <a href="#features" className="text-sm text-gray-600 hover:text-emerald-600 transition-colors font-medium hidden sm:block">المميزات</a>
          <button 
            onClick={onPricingClick}
            className="text-sm text-gray-600 hover:text-emerald-600 transition-colors font-medium hidden sm:block cursor-pointer"
          >
            الأسعار
          </button>

          {canUseFavorites && (
            <button
              onClick={onFavoritesClick}
              className="w-9 h-9 rounded-full bg-amber-50 hover:bg-amber-100 border border-amber-200 flex items-center justify-center transition-colors cursor-pointer"
              title="المفضلة"
            >
              <span className="text-base">⭐</span>
            </button>
          )}

          {badge ? (
            <div className={`bg-gradient-to-l ${badge.bg} ${badge.text} text-xs font-bold px-3 py-1.5 rounded-full border ${badge.border} flex items-center gap-1`}>
              <span>{badge.icon}</span> {badge.label}
            </div>
          ) : (
            <button
              onClick={onPricingClick}
              className="bg-gradient-to-l from-emerald-500 to-emerald-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-md shadow-emerald-200 hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 cursor-pointer"
            >
              ترقية 👑
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}
