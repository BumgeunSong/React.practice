import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Coins from "./Coins";
import Coin from "./Coin";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Coins></Coins>,
    },
    {
        path: "/:coinId",
        element: <Coin />
    }
]);

function Router() {
    return <RouterProvider router={router} />
}

export default Router