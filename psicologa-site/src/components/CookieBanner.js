import React, { useState, useEffect } from 'react';
import './CookieBanner.css';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  // Verifica al montaggio del componente se l'utente ha già accettato i cookie
  useEffect(() => {
    const cookieAccepted = localStorage.getItem('cookieAccepted');
    if (!cookieAccepted) {
      setShowBanner(true);
    }
  }, []);

  // Funzione per gestire l'accettazione dei cookie
  const handleAccept = () => {
    localStorage.setItem('cookieAccepted', 'true');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-banner-content">
        <p>
          Utilizziamo cookie tecnici, statistici e di terze parti per migliorare la tua esperienza di navigazione. Continuando a navigare su questo sito, accetti il loro utilizzo in conformità con la nostra <a href="/privacy" target="_blank" rel="noopener noreferrer">Informativa sulla Privacy</a>.
        </p>
        <button onClick={handleAccept}>Accetto</button>
      </div>
    </div>
  );
};

export default CookieBanner;
