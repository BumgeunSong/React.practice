import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import styles from './Tic-tac-toe.module.css';
import { useState, useEffect } from "react";
import { createContext, useContext } from 'react';

import App from './App';

function TicTacToe() {
    const defaultBoardModel = Array(3).fill(Array(3).fill("X"))
    const [boardModel, setBoardModel] = useState(defaultBoardModel)
    const BoardContext = createContext(defaultBoardModel)

    return (
        <div className="TicTacToe">
            <BoardContext.Provider boardModel={boardModel}>
                <Board boardModel={boardModel} />
            </BoardContext.Provider>
        </div>
    )
}

function Board({ boardModel }) {
    const boardModelFromContext = useContext(BoardContext)
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