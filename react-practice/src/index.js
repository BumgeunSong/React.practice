import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CoinTrackerApp from './CoinTrackerApp';
import TicTacToe from './Tic-tac-toe';
import MovieApp from './Components/MovieApp';
import Home from './routes/Home';
import Detail from './routes/Detail';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MovieDetail from './Components/MovieDetail';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/movies",
    element: <MovieApp />,
  },
  {
    path: "/movies/detail/:id",
    element: <MovieDetail />,
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);