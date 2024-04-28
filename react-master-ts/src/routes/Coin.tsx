import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom"
import CoinInfoInterface from "./CoinInfoInterface";

interface RouterState {
    name: string;
}

export default function Coin() {
    const { coinId } = useParams()
    const location = useLocation()
    const state = location.state as RouterState

    const [coinInfo, setCoinInfo] = useState<CoinInfoInterface>()

    useEffect(() => {
        (async () => {
            const response = await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`);
            const json = await response.json();
            setCoinInfo(json)
        })();
    }, [])


    return (
        <>
            {state ? (
                <><h1>이것은 {state.name} 코인</h1><p>name: {coinInfo?.name}</p><p>Description: {coinInfo?.description}</p><img src={`${coinInfo?.whitepaper.thumbnail}`} /><p>Description: {coinInfo?.whitepaper.link}</p></>
            ) : (
                <h1>Loading...</h1>
            )}
        </>
    );
}