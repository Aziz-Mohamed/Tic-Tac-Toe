
import { useState } from 'react';
import { handleWinner } from './handleWinner';

function GameBoard({gameBoard, setGameBoard}) {
  const [clickCount, setClickCount] = useState(0); 
  const [winner, setWinner] = useState('')


  const handleClick = (boxId) => {
    setGameBoard(prevGameBoard => {
      return prevGameBoard.map(box => {
        if (box.id === boxId && !box.isClicked) {
          const newOrder = clickCount + 1;
          const newValue = newOrder % 2 !== 0 ? 'x' : 'o';
          // console.log(newOrder);
          return {
            ...box,
            value: newValue,
            order: newOrder,
            isClicked: true
          };
        }
        return box;
      });
    });

    setClickCount(prevCount => prevCount + 1);
    handleWinner(gameBoard);
  };
  // console.log(`GameBoard: ${gameBoard}`);
  // console.log(`GameBoard: ${JSON.stringify(gameBoard)}`);
  
  return (
    <>
      <h1> Gameboard component</h1>
      <ol className="box-container">
        {gameBoard.map(box => (
          <li key={box.id} className="box">
            <button onClick={() => handleClick(box.id)}>
              {box.value}
            </button>
          </li>
        ))}
      </ol>
    </>
  );
}

export default GameBoard;