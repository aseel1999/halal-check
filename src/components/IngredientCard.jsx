import { useState } from 'react';
import { getStatusInfo } from '../data/ingredients';

export default function IngredientCard({ ingredient, index }) {
  const [expanded, setExpanded] = useState(false);
  const statusInfo = getStatusInfo(ingredient.status);

  const config = {
    halal: { bg: 'bg-emerald-50', border: 'border-emerald-200', badge: 'bg-emerald-100 text-emerald-700', icon: '✅' },
    haram: { bg: 'bg-red-50', border: 'border-red-200', badge: 'bg-red-100 text-red-700', icon: '❌' },
    mashbooh: { bg: 'bg-amber-50', border: 'border-amber-200', badge: 'bg-amber-100 text-amber-700', icon: '⚠️' },
  };

  const c = config[ingredient.status];

  return (
    <div
      className={`rounded-xl border ${c.border} ${c.bg} overflow-hidden transition-all duration-200 hover:shadow-md cursor-pointer animate-slide-up`}
      style={{ animationDelay: `${index * 0.04}s` }}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="p-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 min-w-0 flex-1">
            <span className="text-lg flex-shrink-0">{c.icon}</span>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-bold text-gray-800 text-sm">{ingredient.name}</h3>
                {ingredient.code && (
                  <span className="text-[10px] bg-white/70 text-gray-400 px-1.5 py-0.5 rounded font-mono">
                    {ingredient.code}
                  </span>
                )}
              </div>
              <p className="text-[11px] text-gray-400">{ingredient.nameEn} • {ingredient.category}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className={`text-[11px] font-bold px-2.5 py-1 rounded-lg ${c.badge}`}>
              {statusInfo.label}
            </span>
            <svg
              className={`w-3.5 h-3.5 text-gray-300 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {expanded && (
          <div className="mt-3 pt-3 border-t border-gray-200/50 space-y-2 animate-fade-in">
            <div className="bg-white/60 rounded-lg p-3">
              <h4 className="text-[11px] font-bold text-gray-400 mb-1">التفاصيل</h4>
              <p className="text-xs text-gray-600 leading-relaxed">{ingredient.description}</p>
            </div>
            
            {ingredient.alternative && (
              <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-3">
                <h4 className="text-[11px] font-bold text-emerald-600 mb-1">البديل الحلال</h4>
                <p className="text-xs text-emerald-700 font-medium">{ingredient.alternative}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
