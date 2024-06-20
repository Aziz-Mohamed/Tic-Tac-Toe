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



//  0, 1 ,2 
//  3, 4, 5
//  6, 7, 8



    // const handleWinner = ()=> {

    //   if (
    //     gameBoard[0].value === gameBoard[1].value === gameBoard[2].value === 'x' ||
    //     gameBoard[3].value === gameBoard[4].value === gameBoard[5].value === 'x' ||
    //     gameBoard[6].value === gameBoard[7].value === gameBoard[8].value === 'x' ||
        
    //     gameBoard[0].value === gameBoard[3].value === gameBoard[6].value === 'x' ||
    //     gameBoard[1].value === gameBoard[4].value === gameBoard[7].value === 'x' ||
    //     gameBoard[2].value === gameBoard[5].value === gameBoard[8].value === 'x' ||
        
    //     gameBoard[0].value === gameBoard[4].value === gameBoard[8].value === 'x' ||
    //     gameBoard[2].value === gameBoard[4].value === gameBoard[6].value === 'x' 
    //   ){
    //     setWinner (() => {firstPlayer}); 
    //     console.log(winner);
    //   }else if (
    //     gameBoard[0].value === gameBoard[1].value === gameBoard[2].value === 'o' ||
    //     gameBoard[3].value === gameBoard[4].value === gameBoard[5].value === 'o' ||
    //     gameBoard[6].value === gameBoard[7].value === gameBoard[8].value === 'o' ||
        
    //     gameBoard[0].value === gameBoard[3].value === gameBoard[6].value === 'o' ||
    //     gameBoard[1].value === gameBoard[4].value === gameBoard[7].value === 'o' ||
    //     gameBoard[2].value === gameBoard[5].value === gameBoard[8].value === 'o' ||
        
    //     gameBoard[0].value === gameBoard[4].value === gameBoard[8].value === 'o' ||
    //     gameBoard[2].value === gameBoard[4].value === gameBoard[6].value === 'o'
    //   ){
    //     setWinner (() => {secondPlayer});
    //     console.log(winner);
    
    //   }
    //     }