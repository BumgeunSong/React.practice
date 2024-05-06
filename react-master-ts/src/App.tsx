import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme';
import Router from './routes/Router';
import { QueryClient, QueryClientProvider } from "react-query";
import GlobalStyle from './GlobalStyle';
import { useState } from 'react';
import { RecoilRoot, atom, useRecoilState, useRecoilValue } from 'recoil';
import { isDarkModeState } from './atoms';

function App() {
  const isDarkMode = useRecoilValue(isDarkModeState)
  return (
    <>
      <QueryClientProvider client={new QueryClient()}>
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
          <GlobalStyle />
          <Router />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
