
import { useState } from 'react';
import './App.css'
import createBoard from './hooks/createBoard'
import Board from './components/Board';

function App() {
  const [board, setBoard] = useState(createBoard())
  return (
    <>
     <Board board={board} />
    </>
  )
}

export default App
