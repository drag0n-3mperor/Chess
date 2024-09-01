
import childContext from "./childContext";
import { useState } from "react";
import createBoard from '../hooks/createBoard'

const Context = (props) => {
    const boxSize = '80px';
    const fontSize = '40px';
    const [board, setBoard] = useState(createBoard())
    const [highlight, setHighlight] = useState([]);
    const [selectedPiece, setSelectedPiece] = useState(null);
    const [turn, setTurn] = useState('W');
    const childContent = {
        boxSize: boxSize,
        fontSize: fontSize,
        board: board,
        setBoard: setBoard,
        highlight: highlight,
        setHighlight: setHighlight,
        selectedPiece: selectedPiece,
        setSelectedPiece: setSelectedPiece,
        turn: turn,
        setTurn: setTurn
    };

    return (
        <childContext.Provider value={childContent}>
            {props.children}
        </childContext.Provider>
    )
}

export default Context;