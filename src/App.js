import "./App.css";
import React from "react";

function App() {
  const winnerCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const squares = Array(9).fill(null);
  const [xIsNext, setXIsNext] = React.useState(true);
  const [history, setHistory] = React.useState([squares]);
  const calculateWinner = (squares) => {
    for (let i = 0; i < winnerCondition.length; i++) {
      const [a, b, c] = winnerCondition[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };
  const handleOnChange = (index) => {
    if (squares[index]) {
      return;
    }
    history[index] = xIsNext ? "X" : "O";

    setXIsNext(!xIsNext);
    setHistory(history); // Store the current state in history
    const winner = calculateWinner(history);

    if (winner) {
      setTimeout(() => {
        alert(`Winner is: ${winner}`);
      }, 0);
      setHistory(Array(9).fill(null)); // Reset the game
      setXIsNext(true); // Reset the turn to X
      return;
    }
  };

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <div className={"game-board"}>
        <div className="board-row">
          <button onClick={() => handleOnChange(0)} className="square">
            {history[0]}
          </button>
          <button onClick={() => handleOnChange(1)} className="square">
            {history[1]}
          </button>
          <button onClick={() => handleOnChange(2)} className="square">
            {history[2]}
          </button>
        </div>
        <div className="board-row">
          <button onClick={() => handleOnChange(3)} className="square">
            {history[3]}
          </button>
          <button onClick={() => handleOnChange(4)} className="square">
            {history[4]}
          </button>
          <button onClick={() => handleOnChange(5)} className="square">
            {history[5]}
          </button>
        </div>
        <div className="board-row">
          <button onClick={() => handleOnChange(6)} className="square">
            {history[6]}
          </button>
          <button onClick={() => handleOnChange(7)} className="square">
            {history[7]}
          </button>
          <button onClick={() => handleOnChange(8)} className="square">
            {history[8]}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
