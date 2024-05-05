import React from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { fetchCoinHistory } from "../Api";
import { useParams } from "react-router-dom";

// Define the ICoinPriceHistory interface
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

// Styled components for the chart
const ChartContainer = styled.div`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
`;

const ChartTitle = styled.h2`
    text-align: center;
`;

const ChartWrapper = styled.div`
    border: 1px solid ${props => props.theme.secondary};
    padding: 20px;
    margin-top: 16px;
`;

function PriceChart() {
    const { coinId } = useParams()
    const { isLoading, data } = useQuery<ICoinPriceHistory[]>(["history", coinId], () => fetchCoinHistory(coinId))

    // Calculate max and min prices
    let maxPrice = 0;
    let minPrice = Number.MAX_VALUE;

    if (data) {
        data.forEach((priceData) => {
            const price = parseFloat(priceData.close);
            if (price > maxPrice) maxPrice = price;
            if (price < minPrice) minPrice = price;
        });
    }

    return (
        <ChartContainer>
            <ChartTitle>Price Chart</ChartTitle>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <ChartWrapper>
                    {data?.map((priceData) => (
                        <p>{priceData.close}</p>
                    ))}
                </ChartWrapper>
            )}
        </ChartContainer>
    );
}

export default PriceChart;
