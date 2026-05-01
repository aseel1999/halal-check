import { useState, useEffect } from 'react';
import { getFavorites, removeFavorite } from '../hooks/useUsageLimit';

export default function FavoritesPanel({ onClose }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  const handleRemove = (id) => {
    const updated = removeFavorite(id);
    setFavorites(updated);
  };

  const statusConfig = {
    halal: { icon: '✅', label: 'حلال', bg: 'bg-emerald-50 border-emerald-200', text: 'text-emerald-700', badge: 'bg-emerald-100 text-emerald-800' },
    haram: { icon: '❌', label: 'حرام', bg: 'bg-red-50 border-red-200', text: 'text-red-700', badge: 'bg-red-100 text-red-800' },
    mashbooh: { icon: '⚠️', label: 'مشتبه', bg: 'bg-amber-50 border-amber-200', text: 'text-amber-700', badge: 'bg-amber-100 text-amber-800' },
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20 px-4" onClick={onClose}>
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[70vh] flex flex-col animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">⭐</span>
            <div>
              <h2 className="text-lg font-black text-gray-800">المنتجات المفضلة</h2>
              <p className="text-xs text-gray-400">{favorites.length} منتج محفوظ</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors cursor-pointer"
          >
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4">
          {favorites.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">📌</div>
              <h3 className="text-gray-600 font-bold mb-2">لا توجد منتجات محفوظة</h3>
              <p className="text-gray-400 text-sm">عند البحث عن مكوّن أو تحليل منتج، اضغط زر ⭐ لحفظه هنا</p>
            </div>
          ) : (
            <div className="space-y-3">
              {favorites.map((fav) => {
                const config = statusConfig[fav.status] || statusConfig.halal;
                return (
                  <div
                    key={fav.id}
                    className={`rounded-xl border-2 ${config.bg} p-4 transition-all hover:shadow-md`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2 flex-1 min-w-0">
                        <span className="text-lg">{config.icon}</span>
                        <div className="min-w-0">
                          <h4 className={`font-bold text-sm ${config.text} truncate`}>{fav.name}</h4>
                          {fav.nameEn && (
                            <p className="text-[11px] text-gray-400 truncate">{fav.nameEn}</p>
                          )}
                          {fav.code && (
                            <span className="text-[10px] bg-white/60 text-gray-500 px-1.5 py-0.5 rounded font-mono mt-1 inline-block">
                              {fav.code}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className={`text-[10px] font-black px-2 py-1 rounded-lg ${config.badge}`}>
                          {config.label}
                        </span>
                        <button
                          onClick={() => handleRemove(fav.id)}
                          className="w-7 h-7 rounded-full bg-white/80 hover:bg-red-100 flex items-center justify-center transition-colors cursor-pointer group"
                          title="إزالة من المفضلة"
                        >
                          <svg className="w-3.5 h-3.5 text-gray-400 group-hover:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    {fav.savedAt && (
                      <p className="text-[10px] text-gray-400 mt-2">
                        محفوظ: {new Date(fav.savedAt).toLocaleDateString('ar-SA')}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
