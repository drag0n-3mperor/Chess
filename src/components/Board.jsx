import React from 'react';
import './Utils.css';
import { v4 as uuidv4 } from 'uuid';

function Board({board, setBoard}) {
  console.log(board);
  const boxSize = '80px';
  const fontSize = '24px';
  const getColor = (row, col) => {
    if (row%2 === 0) {
      if (col%2 === 0) return 'bg-white';
      return 'bg-black';
    }
    if (col%2 === 0) return 'bg-black';
    return 'bg-white';
  }

  const highlightPawn = () => {

  }

  const btnClick = (e) => {
    const row = parseInt(e.target.id[0]);
    const col = parseInt(e.target.id[1]);
    if (board[row][col].piece) {
      console.log(board[row][col]);

    }
  }

  function Square({row, col, board}) {
    const piece = board[row][col];
    const bgColor = getColor(row, col);
    const fontColor = (bgColor == 'bg-black')?'white':'black';
    console.log(row, col, board[row][col]);
    return (
      <>
        <div id={String(row)+String(col)} className={`${bgColor} flex flex-nowrap flex-col align-center justify-center cursor-pointer`} style={{height:boxSize, width: boxSize, color:fontColor, fontSize:fontSize, fontWeight:'bold'}} onClick={btnClick}>
          {piece?String(piece.color+piece.constructor.name):''}
        </div>
      </>
    )
  }

  // const paintPiece = (row, col) => {

  // }


  function PaintSquare() {
    let matrix = [];
    for (let row=0; row<8; row++) {
      let temp = [];
      for (let col=0; col<8; col++) {
        temp.push(<Square row={row} col={col} board={board} />);
      }
      matrix.push(
        <div className='flex flex-row m-0 p-0 gap-0'>{temp}</div>
      );
    }
    return matrix;
  }

  return (
    <>
      <PaintSquare />
    </>
  )
}

export default Board