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
import useUsageLimit from './hooks/useUsageLimit';
import { searchIngredients, analyzeIngredientsList } from './data/ingredients';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [analyzeText, setAnalyzeText] = useState('');
  const [analysisResult, setAnalysisResult] = useState(null);
  const [activeTab, setActiveTab] = useState('search');
  const [hasSearched, setHasSearched] = useState(false);
  const [hasAnalyzed, setHasAnalyzed] = useState(false);

  const pricingRef = useRef(null);

  const {
    remaining,
    limit,
    isLimitReached,
    isPro,
    showUpgrade,
    recordSearch,
    recordAnalysis,
    closeUpgrade,
    activatePro,
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

  return (
    <div className="min-h-screen flex flex-col">
      <Header onPricingClick={scrollToPricing} isPro={isPro} />
      <main className="flex-1">
        <Hero />
        <StatsBar />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 -mt-8 relative z-10">
          {/* Usage Badge */}
          <div className="mb-4">
            <UsageBadge remaining={remaining} limit={limit} isPro={isPro} />
          </div>

          {/* Tab Switcher */}
          <div className="flex justify-center mb-6">
            <div className="glass-strong rounded-2xl p-1.5 flex gap-1 shadow-lg">
              <button
                onClick={() => setActiveTab('search')}
                className={`px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 cursor-pointer ${
                  activeTab === 'search'
                    ? 'bg-gradient-to-l from-emerald-500 to-emerald-600 text-white shadow-md shadow-emerald-200'
                    : 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50'
                }`}
              >
                🔍 بحث عن مكوّن
              </button>
              <button
                onClick={() => setActiveTab('analyze')}
                className={`px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 cursor-pointer ${
                  activeTab === 'analyze'
                    ? 'bg-gradient-to-l from-emerald-500 to-emerald-600 text-white shadow-md shadow-emerald-200'
                    : 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50'
                }`}
              >
                📋 تحليل قائمة مكونات
              </button>
            </div>
          </div>

          {/* Search Tab */}
          {activeTab === 'search' && (
            <div className="animate-fade-in">
              <SearchBar 
                value={searchQuery} 
                onChange={handleSearch} 
                disabled={isLimitReached}
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
                disabled={isLimitReached}
              />
              {hasAnalyzed && analysisResult && (
                <AnalysisResults result={analysisResult} />
              )}
            </div>
          )}
        </div>

        <Features />
        <div ref={pricingRef}>
          <PricingSection onActivatePro={activatePro} isPro={isPro} />
        </div>
      </main>
      <Footer />

      {/* Upgrade Modal */}
      {showUpgrade && (
        <UpgradeModal onClose={closeUpgrade} onScrollToPricing={scrollToPricing} />
      )}
    </div>
  );
}

export default App;
