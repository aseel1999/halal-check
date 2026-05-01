export default function UsageBadge({ remaining, limit, isPro }) {
  if (isPro) {
    return (
      <div className="flex items-center gap-2 bg-gradient-to-l from-amber-50 to-yellow-50 border border-amber-200 rounded-xl px-4 py-2">
        <span className="text-lg">👑</span>
        <span className="text-sm font-bold text-amber-700">باقة مميزة — بلا حدود</span>
      </div>
    );
  }

  const percentage = ((limit - remaining) / limit) * 100;
  const isLow = remaining <= 2;
  const isEmpty = remaining <= 0;

  return (
    <div className={`flex items-center gap-3 rounded-xl px-4 py-2.5 border transition-all duration-300 ${
      isEmpty 
        ? 'bg-red-50 border-red-200' 
        : isLow 
          ? 'bg-amber-50 border-amber-200' 
          : 'bg-emerald-50 border-emerald-200'
    }`}>
      <div className="flex items-center gap-2 flex-1">
        <span className="text-lg">{isEmpty ? '🔒' : isLow ? '⚠️' : '✨'}</span>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <span className={`text-xs font-bold ${
              isEmpty ? 'text-red-700' : isLow ? 'text-amber-700' : 'text-emerald-700'
            }`}>
              {isEmpty 
                ? 'انتهت عمليات البحث المجانية اليوم' 
                : `متبقي ${remaining} من ${limit} عمليات بحث اليوم`
              }
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div
              className={`h-1.5 rounded-full transition-all duration-500 ${
                isEmpty 
                  ? 'bg-red-500' 
                  : isLow 
                    ? 'bg-amber-500' 
                    : 'bg-emerald-500'
              }`}
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
