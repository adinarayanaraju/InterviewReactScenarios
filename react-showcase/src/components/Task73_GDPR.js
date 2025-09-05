import React from 'react';
import { useLocalStorage } from './Task13_CustomHookLocalStorage'; // Re-using our custom hook

const CookieConsentBanner = ({ onConsent }) => {
  const bannerStyle = {
    position: 'fixed',
    bottom: '0',
    left: '0',
    width: '100%',
    backgroundColor: '#333',
    color: 'white',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1000,
  };

  return (
    <div style={bannerStyle}>
      <p style={{ margin: 0 }}>This website uses cookies to ensure you get the best experience.</p>
      <div>
        <button onClick={() => onConsent('declined')} style={{ marginRight: '1rem', backgroundColor: '#888' }}>Decline</button>
        <button onClick={() => onConsent('accepted')}>Accept</button>
      </div>
    </div>
  );
};


const Task73_GDPR = () => {
  // Use our hook to get/set the consent status in localStorage
  const [consent, setConsent] = useLocalStorage('cookie-consent', null);

  return (
    <div>
      <h2>Task 73: GDPR Compliance (Cookie Consent Banner)</h2>
      <div className="description">
        <p>
          The General Data Protection Regulation (GDPR) and other privacy laws require websites to get user consent before storing most types of cookies.
        </p>
        <ul>
          <li>This component demonstrates a simple cookie consent banner.</li>
          <li>It uses our custom <code>useLocalStorage</code> hook (from Task 13) to remember the user's choice.</li>
          <li>If no choice has been made (<code>consent</code> is null), the banner is displayed.</li>
          <li>Once the user clicks "Accept" or "Decline", the choice is saved, and the banner disappears permanently for that user (unless they clear their local storage).</li>
          <li><strong>To test:</strong> Make a choice, then reload the page. The banner should not reappear. To see it again, clear your browser's local storage for this site.</li>
        </ul>
      </div>

      <h3>Application Content</h3>
      {consent ? (
        <p>Your consent status: <strong>{consent}</strong>. The banner will not be shown again.</p>
      ) : (
        <p>Awaiting your consent decision...</p>
      )}

      {!consent && <CookieConsentBanner onConsent={setConsent} />}
    </div>
  );
};

export default Task73_GDPR;
