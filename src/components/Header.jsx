export default function Header() {
  return (
    <header className="glass-strong sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-bl from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center shadow-md shadow-emerald-200 text-xl">
            🌿
          </div>
          <div>
            <h1 className="text-lg font-extrabold gradient-text leading-tight">حلال تشيك</h1>
            <p className="text-[10px] text-gray-400 font-medium">HalalCheck</p>
          </div>
        </div>
        
        <nav className="flex items-center gap-4">
          <a href="#features" className="text-sm text-gray-600 hover:text-emerald-600 transition-colors font-medium hidden sm:block">المميزات</a>
          <a href="#about" className="text-sm text-gray-600 hover:text-emerald-600 transition-colors font-medium hidden sm:block">عن التطبيق</a>
          <div className="bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-200">
            نسخة تجريبية
          </div>
        </nav>
      </div>
    </header>
  );
}
