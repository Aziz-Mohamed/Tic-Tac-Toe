import Player from './Player';
import PropTypes from 'prop-types' ;
import { useContext } from 'react';
import { Context } from '../App';

function PlayersDashBoard() {
  const {firstPlayer, setFirstPlayer, secondPlayer, setSecondPlayer} = useContext(Context);


  return (
  <>
    <Player  player={firstPlayer} setPlayer={setFirstPlayer}/>
    <Player  player={secondPlayer} setPlayer={setSecondPlayer}/>
  </>
  )
}

PlayersDashBoard.propTypes = {
  Context: PropTypes.object,
}


  export default PlayersDashBoard
  