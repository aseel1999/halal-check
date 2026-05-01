import { useState } from 'react';
import { getStatusInfo, HALAL, HARAM, MASHBOOH } from '../data/ingredients';
import { saveFavorite, removeFavorite, isFavorite as checkIsFavorite } from '../hooks/useUsageLimit';

export default function AnalysisResults({ result, canShare, canFavorite, onShare }) {
  const overallInfo = getStatusInfo(result.overall);
  
  const overallBg = {
    halal: 'from-emerald-500 to-green-600',
    haram: 'from-red-500 to-rose-600',
    mashbooh: 'from-amber-500 to-yellow-600',
  };

  const overallShadow = {
    halal: 'shadow-emerald-200',
    haram: 'shadow-red-200',
    mashbooh: 'shadow-amber-200',
  };

  const overallEmoji = {
    halal: '✅',
    haram: '🚫',
    mashbooh: '⚠️',
  };

  const overallMessage = {
    halal: 'جميع المكونات المعروفة حلال',
    haram: 'يحتوي المنتج على مكونات محرّمة!',
    mashbooh: 'يحتوي المنتج على مكونات مشتبه فيها',
  };

  const halalCount = result.results.filter(r => r.found && r.ingredient.status === HALAL).length;
  const haramCount = result.results.filter(r => r.found && r.ingredient.status === HARAM).length;
  const mashboohCount = result.results.filter(r => r.found && r.ingredient.status === MASHBOOH).length;
  const unknownCount = result.results.filter(r => !r.found).length;

  return (
    <div className="space-y-4 animate-slide-up">
      {/* Overall Verdict */}
      <div className={`bg-gradient-to-l ${overallBg[result.overall]} rounded-2xl p-6 sm:p-8 text-white text-center shadow-xl ${overallShadow[result.overall]}`}>
        <div className="text-5xl sm:text-6xl mb-3 animate-bounce-in">{overallEmoji[result.overall]}</div>
        <h2 className="text-2xl sm:text-3xl font-black mb-2">
          {result.overall === HALAL ? 'حلال' : result.overall === HARAM ? 'حرام' : 'مشتبه فيه'}
        </h2>
        <p className="text-white/90 font-medium text-sm sm:text-base">{overallMessage[result.overall]}</p>
        
        {/* Mini stats */}
        <div className="flex justify-center gap-4 sm:gap-6 mt-5 pt-5 border-t border-white/20">
          <div className="text-center">
            <div className="text-2xl font-black">{halalCount}</div>
            <div className="text-xs text-white/70">حلال</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-black">{haramCount}</div>
            <div className="text-xs text-white/70">حرام</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-black">{mashboohCount}</div>
            <div className="text-xs text-white/70">مشتبه</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-black">{unknownCount}</div>
            <div className="text-xs text-white/70">غير معروف</div>
          </div>
        </div>

        {/* Action Buttons */}
        {(canShare || canFavorite) && (
          <div className="flex justify-center gap-3 mt-5 pt-4 border-t border-white/20">
            {canShare && (
              <button
                onClick={() => onShare && onShare(result)}
                className="flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm px-5 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer"
              >
                <span>📤</span> مشاركة
              </button>
            )}
            {canFavorite && (
              <SaveAllButton results={result.results} />
            )}
          </div>
        )}
      </div>

      {/* Individual Results */}
      <div className="glass-strong rounded-2xl shadow-lg overflow-hidden">
        <div className="p-4 border-b border-gray-100">
          <h3 className="font-bold text-gray-700 flex items-center gap-2">
            <span>📋</span> تفاصيل المكونات ({result.results.length})
          </h3>
        </div>
        <div className="divide-y divide-gray-100">
          {result.results.map((item, index) => (
            <IngredientRow key={index} item={item} index={index} canFavorite={canFavorite} />
          ))}
        </div>
      </div>
    </div>
  );
}

