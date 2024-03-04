import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import styles from './Tic-tac-toe.module.css';

import App from './App';

function Square({ value }) {
    return <button className={styles.square}>{value}</button>;
}

function TicTacToe() {
    const rows = Array(3).fill(Array(3).fill("X"))
    return (
        <div className="TicTacToe">
            <Board rows={rows} />
        </div>
    )
}

function Board({ rows }) {
    return (
        <div className="Board">
            {rows.map((row, index) => <Row key={index} values={row} />)}
        </div>
    )
}

function Row({ values }) {
    return (
        <div className="board-row">
            {values.map((value, index) => <Square key={index} value={value} />)}
        </div>
    )
}

export default TicTacToe;