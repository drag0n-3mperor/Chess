
import getBgColor from "../hooks/getBgColor";
import onBtnClick from "../hooks/onBtnClick";
import { useContext } from "react";
import childContext from "../context/childContext";

function Square({ row, col }) {
    const {
        boxSize, fontSize, board, setBoard,
        highlight, setHighlight, selectedPiece,
        setSelectedPiece, turn, setTurn
    } = useContext(childContext);
    const piece = board[row][col];
    const bgColor = getBgColor(row, col);
    const fontColor = board[row][col] ? (board[row][col].color === 'W') ? 'white' : 'black' : '';
    const id = String(row) + String(col);
    return (
        <>
            <button id={id}
                className='cursor-pointer rounded-none'
                style={{ height: boxSize, width: boxSize, color: fontColor, fontSize: fontSize,
                fontWeight: 'bold', backgroundColor: bgColor }}
                onClick={(e) => onBtnClick(e, selectedPiece, setSelectedPiece, highlight,
                setHighlight, board, turn, setTurn, setBoard)}
            >
                {piece ? piece.symbol : ''}
            </button>
        </>
    )
}

export default Square;