import { ingredientsDB, HALAL, HARAM, MASHBOOH } from '../data/ingredients';

export default function StatsBar() {
  const total = ingredientsDB.length;
  const halalCount = ingredientsDB.filter(i => i.status === HALAL).length;
  const haramCount = ingredientsDB.filter(i => i.status === HARAM).length;
  const mashboohCount = ingredientsDB.filter(i => i.status === MASHBOOH).length;

  const stats = [
    { label: 'إجمالي', value: total, bg: 'bg-gray-50', text: 'text-gray-700', border: 'border-gray-200' },
    { label: 'حلال', value: halalCount, bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' },
    { label: 'حرام', value: haramCount, bg: 'bg-red-50', text: 'text-red-600', border: 'border-red-200' },
    { label: 'مشتبه', value: mashboohCount, bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-200' },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 -mt-10 mb-8 relative z-10">
      <div className="grid grid-cols-4 gap-3">
        {stats.map((stat) => (
          <div key={stat.label} className={`${stat.bg} border ${stat.border} rounded-xl p-3 sm:p-4 text-center`}>
            <div className={`text-xl sm:text-2xl font-black ${stat.text}`}>{stat.value}</div>
            <div className="text-[11px] text-gray-400 font-bold mt-0.5">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
