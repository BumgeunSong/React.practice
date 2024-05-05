import { useLoaderData } from "react-router-dom";
import { CoinPrice } from "./CoinPriceInterface";
import { Overview, OverviewItem } from "./Overview";

function Prices() {
    let coinPriceData = useLoaderData() as CoinPrice[]
    console.log(coinPriceData)
    return (
        <>
            {coinPriceData.map((coinPrice) => (
                <Overview>
                    <OverviewItem>
                        <span>Exchange</span>
                        <span>{coinPrice?.exchange_name}</span>
                    </OverviewItem>
                    <OverviewItem>
                        <span>Price</span>
                        <span>{coinPrice?.quotes.KRW.price.toFixed(0)} KRW</span>
                    </OverviewItem>
                    <OverviewItem>
                        <span>24H Volume</span>
                        <span>{coinPrice?.adjusted_volume_24h_share.toFixed(3)}</span>
                    </OverviewItem>
                </Overview>
            ))
            }
        </>
    )
}

export default Prices;