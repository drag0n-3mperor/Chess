
import { useEffect, useContext } from 'react';
import childContext from './context/childContext.js';
import Board from './components/Board';
import './App.css';
import setHighlightColor from './hooks/setHighlightColor.js';
import checkForMate from './hooks/checkForMate.js';
import checkForCheckMate from './hooks/checkForCheckMate.js';

function App() {
  const {
    boxSize, fontSize, board, setBoard,
    highlight, setHighlight, selectedPiece,
    setSelectedPiece, turn, setTurn
  } = useContext(childContext);

  useEffect(() => {
    setHighlightColor(board, highlight);
    checkForMate(board, turn);
    checkForCheckMate(board, turn);
  }, [highlight]);

  return (
    <>
      <Board />
    </>
  )
}

export default App
