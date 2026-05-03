import { useState } from 'react';

export default function Header({ onPricingClick, currentPlan, onFavoritesClick, canUseFavorites, onFeaturesClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const planBadges = {
    pro: { label: 'المميزة', icon: '👑', bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' },
    business: { label: 'الأعمال', icon: '🏢', bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
  };

  const badge = planBadges[currentPlan];

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-emerald-500 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
              <span className="text-white text-lg">🌿</span>
            </div>
            <div>
              <h1 className="text-base font-extrabold text-gray-900 leading-none">حلال تشيك</h1>
              <p className="text-[9px] text-gray-400 font-medium leading-none mt-0.5">اعرف قبل ما تأكل</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            <NavLink href="#" label="الرئيسية" active />
            <NavLink href="#features" label="المميزات" onClick={onFeaturesClick} />
            <NavLink href="#how-to-use" label="كيف يعمل" />
            <NavLink href="#pricing" label="الأسعار" onClick={onPricingClick} />
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2">
            {canUseFavorites && (
              <button
                onClick={onFavoritesClick}
                className="w-9 h-9 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200 flex items-center justify-center transition-colors cursor-pointer"
                title="المفضلة"
              >
                <span className="text-sm">⭐</span>
              </button>
            )}

            {badge ? (
              <div className={`${badge.bg} ${badge.text} text-xs font-bold px-3 py-2 rounded-xl border ${badge.border} flex items-center gap-1.5`}>
                <span>{badge.icon}</span> {badge.label}
              </div>
            ) : (
              <button
                onClick={onPricingClick}
                className="bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors cursor-pointer shadow-sm hover:shadow-md"
              >
                ابحث الآن
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 rounded-xl bg-gray-50 hover:bg-gray-100 flex items-center justify-center transition-colors cursor-pointer"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-3 animate-fade-in">
            <div className="flex flex-col gap-1">
              <MobileNavLink href="#" label="الرئيسية" onClick={() => setMobileMenuOpen(false)} />
              <MobileNavLink href="#features" label="المميزات" onClick={() => { setMobileMenuOpen(false); onFeaturesClick?.(); }} />
              <MobileNavLink href="#how-to-use" label="كيف يعمل" onClick={() => setMobileMenuOpen(false)} />
              <MobileNavLink href="#pricing" label="الأسعار" onClick={() => { setMobileMenuOpen(false); onPricingClick?.(); }} />
            </div>
            <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-100">
              {canUseFavorites && (
                <button
                  onClick={() => { setMobileMenuOpen(false); onFavoritesClick(); }}
                  className="flex-1 bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold px-3 py-2.5 rounded-xl flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  ⭐ المفضلة
                </button>
              )}
              {!badge && (
                <button
                  onClick={() => { setMobileMenuOpen(false); onPricingClick(); }}
                  className="flex-1 bg-emerald-500 text-white text-xs font-bold px-3 py-2.5 rounded-xl cursor-pointer"
                >
                  ابحث الآن
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function NavLink({ href, label, active, onClick }) {
  return (
    <a
      href={href}
      onClick={(e) => { if (onClick) { e.preventDefault(); onClick(); } }}
      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
        active
          ? 'text-emerald-700 bg-emerald-50'
          : 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50/50'
      }`}
    >
      {label}
    </a>
  );
}

function MobileNavLink({ href, label, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:text-emerald-600 hover:bg-emerald-50/50 transition-colors"
    >
      {label}
    </a>
  );
}
