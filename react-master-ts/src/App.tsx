import React, { useState } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { darkTheme, lightTheme } from './theme';
import Router from './routes/Router';
import GlobalStyle from './GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
