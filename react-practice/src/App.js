import Button from "./Button";
import styles from "./App.module.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1 className={styles.title}>Welcome to Eddy's App</h1>
          <Button text="let's go"/>
        </div>
      </header>
    </div>
  );
}

export default App;
