import { useMemo, useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import ColorModeContext from "./ColorModeContext";

export default function ThemeProviderWrapper({ children }) {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prev) => (prev === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  // Εδώ ενώνουμε τις ρυθμίσεις σου
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: "#6f4e37",
          },
          background: {
            default: mode === "light" ? "#f4f6f8" : "#121212",
            paper: mode === "light" ? "#ffffff" : "#1e1e1e",
          },
          text: {
            primary: mode === "light" ? "#1c1c1c" : "#ffffff",
            secondary: mode === "light" ? "#4f4f4f" : "#b0b0b0",
          },
        },
        // Μπορείς να προσθέσεις εδώ και άλλες ρυθμίσεις (typography, κτλ)
        typography: {
          fontFamily: 'Roboto, Arial, sans-serif',
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme/>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}