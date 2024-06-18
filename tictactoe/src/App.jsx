import { useState } from 'react';
import GameBoard from './components /GameBoard';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1> Tic Tac Toe</h1>
    <Log logList = {gameBoard}/>
    <GameBoard/>
  
    </>
  )
}

export default App
