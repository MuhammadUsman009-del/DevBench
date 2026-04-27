'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const stored = localStorage.getItem('cookieConsent');
    if (!stored) {
      setIsVisible(true);
    } else {
      const preferences = JSON.parse(stored);
      setCookiePreferences(preferences);
    }
  }, []);

  const handleAcceptAll = () => {
    const preferences = {
      essential: true,
      analytics: true,
      marketing: true,
    };
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setCookiePreferences(preferences);
    setIsVisible(false);
  };

  const handleRejectNonEssential = () => {
    const preferences = {
      essential: true,
      analytics: false,
      marketing: false,
    };
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setCookiePreferences(preferences);
    setIsVisible(false);
  };

  const handleCustomize = () => {
    // Open cookie policy in new tab for now
    window.open('/cookie-policy', '_blank');
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-surface border-t border-border p-4 md:p-6 z-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 items-start md:items-center">
          {/* Message */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Cookie Preferences</h3>
            <p className="text-sm text-muted mb-3">
              We use cookies to enhance your experience, analyze traffic, and personalize content. Essential
              cookies are always enabled. For more details, see our{' '}
              <Link href="/cookie-policy" className="text-accent hover:text-green-400 underline">
                cookie policy
              </Link>
              .
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              onClick={handleRejectNonEssential}
              className="px-4 py-2 text-sm font-medium border border-muted text-muted rounded hover:bg-dark-surface hover:text-white transition-colors whitespace-nowrap"
              aria-label="Reject non-essential cookies"
            >
              Reject Non-Essential
            </button>
            <button
              onClick={handleCustomize}
              className="px-4 py-2 text-sm font-medium border border-accent text-accent rounded hover:bg-accent/10 transition-colors whitespace-nowrap"
              aria-label="Customize cookie settings"
            >
              Customize
            </button>
            <button
              onClick={handleAcceptAll}
              className="px-4 py-2 text-sm font-medium bg-accent text-dark-bg font-semibold rounded hover:bg-green-400 transition-colors whitespace-nowrap"
              aria-label="Accept all cookies"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
