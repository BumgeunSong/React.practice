import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme';

const Conatiner = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`

const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`

function App() {
  const [value, setValue] = useState("")
  const [isDarkMode, setIsDarkMode] = useState(false)
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setValue(value)
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(value)
    setIsDarkMode((previous) => !previous)
  }
  
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
    <Conatiner>
      <H1>Booya</H1>
      <form onSubmit={onSubmit}>
        <input value={value} type="text" placeholder='username' onChange={onChange}>
        </input>
        <button>Login</button>
      </form>
    </ Conatiner>
    </ThemeProvider>
  );
}

export default App;
