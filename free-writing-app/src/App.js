import { TextField } from '@mui/material';
import './App.css';
import { useState } from 'react';

function App() {
  const [text, setText] = useState("")
  return (
    <div className="App">
      <TextField value={text} label="텍스트를 입력해주세요" onChange={(event) => {
        setText(event.target.value)
      }} />

      <h3>Your Text:</h3>
      <p>{text}</p>
    </div>
  );
}

export default App;
