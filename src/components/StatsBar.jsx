import { ingredientsDB, HALAL, HARAM, MASHBOOH } from '../data/ingredients';

export default function StatsBar() {
  const total = ingredientsDB.length;
  const halalCount = ingredientsDB.filter(i => i.status === HALAL).length;
  const haramCount = ingredientsDB.filter(i => i.status === HARAM).length;
  const mashboohCount = ingredientsDB.filter(i => i.status === MASHBOOH).length;

  const stats = [
    { label: 'إجمالي', value: total, icon: '📊', text: 'text-gray-700', bg: 'bg-gray-50', border: 'border-gray-200' },
    { label: 'حلال', value: halalCount, icon: '✅', text: 'text-emerald-700', bg: 'bg-emerald-50', border: 'border-emerald-200' },
    { label: 'حرام', value: haramCount, icon: '❌', text: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' },
    { label: 'مشتبه', value: mashboohCount, icon: '⚠️', text: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' },
  ];

  return (
    <div className="flex justify-center py-16 sm:py-24 relative z-10 px-4">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full" style={{ maxWidth: '540px' }}>
        {stats.map((stat) => (
          <div key={stat.label} className={`${stat.bg} border ${stat.border} rounded-2xl p-4 sm:p-6 text-center card-hover`}>
            <div className="text-2xl mb-1">{stat.icon}</div>
            <div className={`text-2xl sm:text-3xl font-black ${stat.text}`}>{stat.value}</div>
            <div className="text-xs sm:text-sm text-gray-500 font-medium mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
