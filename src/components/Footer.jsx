export default function Footer() {
  return (
    <footer id="about" className="bg-gray-900 text-white py-10 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-base">
                🌿
              </div>
              <div>
                <h3 className="font-bold text-sm">حلال تشيك</h3>
                <p className="text-[10px] text-gray-500">HalalCheck</p>
              </div>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              أداة ذكية للتحقق من حالة المكونات الغذائية الشرعية لمساعدة المسلمين حول العالم.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-sm mb-3 text-emerald-400">روابط سريعة</h4>
            <ul className="space-y-1.5 text-xs text-gray-400">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">الصفحة الرئيسية</a></li>
              <li><a href="#features" className="hover:text-emerald-400 transition-colors">المميزات</a></li>
              <li><a href="#pricing" className="hover:text-emerald-400 transition-colors">الأسعار</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">تواصل معنا</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-sm mb-3 text-emerald-400">تنويه مهم</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              هذا التطبيق أداة استرشادية وليس فتوى شرعية. للحالات الخاصة، يُرجى الرجوع إلى العلماء المختصين.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[11px] text-gray-600">
            © {new Date().getFullYear()} حلال تشيك — جميع الحقوق محفوظة
          </p>
          <p className="text-[11px] text-gray-600">
            صُنع لخدمة المسلمين حول العالم
          </p>
        </div>
      </div>
    </footer>
  );
}
