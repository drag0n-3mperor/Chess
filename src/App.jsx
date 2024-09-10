
import { useEffect, useContext } from 'react';
import childContext from './context/childContext.js';
import Board from './components/Board';
import './App.css';
import setHighlightColor from './hooks/setHighlightColor.js';
import checkForMate from './hooks/checkForMate.js';
import checkForCheckMate from './hooks/checkForCheckMate.js';

function App() {
  const {
    boxSize, setBoxSize, fontSize, setFontSize,
    board, setBoard, highlight,
    setHighlight, selectedPiece,
    setSelectedPiece, turn, setTurn,
    screenSize, setscreenSize
  } = useContext(childContext);

  useEffect(() => {
    setHighlightColor(board, highlight);
    checkForMate(board, turn);
    checkForCheckMate(board, turn);
    console.log(board)
  }, [highlight]);

  useEffect(() => {
    const handleScreenResize = () => {
      setscreenSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
    window.addEventListener('resize', handleScreenResize);
  }, []);

  useEffect(() => {
    setBoxSize(Math.floor(Math.min(screenSize.width, screenSize.height) / 8));
  }, [screenSize]);

  useEffect(() => {
    setFontSize(Math.floor(boxSize / 2));
  }, [boxSize]);


  return (
    <div className='flex flex-col w-full h-full justify-center align-center'>
      <div className="flex flex-row w-full h-full justify-center align-center">
        <div className="flex flex-col justify-center align-center">
          <Board />
        </div>
      </div>
    </div>
  )
}

export default App
