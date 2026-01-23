import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ThemeProviderWrapper from "./theme/ThemeProviderWrapper";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProviderWrapper>
    <App />
  </ThemeProviderWrapper>
);
