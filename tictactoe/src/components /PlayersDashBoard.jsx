import Player from './Player';

function PlayersDashBoard({gameBoard, setGameBoard, firstPlayer, setFirstPlayer, secondPlayer, setSecondPlayer}) {
  return (
  <>
    <Player gameBoard={gameBoard} setGameBoard={setGameBoard} Player={firstPlayer} setPlayer={setFirstPlayer}/>
    <Player gameBoard={gameBoard} setGameBoard={setGameBoard} Player={secondPlayer} setPlayer={setSecondPlayer}/>
  </>
  )
}

export default PlayersDashBoard
