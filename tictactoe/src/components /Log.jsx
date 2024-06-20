import { useContext } from "react";
import { Context } from "../App";


function Log({logList}) {

  const {firstPlayer, secondPlayer} = useContext(Context);
  
  const reversedLogList = logList.slice().sort((boxA, boxB) => {
    const orderA = boxA.order === null ? Infinity : boxA.order;
    const orderB = boxB.order === null ? Infinity : boxB.order;
    return orderB - orderA;
  });





  
// console.log(reversedLogList);
  return (
    <ol className="unstyledList">
      {reversedLogList.map(log => (
        log.isClicked ? (
          <li key={log.id}>
            {log.value === 'x' ? firstPlayer : secondPlayer} hits the square :{" "}
            {log.id}
          </li>
        ) : null 
      ))}
    </ol>
  )
}

export default Log
