import React from 'react';
import './Utils.css';

function Board({board}) {
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

  function Square({row, col, board}) {
    const piece = board[row][col].piece;
    const color = board[row][col].color;
    const bgColor = getColor(row, col);
    const fontColor = (bgColor == 'bg-black')?'white':'black';
    console.log(row, col, board[row][col]);
    return (
      <>
        <div className={`${bgColor} flex flex-nowrap flex-col align-center justify-center cursor-pointer`} style={{height:boxSize, width: boxSize, color:fontColor, fontSize:fontSize, fontWeight:'bold'}}>
          {piece?String(color+piece):''}
        </div>
      </>
    )
  }

  // const paintPiece = (row, col) => {

  // }


  const PaintSquare = () => {
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