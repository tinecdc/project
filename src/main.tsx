import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './lib/wallet';

// Log unhandled promise rejections to avoid noisy console errors from extensions
window.addEventListener('unhandledrejection', (event) => {
  // eslint-disable-next-line no-console
  console.warn('Unhandled promise rejection:', event.reason);
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
