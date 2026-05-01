import { useState, useCallback } from 'react';

const PLANS = {
  free: {
    name: 'مجانية',
    searches: 5,
    analyses: 5,
    barcode: false,
    favorites: false,
    whatsapp: false,
    noAds: false,
    api: false,
  },
  pro: {
    name: 'المميزة',
    searches: Infinity,
    analyses: 20,
    barcode: true,
    favorites: true,
    whatsapp: true,
    noAds: true,
    api: false,
  },
  business: {
    name: 'الأعمال',
    searches: Infinity,
    analyses: Infinity,
    barcode: true,
    favorites: true,
    whatsapp: true,
    noAds: true,
    api: true,
  },
};

const STORAGE_KEY = 'halalcheck_usage';
const PLAN_KEY = 'halalcheck_plan';
const FAVORITES_KEY = 'halalcheck_favorites';

function getTodayKey() {
  return new Date().toISOString().split('T')[0];
}

function getUsageData() {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    const today = getTodayKey();
    if (data.date !== today) {
      return { date: today, searches: 0, analyses: 0 };
    }
    return data;
  } catch {
    return { date: getTodayKey(), searches: 0, analyses: 0 };
  }
}

function saveUsageData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function getSavedPlan() {
  return localStorage.getItem(PLAN_KEY) || 'free';
}

export function getFavorites() {
  try {
    return JSON.parse(localStorage.getItem(FAVORITES_KEY) || '[]');
  } catch {
    return [];
  }
}

export function saveFavorite(item) {
  const favorites = getFavorites();
  const exists = favorites.some(f => f.id === item.id);
  if (!exists) {
    favorites.unshift(item);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }
  return favorites;
}

export function removeFavorite(id) {
  let favorites = getFavorites();
  favorites = favorites.filter(f => f.id !== id);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  return favorites;
}

export function isFavorite(id) {
  return getFavorites().some(f => f.id === id);
}

export default function useUsageLimit() {
  const [usage, setUsage] = useState(getUsageData);
  const [showUpgrade, setShowUpgrade] = useState(false);
  const [currentPlan, setCurrentPlan] = useState(getSavedPlan);

  const planConfig = PLANS[currentPlan];
  const isPro = currentPlan === 'pro' || currentPlan === 'business';
  const isBusiness = currentPlan === 'business';

  const remainingSearches = Math.max(0, planConfig.searches - usage.searches);
  const remainingAnalyses = Math.max(0, planConfig.analyses - usage.analyses);
  const isSearchLimitReached = currentPlan === 'free' && remainingSearches <= 0;
  const isAnalysisLimitReached = remainingAnalyses <= 0;

  const canUseBarcode = planConfig.barcode;
  const canUseFavorites = planConfig.favorites;
  const canUseWhatsapp = planConfig.whatsapp;
  const showAds = !planConfig.noAds;
  const canUseApi = planConfig.api;

  const recordSearch = useCallback(() => {
    if (currentPlan !== 'free') return true;
    const current = getUsageData();
    if (current.searches >= PLANS.free.searches) {
      setShowUpgrade(true);
      return false;
    }
    const updated = { ...current, searches: current.searches + 1 };
    saveUsageData(updated);
    setUsage(updated);
    return true;
  }, [currentPlan]);

  const recordAnalysis = useCallback(() => {
    const limit = PLANS[currentPlan].analyses;
    if (limit === Infinity) return true;
    const current = getUsageData();
    if (current.analyses >= limit) {
      if (currentPlan === 'free') setShowUpgrade(true);
      return false;
    }
    const updated = { ...current, analyses: current.analyses + 1 };
    saveUsageData(updated);
    setUsage(updated);
    return true;
  }, [currentPlan]);

  const closeUpgrade = useCallback(() => setShowUpgrade(false), []);

  const activatePlan = useCallback((plan) => {
    localStorage.setItem(PLAN_KEY, plan);
    setCurrentPlan(plan);
    setShowUpgrade(false);
  }, []);

  return {
    usage,
    currentPlan,
    planConfig,
    remainingSearches,
    remainingAnalyses,
    searchLimit: planConfig.searches,
    analysisLimit: planConfig.analyses,
    isSearchLimitReached,
    isAnalysisLimitReached,
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
  };
}
