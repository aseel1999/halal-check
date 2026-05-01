import IngredientCard from './IngredientCard';

export default function ResultsPanel({ results, query }) {
  if (results.length === 0) {
    return (
      <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center animate-fade-in">
        <div className="text-4xl mb-3">🔍</div>
        <h3 className="text-sm font-bold text-gray-600 mb-1">لم نجد نتائج لـ "{query}"</h3>
        <p className="text-gray-400 text-xs">
          جرّب البحث برمز المكوّن (مثل E471) أو باسمه
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3 animate-fade-in">
      <p className="text-xs text-gray-400 font-medium px-1">
        <span className="text-emerald-600 font-bold">{results.length}</span> نتيجة
      </p>
      {results.map((ingredient, index) => (
        <IngredientCard key={`${ingredient.code}-${ingredient.name}-${index}`} ingredient={ingredient} index={index} />
      ))}
    </div>
  );
}
