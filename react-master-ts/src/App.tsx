import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme';
import Router from './routes/Router';
import { QueryClient, QueryClientProvider } from "react-query";
import GlobalStyle from './GlobalStyle';
import { useState } from 'react';

function App() {
  const [isDark, setIsDark] = useState(false);
  const toggleDarkMode = () => setIsDark((current) => !current)
  return (
    <>
      <QueryClientProvider client={new QueryClient()}>
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
          <button onClick={toggleDarkMode}>Toggle Mode</button>
          <GlobalStyle />
          <Router />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
