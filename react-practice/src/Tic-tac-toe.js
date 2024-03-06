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

function Board({ boardModel }) {
    return (
        <div className="Board">
            {
                boardModel.map((rowModel, rowIndex) =>
                    <Row key={rowIndex} rowIndex={rowIndex} rowModel={rowModel} />
                )
            }
        </div>
    )
}

function Row({ rowIndex, rowModel }) {
    return (
        <div className="board-row">
            {
                rowModel.map((value, columnIndex) =>
                    <Square
                        key={rowIndex + columnIndex}
                        rowIndex={rowIndex}
                        collumnIndex={columnIndex}
                        value={value} />
                )
            }
        </div>
    )
}

function Square({ rowIndex, collumnIndex, value }) {
    return <button className={styles.square}>{value}</button>;
}

export default TicTacToe;