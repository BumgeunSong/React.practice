import styled from "styled-components";
import Coin from "./Coin";
import { Link } from "react-router-dom";
import { useState } from "react";

const Title = styled.h1`
    font-size: 48px;
    color: ${props => props.theme.primary}
`

const Container = styled.div`
    padding: 0px 20px;
    max-width: 480px;
    margin: 0 auto;
`

const Header = styled.header``
const CoinList = styled.ul``
const CoinItem = styled.li`
    margin-top: 16px;
    margin-bottom: 16px;
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.background};
    border-radius: 16px;
    a {
        padding: 16px;
        transition: color 0.2s ease-in;
        display: block;
    }
    &:hover {
	a {
		color: ${(props) => props.theme.secondary};
	}
  }
`

interface CoinInterface {
    id: string,
    name: string,
    symbol: string,
    rank: number,
    is_new: boolean,
    is_active: boolean,
    type: string
}

const coinSample =
    [
        {
            "id": "tnb-time-new-bank",
            "name": "Time New Bank",
            "symbol": "TNB",
            "rank": 0,
            "is_new": false,
            "is_active": false,
            "type": "token"
        },
        {
            "id": "cat-catcoin-inu",
            "name": "CatCoin Inu",
            "symbol": "CAT",
            "rank": 0,
            "is_new": false,
            "is_active": false,
            "type": "token"
        },
        {
            "id": "xpa-xpa",
            "name": "XPA",
            "symbol": "XPA",
            "rank": 0,
            "is_new": false,
            "is_active": false,
            "type": "token"
        },
        {
            "id": "doge-dogearm",
            "name": "DOGEARM",
            "symbol": "$DOGE",
            "rank": 0,
            "is_new": false,
            "is_active": false,
            "type": "token"
        }
    ];

function Coins() {
    const [coins, setCoins] = useState<CoinInterface[]>([])

    return <Container>
        <Header>
            <Title>코인 목록</Title>
        </Header>
        <CoinList>
            {coins.map((coin) => (
                <CoinItem key={coin.id}>
                    <Link to={`/${coin.id}`}>{coin.name} &rarr;</Link> 
                </CoinItem>
            ))}
        </CoinList>
    </Container>
}

export default Coins;