import { ingredientsDB, HALAL, HARAM, MASHBOOH } from '../data/ingredients';

export default function StatsBar() {
  const total = ingredientsDB.length;
  const halalCount = ingredientsDB.filter(i => i.status === HALAL).length;
  const haramCount = ingredientsDB.filter(i => i.status === HARAM).length;
  const mashboohCount = ingredientsDB.filter(i => i.status === MASHBOOH).length;

  const stats = [
    { label: 'إجمالي المكونات', value: total, icon: '📊', color: 'text-gray-700' },
    { label: 'حلال', value: halalCount, icon: '✅', color: 'text-emerald-600' },
    { label: 'حرام', value: haramCount, icon: '❌', color: 'text-red-600' },
    { label: 'مشتبه', value: mashboohCount, icon: '⚠️', color: 'text-amber-600' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 -mt-12 mb-12 relative z-10">
      <div className="glass-strong rounded-2xl shadow-xl shadow-gray-200/50 p-4 sm:p-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className={`text-2xl sm:text-3xl font-black ${stat.color}`}>{stat.value}</div>
              <div className="text-xs text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
