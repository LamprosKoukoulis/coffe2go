import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppTheme from "./theme/AppTheme";
import ThemeProviderWrapper from "./theme/ThemeProviderWrapper";
import { ViewProvider } from "./components/ViewContext";

ReactDOM.createRoot(document.getElementById("root")).render(
      <AppTheme>
        <ViewProvider>
          <App />
        </ViewProvider>
      </AppTheme>
);
