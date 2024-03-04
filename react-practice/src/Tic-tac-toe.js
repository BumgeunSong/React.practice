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
            {rows.map((row) => (
                <div className="board-row">
                    {row.map((value) => <Square value={value} />)}
                </div>
            ))}
        </div>
    )
}

export default TicTacToe;