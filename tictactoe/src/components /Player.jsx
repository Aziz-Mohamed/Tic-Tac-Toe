import { useState } from "react";

const player = ({gameBoard, setGameBoard ,player, setPlayer}) => {
  const [edit, setEdit] = useState('Edit');

  const handleClick = () => {
    setEdit((prev) => prev === 'Edit' ? 'Save' : 'Edit')
  }
  
const handleChangePlayerName = (e)=>{
    setPlayer(e.target.value)
}

  return (
    <>
      <div className="player">
        {edit === 'Edit' ? (<h2>{gameBoard.playerName}</h2>) : (
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

export default player
