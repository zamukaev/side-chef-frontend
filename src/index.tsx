import { createRoot } from 'react-dom/client';
import App from './app/App';

import { Suspense } from 'react';

const root = createRoot(document.getElementById('root'));
import "./shared/config/i18n";

root.render(
    <Suspense fallback="loading">
        <App />
    </Suspense>
);
