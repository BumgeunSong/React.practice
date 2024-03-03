import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("")  
  const onChange = (event) => setToDo(event.target.value);
  console.log(toDo);
  return (
    <div className="App">
      <input value={toDo} type="text" placeholder="투두를 입력하세요" onChange={onChange}/>
    </div>
  );
}

export default App;
