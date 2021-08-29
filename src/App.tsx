import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Routes } from "routes";

import { GlobalStyles } from "styles/global";
import { theme } from "styles/theme";
import { AppProvider } from "context";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AppProvider>
          <Routes />
        </AppProvider>
        <GlobalStyles />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
