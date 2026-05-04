import { getStatusInfo } from '../data/ingredients';

export default function AnalysisResults({ results, onShare, canShare }) {
  if (!results) return null;
  
  const { found, notFound, summary } = results;
  
  const verdictConfig = {
    safe: { label: 'آمن — كل المكونات حلال', icon: '✅', bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700' },
    warning: { label: 'يحتاج انتباه — يحتوي مكونات مشتبهة', icon: '⚠️', bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-700' },
    danger: { label: 'تحذير — يحتوي مكونات حرام', icon: '❌', bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-700' },
  };

  const v = verdictConfig[summary.verdict] || verdictConfig.warning;

  return (
    <div className="mb-5 space-y-3 animate-slide-up">
      {/* Verdict */}
      <div className={`${v.bg} border ${v.border} rounded-2xl p-5`}>
        <div className="flex items-center gap-3 mb-3">
          <span className="text-2xl">{v.icon}</span>
          <div>
            <h3 className={`font-bold text-sm ${v.text}`}>{v.label}</h3>
            <p className="text-[11px] text-gray-400 mt-0.5">تحليل {found.length + notFound.length} مكوّن</p>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-2 mt-3">
          <StatBox label="حلال" value={summary.halal} bg="bg-emerald-100" text="text-emerald-700" />
          <StatBox label="حرام" value={summary.haram} bg="bg-red-100" text="text-red-700" />
          <StatBox label="مشتبه" value={summary.mashbooh} bg="bg-amber-100" text="text-amber-700" />
        </div>
      </div>

      {/* Found Ingredients */}
      {found.length > 0 && (
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
          <div className="p-4 border-b border-gray-100 flex items-center justify-between">
            <h4 className="text-sm font-bold text-gray-700">المكونات المعروفة ({found.length})</h4>
            {canShare && (
              <button
                onClick={onShare}
                className="text-emerald-600 text-xs font-bold hover:text-emerald-700 cursor-pointer"
              >
                مشاركة
              </button>
            )}
          </div>
          <div className="divide-y divide-gray-50">
            {found.map((item) => {
              const statusInfo = getStatusInfo(item.status);
              const colors = {
                halal: 'text-emerald-600',
                haram: 'text-red-600',
                mashbooh: 'text-amber-600',
              };
              return (
                <div key={item.code || item.name} className="px-4 py-3 flex items-center justify-between gap-3 hover:bg-gray-50/50 transition-colors">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="text-sm">{item.status === 'halal' ? '✅' : item.status === 'haram' ? '❌' : '⚠️'}</span>
                    <div className="min-w-0">
                      <span className="text-sm font-bold text-gray-700 block truncate">{item.name}</span>
                      {item.code && <span className="text-[10px] text-gray-400">{item.code}</span>}
                    </div>
                  </div>
                  <span className={`text-[11px] font-bold ${colors[item.status]}`}>{statusInfo.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Not Found */}
      {notFound.length > 0 && (
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4">
          <h4 className="text-sm font-bold text-gray-500 mb-2">غير موجودة في القاعدة ({notFound.length})</h4>
          <div className="flex flex-wrap gap-1.5">
            {notFound.map((name) => (
              <span key={name} className="text-xs bg-white text-gray-500 px-2.5 py-1 rounded-lg border border-gray-200">
                {name}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function StatBox({ label, value, bg, text }) {
  return (
    <div className={`${bg} rounded-xl p-2.5 text-center`}>
      <div className={`text-lg font-black ${text}`}>{value}</div>
      <div className="text-[10px] text-gray-500 font-medium">{label}</div>
    </div>
  );
}
