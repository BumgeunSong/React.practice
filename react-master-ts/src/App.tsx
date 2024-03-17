import React, { useState } from 'react';
import styled from 'styled-components';

function App() {
  const [value, setValue] = useState("")
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setValue(value)
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(value)
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={value} type="text" placeholder='username' onChange={onChange}>
        </input>
        <button>Login</button>
      </form>
    </div>
  );
}

export default App;
