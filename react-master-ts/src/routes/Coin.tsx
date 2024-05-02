import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useMatch, useParams } from "react-router-dom"
import CoinInfoInterface from "./CoinInfoInterface";
import styled from "styled-components";
import { CoinPrice } from "./CoinPriceInterface";

interface RouterState {
    name: string;
}

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;
const Loader = styled.span`
  text-align: center;
  display: block;
`;
const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;
const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
  margin-top: 16px;
  margin-bottom: 16px;
`;
const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;
const Description = styled.p`
  margin: 20px 0px;
`;

const Img = styled.img`
    width: 35px;
    height: 35px;
    margin-right: 16px;
`

const Tabs = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 24px 0px;
    gap: 8px;
`

const Tab = styled.span<{ isActive: boolean }>`
    text-align: center;
    text-transform: uppercase;
    font-size: 12px;
    background-color: ${props => props.isActive ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"};
    padding: 8px 0px;
    border-radius: 8px;

    a {
        display: block;
    }
`

export default function Coin() {
    const [loading, setLoading] = useState(true)
    const { coinId } = useParams()
    const location = useLocation()
    const state = location.state as RouterState

    const [coinInfo, setCoinInfo] = useState<CoinInfoInterface>()
    const [coinPrices, setCoinPrices] = useState<[CoinPrice]>()
    const priceMatch = useMatch("/:coinId/price")
    const chartMatch = useMatch("/:coinId/chart")

    useEffect(() => {
        const fetchCoinInfo = async () => {
            const response = await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`);
            const json = await response.json();
            setCoinInfo(json)
            setLoading(false)
        }

        const fetchCoinPrices = async () => {
            const reponse = await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}/markets?quotes=KRW`);
            const json = await reponse.json();
            setCoinPrices(json.slice(0, 5))
        }

        fetchCoinInfo()
        fetchCoinPrices()
    }, [coinId]) // coinID가 변하면 effect를 다시 호출

    return (
        <Container>
            <Header>
                <Title>
                    <Img src={`https://cryptoicon-api.pages.dev/api/icon/${coinInfo?.symbol.toLowerCase()}`} />
                    {state?.name ?
                        state.name : loading ? "Loading..." : coinInfo?.name
                    }
                </Title>
            </Header>
            {loading ? (
                <Loader>Loading...</Loader>
            ) : (
                <>
                    <Overview>
                        <OverviewItem>
                            <span>Rank of Coin</span>
                            <span>{coinInfo?.rank}</span>
                        </OverviewItem>
                        <OverviewItem>
                            <span>Symbol</span>
                            <span>{coinInfo?.symbol}</span>
                        </OverviewItem>
                        <OverviewItem>
                            <span>Started At</span>
                            <span>{dateOnlyString(coinInfo?.started_at)}</span>
                        </OverviewItem>
                    </Overview>
                    <Description>
                        {coinInfo?.description}
                    </Description>
                    {coinPrices?.map((coinPrice) => (
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
                    ))}
                    <Tabs>
                        <Tab isActive={chartMatch !== null}>
                            <Link to={`/${coinId}/chart`}>Chart</Link>
                        </Tab>
                        <Tab isActive={priceMatch !== null}>
                            <Link to={`/${coinId}/price`}>Price</Link>
                        </Tab>
                    </Tabs>
                    <br></br>
                    <Outlet />
                </>
            )}
        </ Container>
    )
}

function dateOnlyString(fullDateString: string | undefined) {
    if (fullDateString === undefined) {
        // Handle the case where fullDateString is undefined
        return "Invalid Date";
    }

    const dateObject: Date = new Date(fullDateString);
    const dateOnlyString: string = dateObject.toISOString().split('T')[0];
    return dateOnlyString; // Output: 'YYYY-MM-DD'
}