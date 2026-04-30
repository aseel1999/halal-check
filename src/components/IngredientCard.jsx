import { useState } from 'react';
import { getStatusInfo } from '../data/ingredients';

export default function IngredientCard({ ingredient, index }) {
  const [expanded, setExpanded] = useState(false);
  const statusInfo = getStatusInfo(ingredient.status);

  const statusBg = {
    halal: 'bg-gradient-to-l from-emerald-50 to-green-50 border-emerald-200',
    haram: 'bg-gradient-to-l from-red-50 to-rose-50 border-red-200',
    mashbooh: 'bg-gradient-to-l from-amber-50 to-yellow-50 border-amber-200',
  };

  const statusBadge = {
    halal: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    haram: 'bg-red-100 text-red-800 border-red-200',
    mashbooh: 'bg-amber-100 text-amber-800 border-amber-200',
  };

  const statusIcon = {
    halal: '✅',
    haram: '❌',
    mashbooh: '⚠️',
  };

  const statusGlow = {
    halal: 'shadow-emerald-100',
    haram: 'shadow-red-100',
    mashbooh: 'shadow-amber-100',
  };

  return (
    <div
      className={`rounded-2xl border-2 ${statusBg[ingredient.status]} overflow-hidden transition-all duration-300 shadow-lg ${statusGlow[ingredient.status]} hover:shadow-xl cursor-pointer animate-slide-up`}
      style={{ animationDelay: `${index * 0.05}s` }}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span className="text-xl">{statusIcon[ingredient.status]}</span>
              <h3 className="font-bold text-gray-800 text-base sm:text-lg truncate">{ingredient.name}</h3>
              {ingredient.code && (
                <span className="text-xs bg-white/70 text-gray-500 px-2 py-0.5 rounded-md font-mono border border-gray-200">
                  {ingredient.code}
                </span>
              )}
            </div>
            <p className="text-xs text-gray-400 font-medium">{ingredient.nameEn} • {ingredient.category}</p>
          </div>
          
          <div className="flex flex-col items-end gap-2">
            <span className={`text-xs font-black px-3 py-1.5 rounded-lg border ${statusBadge[ingredient.status]}`}>
              {statusInfo.label}
            </span>
            <svg
              className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {expanded && (
          <div className="mt-4 pt-4 border-t border-gray-200/50 space-y-3 animate-fade-in">
            <div className="bg-white/60 rounded-xl p-4">
              <h4 className="text-xs font-bold text-gray-500 mb-1.5 flex items-center gap-1.5">
                <span>📖</span> التفاصيل
              </h4>
              <p className="text-sm text-gray-700 leading-relaxed">{ingredient.description}</p>
            </div>
            
            {ingredient.alternative && (
              <div className="bg-emerald-50/80 rounded-xl p-4 border border-emerald-100">
                <h4 className="text-xs font-bold text-emerald-600 mb-1.5 flex items-center gap-1.5">
                  <span>💡</span> البديل الحلال
                </h4>
                <p className="text-sm text-emerald-700 font-medium">{ingredient.alternative}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
