import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom"
import CoinInfoInterface from "./CoinInfoInterface";
import styled from "styled-components";

interface RouterState {
    name: string;
}

const CoinContainer = styled.div`
    text-align: center;
`
const CoinTitle = styled.h1`
    margin-bottom: 20px;
`

const CoinDescription = styled.p`
    margin-bottom: 10px;
`

const CoinImage = styled.img`
    max-width: 200px;
    margin-bottom: 10px;
`

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
        <CoinContainer>
            {state ? (
                <>
                <CoinTitle>이것은 {state.name} 코인</CoinTitle>
                <p>name: {coinInfo?.name}</p>
                <CoinDescription>Description\n{coinInfo?.description}</CoinDescription>
                <CoinImage src={`${coinInfo?.whitepaper.thumbnail}`} />
                <p>Description: {coinInfo?.whitepaper.link}</p>
                </>
            ) : (
                <h1>Loading...</h1>
            )}
        </CoinContainer>
    );
}