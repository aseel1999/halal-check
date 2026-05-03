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
    <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-24 sm:py-32 relative z-10">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className={`${stat.bg} border ${stat.border} rounded-2xl p-6 sm:p-8 text-center card-hover`}>
            <div className="text-3xl mb-2">{stat.icon}</div>
            <div className={`text-3xl sm:text-4xl font-black ${stat.text}`}>{stat.value}</div>
            <div className="text-sm sm:text-base text-gray-500 font-medium mt-2">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
