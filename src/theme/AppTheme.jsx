import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ColorModeContext from "./ColorModeContext"
// Δημιουργούμε το Context εδώ για να μπορούμε να το κάνουμε import στο Header


export default function AppTheme({ children }) {
  const [mode, setMode] = React.useState('light');

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  // Εδώ δημιουργούμε το theme δυναμικά βασισμένο στο "mode"
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: "#6f4e37", // Coffee ☕
          },
          background: {
            default: mode === "light" ? "#f4f6f8" : "#121212",
            paper: mode === "light" ? "#ffffff" : "#1e1e1e",
          },
          text: {
            primary: mode === "light" ? "#1c1c1c" : "#ffffff",
          },
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {/* Το CssBaseline είναι απαραίτητο για να αλλάζει το χρώμα του background σε όλο το site */}
        <CssBaseline /> 
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}