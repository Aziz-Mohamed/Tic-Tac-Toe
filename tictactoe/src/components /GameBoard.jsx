
import { useState } from 'react';






export let initialGameBoard = [
  {id: 1, value: null, order: null, isClicked: false }, 
  {id: 2, value: null, order: null, isClicked: false }, 
  {id: 3, value: null, order: null, isClicked: false },
  {id: 4, value: null, order: null, isClicked: false }, 
  {id: 5, value: null, order: null, isClicked: false }, 
  {id: 6, value: null, order: null, isClicked: false },
  {id: 7, value: null, order: null, isClicked: false }, 
  {id: 8, value: null, order: null, isClicked: false }, 
  {id: 9, value: null, order: null, isClicked: false }
];






function GameBoard({gameBoard, setGameBoard}) {
  const [clickCount, setClickCount] = useState(0); 

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












// import { useState, useRef } from 'react'

// let initialGameBoard = [
//   {id:1 ,value: null , order:null, isClicked: false }, {id:2 ,value: null , order:null, isClicked: false }, {id:3 ,value: null , order:null, isClicked: false },
//   {id:4 ,value: null , order:null, isClicked: false }, {id:5 ,value: null , order:null, isClicked: false }, {id:6 ,value: null , order:null, isClicked: false },
//   {id:7 ,value: null , order:null, isClicked: false }, {id:8 ,value: null , order:null, isClicked: false }, {id:9 ,value: null , order:null, isClicked: false }
// ]


// function GameBoard() {
//   const [gameBoard, setGameBoard] = useState(initialGameBoard);
//   let newOrder = useRef(1);

//   const handleClick = (boxId) => {
//     setGameBoard( (prevGameBoard)=>{
//       let newGameBoard = [...prevGameBoard];
//       let clickedBox = newGameBoard.find(box => box.id === boxId);
//       let {value , order, isClicked} = clickedBox;

//       if (isClicked === false){
//         if(order === null){ order = newOrder }
//         if(newOrder % 2 !== 0) {
//           value = "x";
//         }else{
//           value ="o";
//         }
//         isClicked = true;
//         newOrder ++ ;
//       }else{
//         console.log('The button already clicked once !')
//       }
      
//     } )
//   }


//   console.log(`GameBoard : ${gameBoard}`)
//   return (
//     <>
//     <h1>Gameboard component</h1>
//       <ol className='box-container'>
//         { gameBoard.map(box => (
//           <li key={box.id} className='box' > 
//             <button onClick={() => { handleClick(box.id) } }  >
//               {box.value}
//             </button>
//           </li>
//         ))}
//       </ol>
//     </>
//   )
// }

// export default GameBoard









