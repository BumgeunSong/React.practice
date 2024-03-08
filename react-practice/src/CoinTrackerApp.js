import Button from "./Button";
import styles from "./CoinTrackerApp.module.css";
import { useState, useEffect } from "react";

function CoinTrackerApp() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="App">
      <h1>오늘의 비트코인 가격</h1>
      {loading ? <p>loading...</p> : null}
    </div>
  );
}

export default CoinTrackerApp;
