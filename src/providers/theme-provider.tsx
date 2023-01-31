import { memo, PropsWithChildren } from "react";
import { createTheme, CssBaseline, ThemeProvider as MUIThemeProvider } from "@mui/material";
import { ThemeOptions } from "@mui/material/styles";

export const themeOptions: ThemeOptions = {
  spacing: 4,
  typography: {
    h3: {
      fontSize: "36px",
      fontWeight: 600,
      lineHeight: "42px",
    },
  },
  palette: {
    primary: {
      main: "#5664D2",
      light: "#7783DB",
      dark: "#3C4693",
    },
    secondary: {
      main: "#E91E63",
      light: "#F06191",
      dark: "#BE134D",
    },
    text: {
      primary: "#253858",
      secondary: "rgba(66, 82, 110, 0.86)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    info: {
      main: "#2196F3",
      light: "#64B6F7",
      dark: "#0B79D0",
      contrastText: "#FFF",
    },
    success: {
      main: "#4CAF50",
      light: "#7BC67E",
      dark: "#3B873E",
      contrastText: "#FFF",
    },
    error: {
      main: "#F44336",
      light: "#F88078",
      dark: "#E31B0C",
      contrastText: "#FFF",
    },
    warning: {
      main: "#ff9800",
      light: "#FFB547",
      dark: "#C77700",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    background: {
      default: "#F4F5F7",
      primary: "rgba(86, 100, 210, 0.08)",
      primaryHover: "rgba(86, 100, 210, 0.04)",
    },
  },
};

const mainTheme = createTheme(themeOptions);

export const ThemeProvider = memo(function ThemeProvider({ children }: PropsWithChildren) {
  return (
    <>
      <CssBaseline />
      <MUIThemeProvider theme={mainTheme}>{children}</MUIThemeProvider>
    </>
  );
});
