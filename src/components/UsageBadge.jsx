export default function UsageBadge({ remainingSearches, searchLimit, remainingAnalyses, analysisLimit, currentPlan }) {
  if (currentPlan === 'business') {
    return (
      <div className="bg-purple-50 border border-purple-200 rounded-xl px-4 py-2.5 flex items-center justify-center gap-4 text-sm">
        <span className="flex items-center gap-1.5 text-purple-700 font-bold">
          <span>🏢</span> بحث وتحليل بلا حدود
        </span>
        <span className="w-px h-4 bg-purple-200"></span>
        <span className="flex items-center gap-1.5 text-purple-600 font-bold">
          <span>🔌</span> API مفعّل
        </span>
      </div>
    );
  }

  if (currentPlan === 'pro') {
    return (
      <div className="flex gap-3">
        <div className="flex-1 bg-amber-50 border border-amber-200 rounded-xl px-4 py-2.5 flex items-center gap-2">
          <span className="text-sm">👑</span>
          <span className="text-xs font-bold text-amber-700">بحث بلا حدود</span>
        </div>
        <div className="flex-1 bg-amber-50 border border-amber-200 rounded-xl px-4 py-2.5 flex items-center gap-2">
          <span className="text-sm">📋</span>
          <span className="text-xs font-bold text-amber-700">تحليل: {remainingAnalyses}/{analysisLimit}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-3">
      <LimitBar label="بحث" remaining={remainingSearches} limit={searchLimit} />
      <LimitBar label="تحليل" remaining={remainingAnalyses} limit={analysisLimit} />
    </div>
  );
}

function LimitBar({ label, remaining, limit }) {
  const percentage = ((limit - remaining) / limit) * 100;
  const isEmpty = remaining <= 0;
  const isLow = remaining <= 2;

  const colors = isEmpty
    ? { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-600', bar: 'bg-red-400' }
    : isLow
      ? { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-600', bar: 'bg-amber-400' }
      : { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700', bar: 'bg-emerald-400' };

  return (
    <div className={`flex-1 ${colors.bg} border ${colors.border} rounded-xl px-4 py-2.5`}>
      <div className="flex items-center justify-between mb-1.5">
        <span className={`text-xs font-bold ${colors.text}`}>
          {isEmpty ? `${label}: انتهت` : `${label}: ${remaining}/${limit}`}
        </span>
      </div>
      <div className="w-full bg-white rounded-full h-1.5">
        <div
          className={`h-1.5 rounded-full transition-all duration-500 ${colors.bar}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
