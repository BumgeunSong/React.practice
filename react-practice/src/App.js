import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);

  const onChange = (event) => setKeyword(event.target.value)
  console.log("Render Component")

  const callAPI = () => {
    console.log("Call THE API..")
  }

  const searchKeyword = () => {
    if (keyword !== "" && keyword.length >= 4) {
      console.log("Search for " + keyword)
    }
  }
  useEffect(callAPI, []) // 최초 render 시에만 callAPI를 실행한다.
  useEffect(searchKeyword, [keyword]) // keyword state가 변경될 때만 searchKeyword를 실행한다.
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1 className={styles.title}>Welcome to Eddy's App</h1>
          <input value={keyword} type="text" placeholder="Search here" onChange={onChange}></input>
          <p>{counter}</p>
          <Button text="Count up" onClick={onClick}/>
        </div>
      </header>
    </div>
  );
}

export default App;
