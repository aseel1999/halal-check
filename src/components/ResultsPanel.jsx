import IngredientCard from './IngredientCard';

export default function ResultsPanel({ results, query, onSaveToFavorites, canUseFavorites, onShare, canShare }) {
  if (!results.length) return null;

  return (
    <div className="mb-5 animate-slide-up">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-bold text-gray-700">
            نتائج البحث عن "<span className="text-emerald-600">{query}</span>"
          </h3>
          <span className="text-[11px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-lg font-bold">
            {results.length}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          {canShare && (
            <button
              onClick={onShare}
              className="w-8 h-8 rounded-lg bg-emerald-50 hover:bg-emerald-100 flex items-center justify-center transition-colors cursor-pointer"
              title="مشاركة"
            >
              <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Results */}
      <div className="space-y-2.5">
        {results.map((ingredient, index) => (
          <div key={ingredient.code || ingredient.name} className="relative group">
            <IngredientCard ingredient={ingredient} index={index} />
            {canUseFavorites && (
              <button
                onClick={(e) => { e.stopPropagation(); onSaveToFavorites(ingredient); }}
                className="absolute top-3 left-3 w-7 h-7 rounded-lg bg-amber-50 hover:bg-amber-100 border border-amber-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all cursor-pointer"
                title="حفظ في المفضلة"
              >
                <span className="text-xs">⭐</span>
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
