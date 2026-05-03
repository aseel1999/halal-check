export default function AdBanner() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 my-6">
      <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4 text-center">
        <div className="bg-white rounded-xl p-6 border border-dashed border-gray-200 flex flex-col items-center gap-2">
          <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
          <p className="text-gray-300 text-xs font-medium">مساحة إعلانية</p>
        </div>
        <p className="text-[10px] text-gray-300 mt-2.5">
          ترقَّ للمميزة لتجربة بدون إعلانات
        </p>
      </div>
    </div>
  );
}
