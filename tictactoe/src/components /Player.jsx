import { useState } from "react";
import PropTypes from 'prop-types' ;

function Player  ({player, setPlayer}) {
  const [edit, setEdit] = useState('Edit');

  const handleClick = () => {
    setEdit((prev) => prev === 'Edit' ? 'Save' : 'Edit')
  }
  
  const handleChangePlayerName = (e)=>{
      setPlayer(e.target.value)
  }

  // console.log(`from player component ${player}`)
  return (
    <>
      <div className="player">
        {edit === 'Edit' ? (<h2>{player}</h2>) : (
          <input
            placeholder="Enter your name"
            value={player}
            onChange={handleChangePlayerName}
          />
        )}
        <div>
          <button onClick={handleClick} > {edit} </button>
        </div>
      </div>
    </>
  )
}

Player.propTypes = {
  player: PropTypes.string,
  setPlayer: PropTypes.func,
}

export default Player
