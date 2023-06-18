import { createRoot } from 'react-dom/client';
import { Suspense } from 'react';
import App from './app/App';

import './shared/config/i18n';

const root = createRoot(document.getElementById('root'));

root.render(
  <Suspense fallback="loading">
    <App />
  </Suspense>,
);
