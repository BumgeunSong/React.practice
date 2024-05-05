import { RouterProvider, createBrowserRouter, useSearchParams } from "react-router-dom";
import Coins from "./Coins";
import Coin from "./Coin";
import Chart from "./Chart";
import Price from "./Price";
import Prices from "./Price";
import { fetchCoinHistory, fetchCoinPrices } from "../Api";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Coins></Coins>,
    },
    {
        path: "/:coinId",
        element: <Coin />,
        children: [
            {
                path: "chart",
                element: <Chart />
            },
            {
                path: "/:coinId/prices",
                element: <Prices />,
                loader: ({ params }) => (
                    fetchCoinPrices(params.coinId, 5)
                )
            }
        ]
    }
]);

function Router() {
    return <RouterProvider router={router} />
}

export default Router