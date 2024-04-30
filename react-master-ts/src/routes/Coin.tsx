import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom"
import CoinInfoInterface from "./CoinInfoInterface";
import styled from "styled-components";
import { CoinPrice } from "./CoinPriceInterface";

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
    const [coinPrices, setCoinPrices] = useState<[CoinPrice]>()

    useEffect(() => {
        const fetchCoinInfo = async () => {
            const response = await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`);
            const json = await response.json();
            setCoinInfo(json)
        }

        const fetchCoinPrices = async () => {
            const reponse = await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}/markets?quotes=KRW`);
            const json = await reponse.json();
            setCoinPrices(json.slice(0, 20))
        }

        fetchCoinInfo()
        fetchCoinPrices()
    }, [coinId]) // coinID가 변하면 effect를 다시 호출

    return (
        <CoinContainer>
            {state ? (
                <>
                <CoinTitle>이것은 {state.name} 코인</CoinTitle>
                <p>name: {coinInfo?.name}</p>
                <CoinDescription>Description - {coinInfo?.description}</CoinDescription>
                <h2>코인 가격</h2>
                {coinPrices?.map((coinPrice) => 
                    <CoinPriceItem key={coinPrice.exchange_id} exchange_name={coinPrice.exchange_name} price={coinPrice.quotes.KRW.price} />
                )

                }
                <CoinImage src={`${coinInfo?.whitepaper.thumbnail}`} />
                <a href={`${coinInfo?.whitepaper.link}`}>Whitepaper</a>
                </>
            ) : (
                <h1>Loading...</h1>
            )}
        </CoinContainer>
    );
}

interface CoinPriceProps {
    price: number;
    exchange_name: string;
}

function CoinPriceItem(props: CoinPriceProps) {
    return (
        <CoinItem>
            {props.exchange_name}: {props.price.toFixed(2)} KRW
        </CoinItem>
    )
}

const CoinItem = styled.li`
    margin-top: 16px;
    margin-bottom: 16px;
    border-radius: 16px;
`