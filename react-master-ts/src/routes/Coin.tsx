import { useParams } from "react-router-dom"

export default function Coin() {
    const { coinId } = useParams()
    return <h1>코인 폰트가 잘 적용되었는지 볼까? {coinId} Coin </h1>
}