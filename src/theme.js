import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

// Create a theme instance.
const theme = createTheme({
  primary: { main: "#000000" },
  palette: {
    text: { primary: "#f8f8f2" },
    black: { main: "#000000" },
    background: {
      main: "#282a36",
      lighter: "#44475a",
      paper: "#44475a",
    },
    secondary: {
      main: "#44475a",
    },
    green: {
      dark: "#10f84b",
      main: "#50fa7b",
    },
    colors: {
      white: "#f8f8f2",
      cyan: "#8be9fd",
      green: "#50fa7b",
      pink: "#ff79c6",
      red: "#ff5555",
    },
    error: {
      main: red.A400,
    },
  },
  divider: {
    background: "#f8f8f2",
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;
