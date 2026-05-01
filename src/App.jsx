import { useState, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import AnalyzeSection from './components/AnalyzeSection';
import ResultsPanel from './components/ResultsPanel';
import AnalysisResults from './components/AnalysisResults';
import StatsBar from './components/StatsBar';
import Features from './components/Features';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';
import UsageBadge from './components/UsageBadge';
import UpgradeModal from './components/UpgradeModal';
import BarcodeScanner from './components/BarcodeScanner';
import BarcodeResult from './components/BarcodeResult';
import AdBanner from './components/AdBanner';
import FavoritesPanel from './components/FavoritesPanel';
import ShareModal from './components/ShareModal';
import APISection from './components/APISection';
import useUsageLimit from './hooks/useUsageLimit';
import { searchIngredients, analyzeIngredientsList } from './data/ingredients';
import { lookupBarcode } from './data/barcodes';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [analyzeText, setAnalyzeText] = useState('');
  const [analysisResult, setAnalysisResult] = useState(null);
  const [activeTab, setActiveTab] = useState('search');
  const [hasSearched, setHasSearched] = useState(false);
  const [hasAnalyzed, setHasAnalyzed] = useState(false);

  // Barcode state
  const [barcodeResult, setBarcodeResult] = useState(null);
  const [barcodeAnalysis, setBarcodeAnalysis] = useState(null);

  // UI state
  const [showFavorites, setShowFavorites] = useState(false);
  const [shareResult, setShareResult] = useState(null);

  const pricingRef = useRef(null);

  const {
    remainingSearches,
    searchLimit,
    remainingAnalyses,
    analysisLimit,
    isSearchLimitReached,
    isAnalysisLimitReached,
    currentPlan,
    isPro,
    isBusiness,
    canUseBarcode,
    canUseFavorites,
    canUseWhatsapp,
    showAds,
    canUseApi,
    showUpgrade,
    recordSearch,
    recordAnalysis,
    closeUpgrade,
    activatePlan,
  } = useUsageLimit();

  const scrollToPricing = () => {
    closeUpgrade();
    pricingRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim().length >= 2) {
      if (!recordSearch()) return;
      const results = searchIngredients(query);
      setSearchResults(results);
      setHasSearched(true);
    } else {
      setSearchResults([]);
      setHasSearched(false);
    }
  };

  const handleAnalyze = () => {
    if (analyzeText.trim().length > 0) {
      if (!recordAnalysis()) return;
      const result = analyzeIngredientsList(analyzeText);
      setAnalysisResult(result);
      setHasAnalyzed(true);
    }
  };

  const handleClearAnalysis = () => {
    setAnalyzeText('');
    setAnalysisResult(null);
    setHasAnalyzed(false);
  };

  const handleBarcodeScan = (code) => {
    const result = lookupBarcode(code);
    setBarcodeResult(result);
    setBarcodeAnalysis(null);
  };

  const handleBarcodeAnalyze = (ingredients) => {
    if (!recordAnalysis()) return;
    const result = analyzeIngredientsList(ingredients);
    setBarcodeAnalysis(result);
  };

  const handleBarcodeReset = () => {
    setBarcodeResult(null);
    setBarcodeAnalysis(null);
  };

  const handleShare = (result) => {
    setShareResult(result);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        onPricingClick={scrollToPricing}
        currentPlan={currentPlan}
        onFavoritesClick={() => setShowFavorites(true)}
        canUseFavorites={canUseFavorites}
      />
      <main className="flex-1">
        <Hero />
        <StatsBar />
        
        {/* Ad Banner - Free tier only */}
        {showAds && <AdBanner />}

        <div className="max-w-4xl mx-auto px-4 sm:px-6 -mt-8 relative z-10">
          {/* Usage Badge */}
          <div className="mb-4">
            <UsageBadge 
              remainingSearches={remainingSearches} 
              searchLimit={searchLimit}
              remainingAnalyses={remainingAnalyses}
              analysisLimit={analysisLimit}
              currentPlan={currentPlan}
            />
          </div>

          {/* Tab Switcher */}
          <div className="flex justify-center mb-6">
            <div className="glass-strong rounded-2xl p-1.5 flex gap-1 shadow-lg flex-wrap justify-center">
              <button
                onClick={() => setActiveTab('search')}
                className={`px-5 py-3 rounded-xl text-sm font-bold transition-all duration-300 cursor-pointer ${
                  activeTab === 'search'
                    ? 'bg-gradient-to-l from-emerald-500 to-emerald-600 text-white shadow-md shadow-emerald-200'
                    : 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50'
                }`}
              >
                🔍 بحث
              </button>
              <button
                onClick={() => setActiveTab('analyze')}
                className={`px-5 py-3 rounded-xl text-sm font-bold transition-all duration-300 cursor-pointer ${
                  activeTab === 'analyze'
                    ? 'bg-gradient-to-l from-emerald-500 to-emerald-600 text-white shadow-md shadow-emerald-200'
                    : 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50'
                }`}
              >
                📋 تحليل
              </button>
              <button
                onClick={() => setActiveTab('barcode')}
                className={`px-5 py-3 rounded-xl text-sm font-bold transition-all duration-300 cursor-pointer ${
                  activeTab === 'barcode'
                    ? 'bg-gradient-to-l from-blue-500 to-blue-600 text-white shadow-md shadow-blue-200'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                } ${!canUseBarcode ? 'relative' : ''}`}
              >
                📷 باركود
                {!canUseBarcode && (
                  <span className="absolute -top-2 -left-2 bg-amber-400 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                    PRO
                  </span>
                )}
              </button>
              {canUseApi && (
                <button
                  onClick={() => setActiveTab('api')}
                  className={`px-5 py-3 rounded-xl text-sm font-bold transition-all duration-300 cursor-pointer ${
                    activeTab === 'api'
                      ? 'bg-gradient-to-l from-purple-500 to-indigo-600 text-white shadow-md shadow-purple-200'
                      : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                  }`}
                >
                  🔌 API
                </button>
              )}
            </div>
          </div>

          {/* Search Tab */}
          {activeTab === 'search' && (
            <div className="animate-fade-in">
              <SearchBar 
                value={searchQuery} 
                onChange={handleSearch} 
                disabled={isSearchLimitReached}
              />
              {hasSearched && (
                <ResultsPanel results={searchResults} query={searchQuery} />
              )}
            </div>
          )}

          {/* Analyze Tab */}
          {activeTab === 'analyze' && (
            <div className="animate-fade-in">
              <AnalyzeSection
                value={analyzeText}
                onChange={setAnalyzeText}
                onAnalyze={handleAnalyze}
                onClear={handleClearAnalysis}
                disabled={isAnalysisLimitReached}
              />
              {hasAnalyzed && analysisResult && (
                <AnalysisResults
                  result={analysisResult}
                  canShare={canUseWhatsapp}
                  canFavorite={canUseFavorites}
                  onShare={handleShare}
                />
              )}
            </div>
          )}

          {/* Barcode Tab */}
          {activeTab === 'barcode' && (
            <div className="animate-fade-in">
              {!barcodeResult ? (
                <BarcodeScanner
                  onScan={handleBarcodeScan}
                  onClose={() => setActiveTab('search')}
                  isPro={canUseBarcode}
                />
              ) : (
                <>
                  <BarcodeResult
                    result={barcodeResult}
                    analysisResult={barcodeAnalysis}
                    onAnalyze={handleBarcodeAnalyze}
                    onReset={handleBarcodeReset}
                  />
                  {barcodeAnalysis && (
                    <AnalysisResults
                      result={barcodeAnalysis}
                      canShare={canUseWhatsapp}
                      canFavorite={canUseFavorites}
                      onShare={handleShare}
                    />
                  )}
                </>
              )}
            </div>
          )}

          {/* API Tab */}
          {activeTab === 'api' && canUseApi && (
            <div className="animate-fade-in -mx-4 sm:-mx-6">
              <APISection />
            </div>
          )}
        </div>

        {/* Ad Banner bottom - Free tier only */}
        {showAds && <AdBanner />}

        <Features />
        <div ref={pricingRef}>
          <PricingSection onActivatePlan={activatePlan} currentPlan={currentPlan} />
        </div>
      </main>
      <Footer />

      {/* Modals */}
      {showUpgrade && (
        <UpgradeModal onClose={closeUpgrade} onScrollToPricing={scrollToPricing} />
      )}

      {showFavorites && (
        <FavoritesPanel onClose={() => setShowFavorites(false)} />
      )}

      {shareResult && (
        <ShareModal result={shareResult} onClose={() => setShareResult(null)} />
      )}
    </div>
  );
}

export default App;
