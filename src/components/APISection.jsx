import { useState } from 'react';

export default function APISection() {
  const [activeTab, setActiveTab] = useState('overview');
  const [apiKey] = useState(() => {
    let key = localStorage.getItem('halalcheck_api_key');
    if (!key) {
      key = 'hc_' + Array.from(crypto.getRandomValues(new Uint8Array(24)))
        .map(b => b.toString(16).padStart(2, '0')).join('');
      localStorage.setItem('halalcheck_api_key', key);
    }
    return key;
  });

  const [copied, setCopied] = useState(false);

  const handleCopyKey = async () => {
    try {
      await navigator.clipboard.writeText(apiKey);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <div className="glass-strong rounded-3xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-l from-purple-600 to-indigo-700 p-6 sm:p-8 text-white">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">🔌</span>
            <h2 className="text-2xl sm:text-3xl font-black">API حلال تشيك</h2>
          </div>
          <p className="text-purple-100 text-sm sm:text-base">
            ادمج فحص المكونات الحلال في تطبيقك أو متجرك الإلكتروني
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold">REST API</span>
            <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold">JSON</span>
            <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold">137+ مكوّن</span>
            <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold">99.9% Uptime</span>
          </div>
        </div>

        {/* API Key */}
        <div className="p-5 bg-gradient-to-l from-purple-50 to-indigo-50 border-b border-purple-100">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm">🔑</span>
            <h3 className="font-bold text-purple-800 text-sm">مفتاح API الخاص بك</h3>
          </div>
          <div className="flex items-center gap-2">
            <code className="flex-1 bg-white rounded-xl px-4 py-3 text-xs font-mono text-purple-700 border border-purple-200 truncate">
              {apiKey}
            </code>
            <button
              onClick={handleCopyKey}
              className={`px-4 py-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                copied
                  ? 'bg-emerald-500 text-white'
                  : 'bg-purple-600 text-white hover:bg-purple-700'
              }`}
            >
              {copied ? 'تم النسخ!' : 'نسخ'}
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-100 flex gap-1 p-2">
          {[
            { key: 'overview', label: '📖 نظرة عامة' },
            { key: 'endpoints', label: '🔗 النقاط الطرفية' },
            { key: 'examples', label: '💻 أمثلة' },
            { key: 'badge', label: '🏅 شارة حلال' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === tab.key
                  ? 'bg-purple-100 text-purple-700'
                  : 'text-gray-500 hover:bg-gray-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-5 sm:p-6">
          {activeTab === 'overview' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100 text-center">
                  <div className="text-2xl mb-1">∞</div>
                  <div className="text-xs font-bold text-emerald-700">طلبات غير محدودة</div>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 border border-blue-100 text-center">
                  <div className="text-2xl mb-1">⚡</div>
                  <div className="text-xs font-bold text-blue-700">استجابة &lt; 100ms</div>
                </div>
                <div className="bg-purple-50 rounded-xl p-4 border border-purple-100 text-center">
                  <div className="text-2xl mb-1">🔒</div>
                  <div className="text-xs font-bold text-purple-700">HTTPS مشفّر</div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <h4 className="font-bold text-gray-700 text-sm mb-2">ماذا يمكنك فعله بالـ API؟</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2"><span>✅</span> فحص أي مكوّن أو إضافة غذائية</li>
                  <li className="flex items-center gap-2"><span>✅</span> تحليل قائمة مكونات كاملة</li>
                  <li className="flex items-center gap-2"><span>✅</span> البحث بالاسم العربي أو الإنجليزي أو رمز E</li>
                  <li className="flex items-center gap-2"><span>✅</span> الحصول على البديل الحلال</li>
                  <li className="flex items-center gap-2"><span>✅</span> إضافة شارة "حلال معتمد" لمتجرك</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'endpoints' && (
            <div className="space-y-4">
              {/* Search endpoint */}
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-emerald-100 text-emerald-700 text-[10px] font-black px-2 py-0.5 rounded">GET</span>
                  <code className="text-xs font-mono text-gray-700">/api/v1/search?q=&#123;query&#125;</code>
                </div>
                <p className="text-xs text-gray-500">البحث عن مكوّن بالاسم أو الرمز</p>
              </div>
              {/* Analyze endpoint */}
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-blue-100 text-blue-700 text-[10px] font-black px-2 py-0.5 rounded">POST</span>
                  <code className="text-xs font-mono text-gray-700">/api/v1/analyze</code>
                </div>
                <p className="text-xs text-gray-500">تحليل قائمة مكونات كاملة</p>
              </div>
              {/* Barcode endpoint */}
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-emerald-100 text-emerald-700 text-[10px] font-black px-2 py-0.5 rounded">GET</span>
                  <code className="text-xs font-mono text-gray-700">/api/v1/barcode/&#123;code&#125;</code>
                </div>
                <p className="text-xs text-gray-500">البحث عن منتج بالباركود</p>
              </div>
              {/* Badge endpoint */}
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-emerald-100 text-emerald-700 text-[10px] font-black px-2 py-0.5 rounded">GET</span>
                  <code className="text-xs font-mono text-gray-700">/api/v1/badge/&#123;store_id&#125;</code>
                </div>
                <p className="text-xs text-gray-500">الحصول على شارة حلال لمتجرك</p>
              </div>
            </div>
          )}

          {activeTab === 'examples' && (
            <div className="space-y-4">
              {/* cURL example */}
              <div>
                <h4 className="font-bold text-gray-700 text-sm mb-2">cURL:</h4>
                <pre className="bg-gray-900 text-green-400 rounded-xl p-4 text-xs overflow-x-auto direction-ltr text-left" dir="ltr">
{`curl -X GET "https://api.halalcheck.app/v1/search?q=E471" \\
  -H "Authorization: Bearer ${apiKey.slice(0, 12)}..."`}
                </pre>
              </div>
              {/* JavaScript example */}
              <div>
                <h4 className="font-bold text-gray-700 text-sm mb-2">JavaScript:</h4>
                <pre className="bg-gray-900 text-green-400 rounded-xl p-4 text-xs overflow-x-auto direction-ltr text-left" dir="ltr">
{`const response = await fetch(
  "https://api.halalcheck.app/v1/analyze",
  {
    method: "POST",
    headers: {
      "Authorization": "Bearer ${apiKey.slice(0, 12)}...",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      ingredients: "ماء، سكر، E471، E330"
    })
  }
);
const data = await response.json();
console.log(data.overall); // "halal" | "haram" | "mashbooh"`}
                </pre>
              </div>
              {/* Response example */}
              <div>
                <h4 className="font-bold text-gray-700 text-sm mb-2">مثال على الاستجابة:</h4>
                <pre className="bg-gray-900 text-blue-300 rounded-xl p-4 text-xs overflow-x-auto direction-ltr text-left" dir="ltr">
{`{
  "overall": "mashbooh",
  "results": [
    {
      "query": "E471",
      "found": true,
      "ingredient": {
        "name": "أحادي وثنائي الغليسريد",
        "status": "mashbooh",
        "alternative": "E471 نباتي المصدر"
      }
    }
  ]
}`}
                </pre>
              </div>
            </div>
          )}

          {activeTab === 'badge' && (
            <div className="space-y-4">
              <div className="text-center py-4">
                <div className="inline-block bg-gradient-to-l from-emerald-500 to-green-600 text-white px-8 py-4 rounded-2xl shadow-lg shadow-emerald-200">
                  <div className="text-3xl mb-2">🏅</div>
                  <div className="font-black text-lg">حلال معتمد</div>
                  <div className="text-emerald-100 text-xs mt-1">Halal Certified — HalalCheck.app</div>
                </div>
              </div>
              <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100">
                <h4 className="font-bold text-emerald-700 text-sm mb-2">كيف تحصل على الشارة؟</h4>
                <ol className="space-y-2 text-sm text-emerald-600 list-decimal list-inside">
                  <li>سجّل منتجاتك ومكوناتها عبر API</li>
                  <li>نفحص المكونات ونتأكد من حالتها</li>
                  <li>إذا كل المكونات حلال، تحصل على شارة "حلال معتمد"</li>
                  <li>ضع كود الشارة في موقعك أو متجرك</li>
                </ol>
              </div>
              <div>
                <h4 className="font-bold text-gray-700 text-sm mb-2">كود الشارة لموقعك:</h4>
                <pre className="bg-gray-900 text-green-400 rounded-xl p-4 text-xs overflow-x-auto direction-ltr text-left" dir="ltr">
{`<!-- شارة حلال تشيك -->
<a href="https://halalcheck.app/badge/verify"
   target="_blank">
  <img src="https://api.halalcheck.app/badge/${apiKey.slice(0, 8)}"
       alt="حلال معتمد - HalalCheck"
       width="150" height="60" />
</a>`}
                </pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
