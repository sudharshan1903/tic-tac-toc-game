import React, { useEffect, useState } from 'react';

const TicTacToe = () => {
  const [data, setData] = useState(Array.from({ length: 9 }, () => null));
  const [currentPlayer, setCurrentPlayer] = useState(true);
  const [isOver, setIsOver] = useState(false);
  const [winner, setWinner] = useState(null);
  const [isDraw,setIsDraw] = useState(false);

// winning decision
const winningConditions = () => {
  const possibleWays = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
 // checking possible way and return the winner
  for (let i = 0; i < possibleWays.length; i++) {
    const [a, b, c] = possibleWays[i];
    if (data[a] && data[a] === data[b] && data[b] === data[c]) {

       return data[a];
    }
  }
  // each index of array has a value without possible way is  match draw 
  if (data.every((item) => item !== null)) {
     return  'draw';
  }

  return null;
};

useEffect(()=>{
  const checkingWinner = winningConditions();
  // console.log(checkingWinner,"checking winner");
  if (checkingWinner === 'X') {
    setWinner('X');
    setIsOver(true);
    
  } else if (checkingWinner === 'O') {
    setWinner('O');
    setIsOver(true);
    
  } else if (checkingWinner === 'draw') {
    setIsOver(true);
    setIsDraw(true);
  } 
})

// player hits function
const submitValue = (item, index) => {
  if (isOver || item !== null) {
    return;
  }

  const newData=[...data];
  newData[index] = currentPlayer ? "X":"O";
  setData(newData);
  setCurrentPlayer(!currentPlayer);
};

  // restart game 
  const restartGame = () => {
    setData(Array.from({ length: 9 }, () => null));
    setCurrentPlayer(true);
    setIsOver(false);
    setWinner(null);
  };

console.log(winner,"winnerssssss");
  return (
    <div className="container-box">
      <div className="box-model">
        <div className="square">
          {data.map((item, index) => (
            <button
              key={index}
              className={`btn ${item === 'X' ? 'playerX' : item === 'O' ? 'playerO' : ''}`}
              onClick={() => submitValue(item, index)}
              disabled={isOver || item !== null}
            >
              {item}
            </button>
          ))}
        </div>
        <div className='playerTurns'>
          <h1 style={{color:"whitesmoke"}}>{winner===null &&!isDraw ? currentPlayer ? "X TURN":"O TURN":""}</h1>
        </div>
        <div className="game-over-message">
           {isOver && ( 
            <div>
              <h1 style={{color:"coral"}}>
              {winner ? `Player ${winner} won!` : "It's a draw!"}
              </h1>
              <button className='restartGame' onClick={restartGame}>Play Again</button>
            </div>
           )} 
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;