export default function ShareModal({ result, onClose }) {
  const overallText = {
    halal: 'حلال ✅',
    haram: 'حرام ❌',
    mashbooh: 'مشتبه فيه ⚠️',
  };

  const generateShareText = () => {
    let text = `🔍 نتيجة فحص حلال تشيك\n\n`;
    text += `📋 الحكم العام: ${overallText[result.overall] || 'غير معروف'}\n\n`;

    if (result.results && result.results.length > 0) {
      text += `المكونات:\n`;
      result.results.forEach((item) => {
        if (item.found) {
          const status = item.ingredient.status === 'halal' ? '✅' : item.ingredient.status === 'haram' ? '❌' : '⚠️';
          text += `${status} ${item.ingredient.name}\n`;
        } else {
          text += `❓ ${item.query} (غير معروف)\n`;
        }
      });
    }

    text += `\n🌐 جرّب تطبيق حلال تشيك: https://halalcheck.app`;
    return text;
  };

  const shareText = generateShareText();

  const handleWhatsApp = () => {
    const encoded = encodeURIComponent(shareText);
    window.open(`https://wa.me/?text=${encoded}`, '_blank');
  };

  const handleTelegram = () => {
    const encoded = encodeURIComponent(shareText);
    window.open(`https://t.me/share/url?text=${encoded}`, '_blank');
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      alert('تم نسخ النتيجة!');
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = shareText;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert('تم نسخ النتيجة!');
    }
  };

  const handleEmail = () => {
    const subject = encodeURIComponent('نتيجة فحص حلال تشيك');
    const body = encodeURIComponent(shareText);
    window.open(`mailto:?subject=${subject}&body=${body}`);
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4" onClick={onClose}>
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">📤</span>
            <h2 className="text-lg font-black text-gray-800">مشاركة النتيجة</h2>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors cursor-pointer"
          >
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Share Buttons */}
        <div className="p-5 space-y-3">
          {/* WhatsApp */}
          <button
            onClick={handleWhatsApp}
            className="w-full flex items-center gap-4 p-4 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border-2 border-[#25D366]/20 transition-all cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <div className="text-right">
              <h3 className="font-bold text-[#25D366] text-base">واتساب</h3>
              <p className="text-xs text-gray-400">شارك النتيجة عبر واتساب</p>
            </div>
          </button>

          {/* Telegram */}
          <button
            onClick={handleTelegram}
            className="w-full flex items-center gap-4 p-4 rounded-xl bg-[#0088cc]/10 hover:bg-[#0088cc]/20 border-2 border-[#0088cc]/20 transition-all cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-full bg-[#0088cc] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            </div>
            <div className="text-right">
              <h3 className="font-bold text-[#0088cc] text-base">تيليجرام</h3>
              <p className="text-xs text-gray-400">شارك النتيجة عبر تيليجرام</p>
            </div>
          </button>

          {/* Email */}
          <button
            onClick={handleEmail}
            className="w-full flex items-center gap-4 p-4 rounded-xl bg-blue-50 hover:bg-blue-100 border-2 border-blue-200 transition-all cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="text-right">
              <h3 className="font-bold text-blue-600 text-base">بريد إلكتروني</h3>
              <p className="text-xs text-gray-400">أرسل النتيجة بالإيميل</p>
            </div>
          </button>

          {/* Copy */}
          <button
            onClick={handleCopy}
            className="w-full flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 border-2 border-gray-200 transition-all cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
            </div>
            <div className="text-right">
              <h3 className="font-bold text-gray-700 text-base">نسخ النص</h3>
              <p className="text-xs text-gray-400">انسخ النتيجة للصقها في أي مكان</p>
            </div>
          </button>
        </div>

        {/* Preview */}
        <div className="p-5 border-t border-gray-100">
          <p className="text-xs text-gray-400 font-bold mb-2">معاينة النص:</p>
          <div className="bg-gray-50 rounded-xl p-3 text-xs text-gray-600 leading-relaxed max-h-32 overflow-y-auto whitespace-pre-wrap font-mono">
            {shareText}
          </div>
        </div>
      </div>
    </div>
  );
}
