import { useLocation, useParams } from "react-router-dom"

interface RouterState {
    name: string;
}

export default function Coin() {
    const { coinId } = useParams()
    const location = useLocation()
    const state = location.state as RouterState
    return <h1>이것은 {state.name} 코인</h1>
}