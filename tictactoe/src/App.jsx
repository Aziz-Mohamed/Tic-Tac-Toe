import { useState } from 'react';
import GameBoard from './components /GameBoard';
import './App.css';


let initialGameBoard = [
  {id: 1, value: null, order: null, isClicked: false}, 
  {id: 2, value: null, order: null, isClicked: false}, 
  {id: 3, value: null, order: null, isClicked: false},
  {id: 4, value: null, order: null, isClicked: false}, 
  {id: 5, value: null, order: null, isClicked: false}, 
  {id: 6, value: null, order: null, isClicked: false},
  {id: 7, value: null, order: null, isClicked: false}, 
  {id: 8, value: null, order: null, isClicked: false}, 
  {id: 9, value: null, order: null, isClicked: false}
];


function App() {
  // const [count, setCount] = useState(0); 
  const [gameBoard, setGameBoard] = useState(initialGameBoard);


  return (
    <>
      <h1> Tic Tac Toe</h1>
    {/* <Log logList = {gameBoard}/> */}
    <GameBoard gameBoard={gameBoard} setGameBoard={setGameBoard}/>
  
    </>
  )
}

export default App
