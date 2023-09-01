import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import App from "app/App";
import { ThemeProvider } from "app/providers/ThemeProvider";
import { store } from "app/store";
import "shared/config/i18n";

const root = createRoot(document.getElementById("root"));

root.render(
    <Suspense fallback="loading">
        <Provider store={store}>
            <BrowserRouter>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </BrowserRouter>
        </Provider>
    </Suspense>,
);
