'use client';

import CookieConsent from 'react-cookie-consent';

export default function CookieBanner() {
  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    // Emette un evento per notificare il cambio di consenso
    window.dispatchEvent(new Event('cookieConsentChanged'));
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'false');
    window.dispatchEvent(new Event('cookieConsentChanged'));
  };

  return (
    <CookieConsent
      location="bottom"
      buttonText="Accetta tutti i cookie"
      declineButtonText="Rifiuta"
      enableDeclineButton
      onAccept={handleAccept}
      onDecline={handleDecline}
      cookieName="edojoCookieConsent"
      style={{
        background: "rgba(0, 0, 0, 0.9)",
        fontSize: "14px",
        fontFamily: "var(--font-nunito), sans-serif",
        zIndex: 9999,
        padding: "20px",
      }}
      buttonStyle={{
        backgroundColor: "#3b82f6",
        color: "white",
        fontSize: "14px",
        fontWeight: "600",
        border: "none",
        borderRadius: "6px",
        padding: "10px 20px",
        cursor: "pointer",
        marginLeft: "10px",
      }}
      declineButtonStyle={{
        backgroundColor: "transparent",
        color: "#d1d5db",
        fontSize: "14px",
        fontWeight: "500",
        border: "1px solid #6b7280",
        borderRadius: "6px",
        padding: "10px 20px",
        cursor: "pointer",
        marginLeft: "10px",
      }}
      contentStyle={{
        flex: "1 0 300px",
        margin: "0",
      }}
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1">
          <p className="text-white mb-2">
            <strong>Questo sito utilizza cookie</strong>
          </p>
          <p className="text-gray-300 text-sm leading-relaxed">
            Utilizziamo cookie tecnici e di analisi per migliorare la tua esperienza di navigazione e analizzare l&apos;utilizzo del sito. 
            I cookie di analisi ci aiutano a capire come i visitatori interagiscono con il sito web fornendoci informazioni in forma anonima.
          </p>
          <p className="text-gray-400 text-xs mt-2">
            Puoi gestire le tue preferenze sui cookie in qualsiasi momento visitando la pagina{' '}
            <a href="/cookie-preferences" className="text-blue-400 hover:text-blue-300 underline">
              Preferenze Cookie
            </a>
            {' '}o consultando la nostra{' '}
            <a href="/privacy-policy" className="text-blue-400 hover:text-blue-300 underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </CookieConsent>
  );
} 