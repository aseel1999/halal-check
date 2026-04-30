import IngredientCard from './IngredientCard';

export default function ResultsPanel({ results, query }) {
  if (results.length === 0) {
    return (
      <div className="glass-strong rounded-2xl shadow-lg p-8 text-center animate-scale-in">
        <div className="text-5xl mb-4">🔍</div>
        <h3 className="text-lg font-bold text-gray-700 mb-2">لم نجد نتائج لـ "{query}"</h3>
        <p className="text-gray-400 text-sm">
          جرّب البحث برمز المكوّن (مثل E471) أو باسمه بالعربية أو الإنجليزية
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3 animate-fade-in">
      <div className="flex items-center justify-between px-1">
        <p className="text-sm text-gray-500 font-medium">
          <span className="text-emerald-600 font-bold">{results.length}</span> نتيجة
        </p>
      </div>
      {results.map((ingredient, index) => (
        <IngredientCard key={`${ingredient.code}-${ingredient.name}-${index}`} ingredient={ingredient} index={index} />
      ))}
    </div>
  );
}
