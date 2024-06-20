
import { useState, useContext, useEffect } from 'react';
// import { handleWinner } from './handleWinner';
import { Context } from '../App';


function GameBoard({gameBoard, setGameBoard}) {
  const [clickCount, setClickCount] = useState(0); 
  const [winner, setWinner] = useState('')
  const {firstPlayer, secondPlayer} = useContext(Context);
  useEffect(() => {
    handleWinner();
  }, [gameBoard]);

  const handleClick = (boxId) => {
    if (winner) return;
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

  };


  // console.log(`GameBoard: ${gameBoard}`);
  // console.log(`GameBoard: ${JSON.stringify(gameBoard)}`);


  const handleWinner = () => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
  
    for (let line of lines) {
      const [a, b, c] = line;
      if (gameBoard[a].value && gameBoard[a].value === gameBoard[b].value && gameBoard[a].value === gameBoard[c].value) {
        if (gameBoard[a].value === 'x') {
          setWinner(firstPlayer);
          console.log(firstPlayer);
        } else if (gameBoard[a].value === 'o') {
          setWinner(secondPlayer);
          console.log(secondPlayer);
        }
        return;
      }
    }
    if (gameBoard.every(box => box.isClicked)) {
      setWinner('Draw');
      console.log('Draw');
    }
  };


  return (
    <div className='game-board'>
      <h1> Gameboard component</h1>
      <h3 className={winner? "visible" : "hidden"} > <span>  {winner? winner: ""}  </span></h3>
      <ol className="box-container">
        {gameBoard.map(box => (
          <li key={box.id} className="box">
            <button onClick={() => handleClick(box.id)}>
              {box.value}
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default GameBoard;