function SaveAllButton({ results }) {
  const [saved, setSaved] = useState(false);

  const handleSaveAll = () => {
    results.forEach((item) => {
      if (item.found) {
        saveFavorite({
          id: item.ingredient.code || item.ingredient.name,
          name: item.ingredient.name,
          nameEn: item.ingredient.nameEn,
          code: item.ingredient.code,
          status: item.ingredient.status,
          savedAt: new Date().toISOString(),
        });
      }
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <button
      onClick={handleSaveAll}
      className={`flex items-center gap-2 backdrop-blur-sm px-5 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
        saved ? 'bg-yellow-400/40' : 'bg-white/20 hover:bg-white/30'
      }`}
    >
      <span>{saved ? '✓' : '⭐'}</span> {saved ? 'تم الحفظ!' : 'حفظ الكل'}
    </button>
  );
}

function IngredientRow({ item, index, canFavorite }) {
  const [isFav, setIsFav] = useState(() => {
    if (!item.found) return false;
    return checkIsFavorite(item.ingredient.code || item.ingredient.name);
  });

  const statusConfig = {
    halal: { bg: 'bg-emerald-50', text: 'text-emerald-700', badge: 'bg-emerald-100 text-emerald-800', icon: '✅', label: 'حلال' },
    haram: { bg: 'bg-red-50', text: 'text-red-700', badge: 'bg-red-100 text-red-800', icon: '❌', label: 'حرام' },
    mashbooh: { bg: 'bg-amber-50', text: 'text-amber-700', badge: 'bg-amber-100 text-amber-800', icon: '⚠️', label: 'مشتبه' },
  };

  const toggleFavorite = () => {
    const id = item.ingredient.code || item.ingredient.name;
    if (isFav) {
      removeFavorite(id);
      setIsFav(false);
    } else {
      saveFavorite({
        id,
        name: item.ingredient.name,
        nameEn: item.ingredient.nameEn,
        code: item.ingredient.code,
        status: item.ingredient.status,
        savedAt: new Date().toISOString(),
      });
      setIsFav(true);
    }
  };

  if (!item.found) {
    return (
      <div className="p-4 flex items-center justify-between gap-3 hover:bg-gray-50 transition-colors animate-fade-in" style={{ animationDelay: `${index * 0.03}s` }}>
        <div className="flex items-center gap-3">
          <span className="text-lg">❓</span>
          <span className="text-sm text-gray-600 font-medium">{item.query}</span>
        </div>
        <span className="text-xs bg-gray-100 text-gray-500 px-3 py-1 rounded-lg font-bold">غير معروف</span>
      </div>
    );
  }

  const config = statusConfig[item.ingredient.status];

  return (
    <div className={`p-4 flex items-center justify-between gap-3 ${config.bg} hover:opacity-90 transition-all animate-fade-in`} style={{ animationDelay: `${index * 0.03}s` }}>
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <span className="text-lg flex-shrink-0">{config.icon}</span>
        <div className="min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className={`text-sm font-bold ${config.text}`}>{item.ingredient.name}</span>
            {item.ingredient.code && (
              <span className="text-[10px] bg-white/60 text-gray-500 px-1.5 py-0.5 rounded font-mono">{item.ingredient.code}</span>
            )}
          </div>
          <p className="text-[11px] text-gray-400 truncate">{item.ingredient.nameEn}</p>
        </div>
      </div>
      <div className="flex items-center gap-2 flex-shrink-0">
        {canFavorite && (
          <button
            onClick={toggleFavorite}
            className={`w-7 h-7 rounded-full flex items-center justify-center transition-all cursor-pointer ${
              isFav ? 'bg-yellow-100 text-yellow-600' : 'bg-white/60 hover:bg-yellow-50 text-gray-400 hover:text-yellow-500'
            }`}
            title={isFav ? 'إزالة من المفضلة' : 'إضافة للمفضلة'}
          >
            <span className="text-sm">{isFav ? '⭐' : '☆'}</span>
          </button>
        )}
        <span className={`text-xs font-black px-3 py-1 rounded-lg ${config.badge}`}>
          {config.label}
        </span>
      </div>
    </div>
  );
}
