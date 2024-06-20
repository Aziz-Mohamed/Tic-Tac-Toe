export const handleWinner = (gameBoard)=> {

  if (
    gameBoard[0].value === gameBoard[1].value === gameBoard[2].value === 'x' ||
    gameBoard[3].value === gameBoard[4].value === gameBoard[5].value === 'x' ||
    gameBoard[6].value === gameBoard[7].value === gameBoard[8].value === 'x' ||
    
    gameBoard[0].value === gameBoard[3].value === gameBoard[6].value === 'x' ||
    gameBoard[1].value === gameBoard[4].value === gameBoard[7].value === 'x' ||
    gameBoard[2].value === gameBoard[5].value === gameBoard[8].value === 'x' ||
    
    gameBoard[0].value === gameBoard[4].value === gameBoard[8].value === 'x' ||
    gameBoard[2].value === gameBoard[4].value === gameBoard[6].value === 'x' 
  ){
    setWinner (firstPlayer); 
    console.log(winner);
  }else if (
    gameBoard[0].value === gameBoard[1].value === gameBoard[2].value === 'o' ||
    gameBoard[3].value === gameBoard[4].value === gameBoard[5].value === 'o' ||
    gameBoard[6].value === gameBoard[7].value === gameBoard[8].value === 'o' ||
    
    gameBoard[0].value === gameBoard[3].value === gameBoard[6].value === 'o' ||
    gameBoard[1].value === gameBoard[4].value === gameBoard[7].value === 'o' ||
    gameBoard[2].value === gameBoard[5].value === gameBoard[8].value === 'o' ||
    
    gameBoard[0].value === gameBoard[4].value === gameBoard[8].value === 'o' ||
    gameBoard[2].value === gameBoard[4].value === gameBoard[6].value === 'o'
  ){
    setWinner (secondPlayer);
    console.log(winner);

  }
    }