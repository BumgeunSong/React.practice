import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import TicTacToe from './Tic-tac-toe';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <TicTacToe />
  // </React.StrictMode>
);