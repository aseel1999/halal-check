export default function UsageBadge({ remainingSearches, searchLimit, remainingAnalyses, analysisLimit, currentPlan }) {
  if (currentPlan === 'business') {
    return (
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="flex-1 flex items-center gap-2 bg-gradient-to-l from-purple-50 to-indigo-50 border border-purple-200 rounded-xl px-4 py-2">
          <span className="text-lg">🏢</span>
          <span className="text-sm font-bold text-purple-700">بحث وتحليل بلا حدود</span>
        </div>
        <div className="flex-1 flex items-center gap-2 bg-gradient-to-l from-purple-50 to-indigo-50 border border-purple-200 rounded-xl px-4 py-2">
          <span className="text-lg">🔌</span>
          <span className="text-sm font-bold text-purple-700">API + شارة حلال مفعّلة</span>
        </div>
      </div>
    );
  }

  if (currentPlan === 'pro') {
    return (
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="flex-1 flex items-center gap-2 bg-gradient-to-l from-amber-50 to-yellow-50 border border-amber-200 rounded-xl px-4 py-2">
          <span className="text-lg">👑</span>
          <span className="text-sm font-bold text-amber-700">بحث بلا حدود</span>
        </div>
        <div className="flex-1 flex items-center gap-2 bg-gradient-to-l from-amber-50 to-yellow-50 border border-amber-200 rounded-xl px-4 py-2">
          <span className="text-lg">📋</span>
          <span className="text-sm font-bold text-amber-700">متبقي {remainingAnalyses} من {analysisLimit} تحليل اليوم</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row gap-2">
      <LimitBar 
        label="بحث" 
        icon="🔍" 
        remaining={remainingSearches} 
        limit={searchLimit} 
      />
      <LimitBar 
        label="تحليل" 
        icon="📋" 
        remaining={remainingAnalyses} 
        limit={analysisLimit} 
      />
    </div>
  );
}

function LimitBar({ label, icon, remaining, limit }) {
  const percentage = ((limit - remaining) / limit) * 100;
  const isLow = remaining <= 2;
  const isEmpty = remaining <= 0;

  return (
    <div className={`flex-1 flex items-center gap-2 rounded-xl px-4 py-2 border transition-all duration-300 ${
      isEmpty 
        ? 'bg-red-50 border-red-200' 
        : isLow 
          ? 'bg-amber-50 border-amber-200' 
          : 'bg-emerald-50 border-emerald-200'
    }`}>
      <span className="text-base">{isEmpty ? '🔒' : icon}</span>
      <div className="flex-1">
        <span className={`text-xs font-bold ${
          isEmpty ? 'text-red-700' : isLow ? 'text-amber-700' : 'text-emerald-700'
        }`}>
          {isEmpty 
            ? `انتهت عمليات ال${label} المجانية` 
            : `${label}: ${remaining}/${limit}`
          }
        </span>
        <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
          <div
            className={`h-1.5 rounded-full transition-all duration-500 ${
              isEmpty ? 'bg-red-500' : isLow ? 'bg-amber-500' : 'bg-emerald-500'
            }`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
}
