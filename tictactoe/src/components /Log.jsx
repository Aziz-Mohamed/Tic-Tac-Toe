function Log({logList}) {

  const reversedLogList = logList.slice().sort((boxA, boxB) => {
    const orderA = boxA.order === null ? Infinity : boxA.order;
    const orderB = boxB.order === null ? Infinity : boxB.order;
    return orderB - orderA;
  });

console.log(reversedLogList);
  return (
    <ol>
      {reversedLogList.map(log => (
        log.isClicked ? (
          <li key={log.id}>
            {log.value === 'x' ? "Player One" : "Player Two"} hits the square :{" "}
            {log.id}
          </li>
        ) : null // Return null for non-clicked boxes (avoids extra nodes)
      ))}
    </ol>
  )
}

export default Log
