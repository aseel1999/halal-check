import { ingredientsDB, HALAL, HARAM, MASHBOOH } from '../data/ingredients';

export default function BrowseByStatus({ onSearch }) {
  const halalCount = ingredientsDB.filter(i => i.status === HALAL).length;
  const haramCount = ingredientsDB.filter(i => i.status === HARAM).length;
  const mashboohCount = ingredientsDB.filter(i => i.status === MASHBOOH).length;

  const statuses = [
    { label: 'حرام', count: haramCount, color: 'bg-red-50 text-red-700 border-red-200 hover:bg-red-100', search: 'حرام' },
    { label: 'مشتبه', count: mashboohCount, color: 'bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100', search: 'مشتبه' },
    { label: 'حلال', count: halalCount, color: 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100', search: 'حلال' },
  ];

  const categories = [
    { label: 'مستحلبات', search: 'مستحلبات' },
    { label: 'ملونات', search: 'ملونات' },
    { label: 'مواد حافظة', search: 'مواد حافظة' },
    { label: 'محليات', search: 'محليات' },
    { label: 'منكهات', search: 'منكهات' },
    { label: 'منظمات حموضة', search: 'منظمات حموضة' },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 bg-gray-50/50">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-3">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-1">
              تصفح المكونات حسب النوع
            </h2>
            <p className="text-sm text-gray-400">
              {ingredientsDB.length}+ مكوّن — تصفّح حسب الحالة أو الفئة
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Status */}
          <div>
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">الحالة</h3>
            <div className="flex flex-wrap gap-2">
              {statuses.map((status) => (
                <button
                  key={status.label}
                  onClick={() => onSearch(status.search)}
                  className={`${status.color} border text-sm font-bold px-4 py-2 rounded-xl transition-colors cursor-pointer`}
                >
                  {status.label} ({status.count})
                </button>
              ))}
            </div>
          </div>

          {/* Category */}
          <div>
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">الفئة</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.label}
                  onClick={() => onSearch(cat.search)}
                  className="bg-white text-gray-600 border border-gray-200 text-sm font-medium px-4 py-2 rounded-xl hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200 transition-colors cursor-pointer"
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
