
import { useEffect, useState } from 'react';
import './App.css'
import createBoard from './hooks/createBoard';

function App() {
  const boxSize = '80px';
  const fontSize = '24px';
  const [board, setBoard] = useState(createBoard())
  const [highlight, setHighlight] = useState([]);
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [turn, setTurn] = useState('W');
  
  const getColor = (row, col) => {
    if (row % 2 === 0) {
      if (col % 2 === 0) return 'white';
      return 'black';
    }
    if (col % 2 === 0) return 'black';
    return 'white';
  }

  const btnClick = (e) => {
    const arr = [parseInt(e.target.id[0]), parseInt(e.target.id[1])];
    const row = arr[0];
    const col = arr[1];
    const elem = document.getElementById(String(row) + String(col));

    if (selectedPiece && highlight.some(
      highlight => highlight.length === arr.length && highlight.every((value, index) => value === arr[index])
    )) {
      const prevId = selectedPiece.id;
      let temp = [...board];
      temp[arr[0]][arr[1]] = temp[parseInt(prevId[0])][parseInt(prevId[1])];
      temp[arr[0]][arr[1]].row = arr[0];
      temp[arr[0]][arr[1]].col = arr[1];
      temp[arr[0]][arr[1]].moves++;
      setTurn((turn == 'W') ? 'B' : 'W');
      temp[parseInt(prevId[0])][parseInt(prevId[1])] = null;
      setBoard(temp);
      setSelectedPiece(null);
      setHighlight([]);
      return;
    }

    setHighlight([]);
    setSelectedPiece(elem);
    if (board[row][col] && board[row][col].color === turn) {
      setHighlight(board[row][col].onClick(board, setBoard));
      console.log('highlight', highlight)
    }
  }

  function Square({ row, col, board }) {
    const piece = board[row][col];
    const bgColor = getColor(row, col);
    const fontColor = (bgColor == 'black') ? 'white' : 'black';
    return (
      <>
        <div id={String(row) + String(col)}
          className='flex flex-nowrap flex-col align-center justify-center cursor-pointer'
          style={{ height: boxSize, width: boxSize, color: fontColor, fontSize: fontSize, fontWeight: 'bold', backgroundColor: bgColor, margin: '2px' }}
          onClick={btnClick}
        >
          {piece ? (piece.color + piece.symbol) : ''}
        </div>
      </>
    )
  }

  const PaintSquare = () => {
    let matrix = [];
    for (let row = 0; row < 8; row++) {
      let temp = [];
      for (let col = 0; col < 8; col++) {
        temp.push(<Square row={row} col={col} board={board} />);
      }
      matrix.push(
        <div className='flex flex-row p-0 gap-0'>{temp}</div>
      );
    }
    return matrix;
  }

  useEffect(() => {
    console.log(highlight)
    if (highlight.length > 0) {
      highlight.forEach((e) => {
        const sq = document.getElementById(String(e[0]) + String(e[1]));
        sq.style.backgroundColor = 'green';
      })
    }
  }, [highlight]);

  useEffect(() => {
    <PaintSquare />
  }, [board]);

  useEffect(() => {
    console.log(turn);
  });

  return (
    <>
      <PaintSquare />
    </>
  )
}

export default App
