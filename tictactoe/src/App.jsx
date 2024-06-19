import { useState } from 'react';
import GameBoard from './components /GameBoard';
import {initialGameBoard} from './components /GameBoard';
import Log from './components /Log';
import './App.css';
import PlayersDashBoard from './components /PlayersDashBoard';


function App() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);
  const [firstPlayer, setFirstPlayer] = useState('First Player');
  const [secondPlayer, setSecondPlayer] = useState('Second Player');

  return (
    <>
      <h1> Tic Tac Toe</h1>
    <PlayersDashBoard gameBoard={gameBoard} setGameBoard={setGameBoard}
      firstPlayer={firstPlayer} setFirstPlayer={setFirstPlayer}
      secondPlayer={secondPlayer} setSecondPlayer={setSecondPlayer} /> 
    <GameBoard gameBoard={gameBoard} setGameBoard={setGameBoard}/>
    <Log logList = {gameBoard}/>
  
    </>
  )
}

export default App
