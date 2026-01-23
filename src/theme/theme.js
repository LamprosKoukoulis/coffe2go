import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#6f4e37", // coffee ☕
    },

    background: {
      default: "#f4f6f8",
      paper: "#ffffff",
    },

    text: {
      primary: "#1c1c1c",
      secondary: "#4f4f4f",
    },
  },
});

export default theme;
