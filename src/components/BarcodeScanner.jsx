import { useState, useEffect, useRef } from 'react';
import { Html5Qrcode } from 'html5-qrcode';

export default function BarcodeScanner({ onScan, onClose, isPro }) {
  const [error, setError] = useState(null);
  const [scanning, setScanning] = useState(false);
  const [manualCode, setManualCode] = useState('');
  const scannerRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isPro) return;

    let html5QrCode = null;

    const startScanner = async () => {
      try {
        html5QrCode = new Html5Qrcode('barcode-reader');
        scannerRef.current = html5QrCode;
        
        await html5QrCode.start(
          { facingMode: 'environment' },
          {
            fps: 10,
            qrbox: { width: 250, height: 150 },
            aspectRatio: 1.5,
          },
          (decodedText) => {
            html5QrCode.stop().catch(() => {});
            onScan(decodedText);
          },
          () => {}
        );
        setScanning(true);
      } catch (err) {
        setError('لم نتمكن من فتح الكاميرا. تأكد من إعطاء إذن الكاميرا أو أدخل الباركود يدوياً.');
      }
    };

    startScanner();

    return () => {
      if (scannerRef.current) {
        scannerRef.current.stop().catch(() => {});
      }
    };
  }, [isPro, onScan]);

  const handleManualSubmit = () => {
    if (manualCode.trim()) {
      onScan(manualCode.trim());
    }
  };

  if (!isPro) {
    return (
      <div className="glass-strong rounded-2xl shadow-xl shadow-gray-200/50 p-6 mb-6 text-center">
        <div className="w-16 h-16 bg-gradient-to-bl from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg mx-auto mb-4">
          📷
        </div>
        <h3 className="font-bold text-gray-800 text-lg mb-2">مسح الباركود بالكاميرا</h3>
        <p className="text-sm text-gray-500 mb-4">
          هذه الميزة متاحة فقط لمشتركي الباقة المميزة
        </p>
        <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 text-sm font-bold px-4 py-2 rounded-xl border border-amber-200">
          👑 ترقَّ للباقة المميزة لتفعيل هذه الميزة
        </div>
      </div>
    );
  }

  return (
    <div className="glass-strong rounded-2xl shadow-xl shadow-gray-200/50 p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-bl from-blue-400 to-blue-600 rounded-xl flex items-center justify-center text-white text-lg shadow-md shadow-blue-200">
            📷
          </div>
          <div>
            <h3 className="font-bold text-gray-800 text-lg">مسح الباركود</h3>
            <p className="text-xs text-gray-400">وجّه الكاميرا نحو الباركود على المنتج</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-500 cursor-pointer"
        >
          ✕
        </button>
      </div>

      {/* Camera view */}
      <div 
        ref={containerRef}
        className="relative rounded-xl overflow-hidden bg-gray-900 mb-4"
        style={{ minHeight: '250px' }}
      >
        <div id="barcode-reader" className="w-full" />
        {!scanning && !error && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="animate-pulse text-4xl mb-2">📷</div>
              <p className="text-sm">جاري تشغيل الكاميرا...</p>
            </div>
          </div>
        )}
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-4">
          <p className="text-sm text-red-700 font-medium">{error}</p>
        </div>
      )}

      {/* Manual input fallback */}
      <div className="border-t border-gray-100 pt-4">
        <p className="text-xs text-gray-400 font-medium mb-2">أو أدخل رقم الباركود يدوياً:</p>
        <div className="flex gap-2">
          <input
            type="text"
            value={manualCode}
            onChange={(e) => setManualCode(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleManualSubmit()}
            placeholder="مثال: 6281002804001"
            className="flex-1 px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-blue-400 focus:bg-white focus:outline-none transition-all duration-300 font-medium text-gray-800 placeholder-gray-400 text-sm"
            dir="ltr"
          />
          <button
            onClick={handleManualSubmit}
            disabled={!manualCode.trim()}
            className="bg-gradient-to-l from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl font-bold text-sm hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md shadow-blue-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            بحث
          </button>
        </div>
      </div>
    </div>
  );
}
