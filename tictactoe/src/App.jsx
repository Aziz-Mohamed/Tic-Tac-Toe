import React, { useState } from 'react';
import GameBoard from './components /GameBoard';
import {initialGameBoard} from './components /DataBase';
import Log from './components /Log';
import './App.css';
import PlayersDashBoard from './components /PlayersDashBoard';

export const Context = React.createContext();

function App() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);
  const [firstPlayer, setFirstPlayer] = useState('First Player');
  const [secondPlayer, setSecondPlayer] = useState('Second Player');

  // console.log(firstPlayer);
  // console.log(secondPlayer);

  return (
    <>
      <h1> Tic Tac Toe</h1>
    <Context.Provider value={{firstPlayer, setFirstPlayer, secondPlayer, setSecondPlayer}} >
      <PlayersDashBoard/> 
      <GameBoard gameBoard={gameBoard} setGameBoard={setGameBoard}/>
      <Log logList = {gameBoard}/>
    </Context.Provider>
  
    </>
  )
}

export default App
