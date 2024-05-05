import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchCoinHistory } from "../Api";
import styled from "styled-components";

interface ICoinPriceHistory {
    time_open: number;
    time_close: number;
    open: string;
    high: string;
    low: string;
    close: string;
    volume: string;
    market_cap: number;
}

function Chart() {
    const { coinId } = useParams()
    const { isLoading, data } = useQuery<ICoinPriceHistory[]>(["history", coinId], () => fetchCoinHistory(coinId))
    return (
        <>
            <h1>Chart</h1>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                data?.map((priceHistory) => (
                    <div>
                        <p>Open Price: {priceHistory.open}</p>
                        <p>Close Price: {priceHistory.open}</p>
                    </div>
                ))
            )}
        </>
    );
}

export default Chart;