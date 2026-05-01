import { useState, useCallback } from 'react';

const FREE_DAILY_LIMIT = 5;
const STORAGE_KEY = 'halalcheck_usage';

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

export default function useUsageLimit() {
  const [usage, setUsage] = useState(getUsageData);
  const [showUpgrade, setShowUpgrade] = useState(false);
  const [isPro, setIsPro] = useState(() => {
    return localStorage.getItem('halalcheck_pro') === 'true';
  });

  const totalUsed = usage.searches + usage.analyses;
  const remaining = Math.max(0, FREE_DAILY_LIMIT - totalUsed);
  const isLimitReached = !isPro && remaining <= 0;

  const recordSearch = useCallback(() => {
    if (isPro) return true;
    const current = getUsageData();
    const total = current.searches + current.analyses;
    if (total >= FREE_DAILY_LIMIT) {
      setShowUpgrade(true);
      return false;
    }
    const updated = { ...current, searches: current.searches + 1 };
    saveUsageData(updated);
    setUsage(updated);
    return true;
  }, [isPro]);

  const recordAnalysis = useCallback(() => {
    if (isPro) return true;
    const current = getUsageData();
    const total = current.searches + current.analyses;
    if (total >= FREE_DAILY_LIMIT) {
      setShowUpgrade(true);
      return false;
    }
    const updated = { ...current, analyses: current.analyses + 1 };
    saveUsageData(updated);
    setUsage(updated);
    return true;
  }, [isPro]);

  const closeUpgrade = useCallback(() => setShowUpgrade(false), []);

  const activatePro = useCallback(() => {
    localStorage.setItem('halalcheck_pro', 'true');
    setIsPro(true);
    setShowUpgrade(false);
  }, []);

  return {
    usage,
    remaining,
    totalUsed,
    limit: FREE_DAILY_LIMIT,
    isLimitReached,
    isPro,
    showUpgrade,
    recordSearch,
    recordAnalysis,
    closeUpgrade,
    activatePro,
  };
}
