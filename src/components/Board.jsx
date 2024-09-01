
import { useContext } from "react";
import Square from "./Square";
import childContext from "../context/childContext";

function Board() {
  const {
    boxSize, fontSize, board, setBoard, 
    highlight, setHighlight, selectedPiece,
    setSelectedPiece, turn, setTurn
  } = useContext(childContext);

  let matrix = [];
  for (let row = 0; row < 8; row++) {
    let temp = [];
    for (let col = 0; col < 8; col++) {
      temp.push(<Square key={String(row) + String(col)} row={row} col={col} />);
    }
    matrix.push(
      <div key={row} className='flex flex-row p-0 gap-0'>{temp}</div>
    );
  }
  return matrix;
}

export default Board;