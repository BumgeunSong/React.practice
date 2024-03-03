import Button from "./Button";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1 className={styles.title}>Welcome to Eddy's App</h1>
          <p>{counter}</p>
          <Button text="Count up" onClick={onClick}/>
        </div>
      </header>
    </div>
  );
}

export default App;
