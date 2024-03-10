import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CoinTrackerApp from './CoinTrackerApp';
import TicTacToe from './Tic-tac-toe';
import MovieApp from './MovieApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
      <MovieApp></MovieApp>
  // </React.StrictMode>
);