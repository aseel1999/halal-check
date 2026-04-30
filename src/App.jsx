import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import AnalyzeSection from './components/AnalyzeSection';
import ResultsPanel from './components/ResultsPanel';
import AnalysisResults from './components/AnalysisResults';
import StatsBar from './components/StatsBar';
import Features from './components/Features';
import Footer from './components/Footer';
import { searchIngredients, analyzeIngredientsList } from './data/ingredients';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [analyzeText, setAnalyzeText] = useState('');
  const [analysisResult, setAnalysisResult] = useState(null);
  const [activeTab, setActiveTab] = useState('search');
  const [hasSearched, setHasSearched] = useState(false);
  const [hasAnalyzed, setHasAnalyzed] = useState(false);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim().length >= 2) {
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
      <Header />
      <main className="flex-1">
        <Hero />
        <StatsBar />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 -mt-8 relative z-10">
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
              <SearchBar value={searchQuery} onChange={handleSearch} />
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
              />
              {hasAnalyzed && analysisResult && (
                <AnalysisResults result={analysisResult} />
              )}
            </div>
          )}
        </div>

        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default App;
