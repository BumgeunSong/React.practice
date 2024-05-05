import { Link, Outlet, useLocation, useMatch, useParams } from "react-router-dom"
import CoinInfoInterface from "./CoinInfoInterface";
import styled from "styled-components";
import { CoinPrice } from "./CoinPriceInterface";
import { useQuery } from "react-query";
import { fetchCoinInfo, fetchCoinPrices } from "../Api";
import { Overview, OverviewItem } from "./Overview";

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
    const { coinId } = useParams()
    const state = useLocation().state as RouterState

    const priceMatch = useMatch("/:coinId/prices")
    const chartMatch = useMatch("/:coinId/chart")

    const { isLoading: isInfoLoading, data: coinInfoData } = useQuery<CoinInfoInterface>(["coinInfo", coinId], () => fetchCoinInfo(coinId))

    return (
        <Container>
            <Header>
                <Title>
                    {coinInfoData?.symbol ?
                        <Img src={`https://cryptoicon-api.pages.dev/api/icon/${coinInfoData?.symbol.toLowerCase()}`} />
                        : <Img src="https://slxs.co.za/wp-content/uploads/2013/04/wallet_1.jpg" />
                    }
                    {state?.name ?
                        state.name : isInfoLoading ? "Loading..." : coinInfoData?.name
                    }
                </Title>
            </Header>
            {isInfoLoading ? (
                <Loader>Loading...</Loader>
            ) : (
                <>
                    <Overview>
                        <OverviewItem>
                            <span>Rank of Coin</span>
                            <span>{coinInfoData?.rank}</span>
                        </OverviewItem>
                        <OverviewItem>
                            <span>Symbol</span>
                            <span>{coinInfoData?.symbol}</span>
                        </OverviewItem>
                        <OverviewItem>
                            <span>Started At</span>
                            <span>{dateOnlyString(coinInfoData?.started_at)}</span>
                        </OverviewItem>
                    </Overview>
                    <Description>
                        {coinInfoData?.description}
                    </Description>
                </>
            )}
            <>
                < Tabs >
                    <Tab isActive={chartMatch !== null}>
                        <Link to={`/${coinId}/chart`}>Chart</Link>
                    </Tab>
                    <Tab isActive={priceMatch !== null}>
                        <Link to={`/${coinId}/prices`}>Price</Link>
                    </Tab>
                </Tabs>
                <br></br>
                <Outlet />
            </>
        </ Container >
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