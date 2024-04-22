import styled from "styled-components";
import Coin from "./Coin";

const Title = styled.h1`
    color: ${props => props.theme.primary }
`

function Coins() {
    return <Title>코인!</Title>
}

export default Coins;