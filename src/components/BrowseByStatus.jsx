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
    <section className="py-44 sm:py-56 lg:py-72 px-6 sm:px-8 lg:px-12 min-h-[60vh]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            تصفح المكونات حسب النوع
          </h2>
          <p className="text-lg sm:text-xl text-gray-500 leading-relaxed">
            {ingredientsDB.length}+ مكوّن — تصفّح حسب الحالة أو الفئة
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-16">
          {/* Status */}
          <div className="text-center">
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">الحالة</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {statuses.map((status) => (
                <button
                  key={status.label}
                  onClick={() => onSearch(status.search)}
                  className={`${status.color} border text-base font-bold px-6 py-3 rounded-xl transition-colors cursor-pointer`}
                >
                  {status.label} ({status.count})
                </button>
              ))}
            </div>
          </div>

          {/* Category */}
          <div className="text-center">
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">الفئة</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.label}
                  onClick={() => onSearch(cat.search)}
                  className="bg-white text-gray-600 border border-gray-200 text-base font-medium px-6 py-3 rounded-xl hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200 transition-colors cursor-pointer"
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
