import Button from "./Button";
import styles from "./CoinTrackerApp.module.css";
import { useState, useEffect } from "react";

function CoinTrackerApp() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([])

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=10")
    .then((response) => response.json())
    .then((json) => {
        setCoins(json)
        setLoading(false)
    })
  }, [])

  return (
    <div className="App">
      <h1>오늘의 비트코인 가격</h1>
      {loading ? <p>loading...</p> : null}
    </div>
  );
}

export default CoinTrackerApp;
