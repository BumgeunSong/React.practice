import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CoinTrackerApp from './CoinTrackerApp';
import TicTacToe from './Tic-tac-toe';
import MovieApp from './MovieApp';
import Home from './routes/Home';
import Detail from './routes/Detail';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


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
    path: "/movies/detail",
    element: <Detail />,
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);