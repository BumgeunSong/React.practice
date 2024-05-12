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
      <h2>글자수: {text.trim().length}</h2>
      <h3>Your Text:</h3>
      <p>{text}</p>
    </div>
  );
}

export default App;
