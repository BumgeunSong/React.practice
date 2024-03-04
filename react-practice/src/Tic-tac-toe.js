import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import styles from './Tic-tac-toe.module.css';

import App from './App';

function Square({ value }) {
    return <button className="square">{value}</button>;
}

function TicTacToe() {
    return (
        <div className="TicTacToe">
        </div>
    )
}

export default TicTacToe;