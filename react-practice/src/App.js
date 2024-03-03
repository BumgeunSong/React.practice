import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("")  
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault()
    if (toDo == "") { return }
    setToDo("")
  }

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
      <input value={toDo} type="text" placeholder="투두를 입력하세요" onChange={onChange}/>
      <button>투두 추가하기</button>
      </form>
    </div>
  );
}

export default App;
