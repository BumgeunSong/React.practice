import { useParams } from "react-router-dom"

export default function Coin() {
    const { coinId } = useParams()
    return <h1>이것은 {coinId} 코인</h1>
}