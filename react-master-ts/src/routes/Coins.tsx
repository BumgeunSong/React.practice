import styled from "styled-components";
import Coin from "./Coin";

const Title = styled.h1`
    color: ${props => props.theme.primary}
`

const Container = styled.div``
const Header = styled.header``
const CoinList = styled.ul``
const CoinItem = styled.li``

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
    return <Container>
        <Header>
            <Title>코인 목록</Title>
        </Header>
        <CoinList>
            {coinSample.map(coin => <CoinItem key={coin.id}>name: {coin.name}</CoinItem>)}
        </CoinList>
    </Container>
}


export default Coins;