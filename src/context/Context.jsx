
import childContext from "./childContext";
import { useState } from "react";
import createBoard from '../hooks/createBoard'

const Context = (props) => {
    const [board, setBoard] = useState(createBoard())
    const [highlight, setHighlight] = useState([]);
    const [selectedPiece, setSelectedPiece] = useState(null);
    const [turn, setTurn] = useState('W');
    const [screenSize, setscreenSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });
    const [boxSize, setBoxSize] = useState(
        Math.floor(Math.min(screenSize.width, screenSize.height) / 8)
    );
    const [fontSize, setFontSize] = useState(Math.floor(boxSize / 2));
    const childContent = {
        boxSize: boxSize,
        setBoxSize: setBoxSize,
        fontSize: fontSize,
        setFontSize: setFontSize,
        board: board,
        setBoard: setBoard,
        highlight: highlight,
        setHighlight: setHighlight,
        selectedPiece: selectedPiece,
        setSelectedPiece: setSelectedPiece,
        turn: turn,
        setTurn: setTurn,
        screenSize: screenSize,
        setscreenSize: setscreenSize
    };

    return (
        <childContext.Provider value={childContent}>
            {props.children}
        </childContext.Provider>
    )
}

export default Context;