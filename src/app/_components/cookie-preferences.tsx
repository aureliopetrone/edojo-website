'use client';

import { useState, useEffect } from 'react';

export default function CookiePreferences() {
  const [analyticsConsent, setAnalyticsConsent] = useState(false);

  useEffect(() => {
    // Carica le preferenze attuali
    const consent = localStorage.getItem('cookieConsent');
    setAnalyticsConsent(consent === 'true');
  }, []);

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', analyticsConsent.toString());
    window.dispatchEvent(new Event('cookieConsentChanged'));
    
    // Mostra un messaggio di conferma
    alert('Preferenze salvate con successo!');
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Gestione Cookie</h2>
      
      <div className="space-y-6">
        {/* Cookie Tecnici */}
        <div className="border-b border-gray-200 pb-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Cookie Tecnici</h3>
              <p className="text-sm text-gray-600 mt-1">
                Necessari per il funzionamento del sito web. Non possono essere disabilitati.
              </p>
            </div>
            <div className="flex items-center">
              <span className="text-sm text-gray-500 mr-2">Sempre attivi</span>
              <div className="w-12 h-6 bg-blue-500 rounded-full relative">
                <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Cookie di Analisi */}
        <div className="border-b border-gray-200 pb-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Cookie di Analisi</h3>
              <p className="text-sm text-gray-600 mt-1">
                Ci aiutano a capire come i visitatori interagiscono con il sito web raccogliendo 
                e riportando informazioni in forma anonima tramite Google Analytics.
              </p>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => setAnalyticsConsent(!analyticsConsent)}
                className={`w-12 h-6 rounded-full relative transition-colors duration-200 ${
                  analyticsConsent ? 'bg-blue-500' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform duration-200 ${
                    analyticsConsent ? 'translate-x-6' : 'translate-x-0.5'
                  }`}
                ></div>
              </button>
            </div>
          </div>
        </div>

        {/* Informazioni aggiuntive */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 mb-2">Informazioni sui Cookie</h4>
          <p className="text-sm text-gray-600 mb-2">
            I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo quando visiti un sito web.
          </p>
          <p className="text-sm text-gray-600">
            Per maggiori informazioni sui cookie e su come gestiamo i tuoi dati, consulta la nostra{' '}
            <a href="/privacy-policy" className="text-blue-600 hover:text-blue-800 underline">
              Privacy Policy
            </a>
          </p>
        </div>

        {/* Pulsanti di azione */}
        <div className="flex gap-4 pt-4">
          <button
            onClick={handleSavePreferences}
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
          >
            Salva Preferenze
          </button>
          <button
            onClick={() => {
              setAnalyticsConsent(false);
              localStorage.setItem('cookieConsent', 'false');
              window.dispatchEvent(new Event('cookieConsentChanged'));
              alert('Tutti i cookie non essenziali sono stati disabilitati.');
            }}
            className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors duration-200 font-medium"
          >
            Rifiuta Tutti
          </button>
        </div>
      </div>
    </div>
  );
} 