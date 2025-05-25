'use client';

import { GoogleAnalytics } from 'nextjs-google-analytics';
import { useEffect, useState } from 'react';
import { env } from '~/env';

export default function GoogleAnalyticsWrapper() {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    // Controlla se l'utente ha dato il consenso ai cookie
    const consent = localStorage.getItem('cookieConsent');
    setHasConsent(consent === 'true');

    // Ascolta i cambiamenti nel consenso
    const handleConsentChange = () => {
      const newConsent = localStorage.getItem('cookieConsent');
      setHasConsent(newConsent === 'true');
    };

    window.addEventListener('storage', handleConsentChange);
    window.addEventListener('cookieConsentChanged', handleConsentChange);

    return () => {
      window.removeEventListener('storage', handleConsentChange);
      window.removeEventListener('cookieConsentChanged', handleConsentChange);
    };
  }, []);

  // Non renderizzare se non c'è consenso o se GA_ID non è configurato
  if (!hasConsent || !env.NEXT_PUBLIC_GA_ID) {
    return null;
  }

  return <GoogleAnalytics gaMeasurementId={env.NEXT_PUBLIC_GA_ID} trackPageViews />;
} 