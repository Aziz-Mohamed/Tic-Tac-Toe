import { useState } from 'react';
import GameBoard from './components /GameBoard';
import {initialGameBoard} from './components /GameBoard';
import Log from './components /Log';
import './App.css';


function App() {
  // const [count, setCount] = useState(0); 
  const [gameBoard, setGameBoard] = useState(initialGameBoard);


  return (
    <>
      <h1> Tic Tac Toe</h1>
    <GameBoard gameBoard={gameBoard} setGameBoard={setGameBoard}/>
    <Log logList = {gameBoard}/>
  
    </>
  )
}

export default App
