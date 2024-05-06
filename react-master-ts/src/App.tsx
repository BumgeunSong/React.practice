import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme';
import Router from './routes/Router';
import { QueryClient, QueryClientProvider } from "react-query";
import GlobalStyle from './GlobalStyle';
import { useState } from 'react';

function App() {
  return (
    <>
      <QueryClientProvider client={new QueryClient()}>
        <ThemeProvider theme={darkTheme}>
          <GlobalStyle />
          <Router />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
