import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Routes } from "routes";

import { GlobalStyles } from "styles/global";
import { theme } from "styles/theme";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes />
        <GlobalStyles />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
