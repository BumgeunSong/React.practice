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
            <h1>Coins & Price</h1>
            {loading ? (
                <p>loading...</p>
            ) : (
                coins.map((coin) => <CoinView key={coin.key} coin={coin} />)
            )}
        </div>
    );
}

function CoinView({ coin }) {
    return (
        <div>
            <h3>
                {coin.name}
            </h3>
            <p>
                {coin.quotes.USD.price.toFixed(2)} <strong>USD</strong>
            </p>
        </div>
    )
}

export default CoinTrackerApp;
