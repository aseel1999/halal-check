export default function Footer() {
  return (
    <footer id="about" className="bg-gray-900 text-white py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-bl from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center text-xl shadow-lg">
                🌿
              </div>
              <div>
                <h3 className="font-bold text-lg">حلال تشيك</h3>
                <p className="text-xs text-gray-400">HalalCheck</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              أداة ذكية للتحقق من حالة المكونات الغذائية الشرعية. نسعى لمساعدة المسلمين حول العالم على اتخاذ قرارات غذائية واعية ومطمئنة.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-emerald-400">روابط سريعة</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">الصفحة الرئيسية</a></li>
              <li><a href="#features" className="hover:text-emerald-400 transition-colors">المميزات</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">سياسة الخصوصية</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">تواصل معنا</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-emerald-400">تنويه مهم</h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              هذا التطبيق أداة استرشادية وليس فتوى شرعية. للحالات الخاصة، يُرجى الرجوع إلى العلماء المختصين وهيئات الرقابة الشرعية المعتمدة في بلدك.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} حلال تشيك — جميع الحقوق محفوظة
          </p>
          <p className="text-xs text-gray-500">
            صُنع بـ 💚 لخدمة المسلمين حول العالم
          </p>
        </div>
      </div>
    </footer>
  );
}
