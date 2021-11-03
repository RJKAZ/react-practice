import React, { useState } from 'react';
import reactDom from 'react-dom';

// we need to build three components, the Board, the Game, and the Square. We will start with the square component
// the square will represent one box out of 9, it will handle click events and place X or O at the clicked square.
// For this we need to pass three arguments as props as shown

const Square = ({ playerMark, squareId, handleSquareClick }) => {
  return (
    <div className='square' onClick={() => handleSquareClick(squareId)}>
      {playerMark}
    </div>
  );
};

/*
    Now we have to create a whole board that includes square components 9 times. To achive this we will take the Square Component and loop it 9 times. 
    The board will show which plauer will move next, whether the game is over or not, and if anyone won
    
    There are 6 props that we will pass to the board component

    board: this prop has the current position of the board
    isXnext: this prop indicates which player goes next
    winner: this prop stores the winners name
    gameOver: this prop is a boolean value that indicates if the game is over
    handleSquareClick: this prop deals with square clicks
    handleReset: helps to reset the game. 

    */

const Board = ({
  board,
  isXnext,
  winner,
  gameOver,
  handleSquareClick,
  handleReset,
}) => (
  <div className='container'>
    {gameOver && !winner
      ? 'Game Over'
      : winner
      ? 'Winner: ' + winner
      : 'Next Player: ' + (isXnext ? 'X' : '0')}
    <button className='button' onClick={handleReset}>
      Reset
    </button>
    <div className='board'>
      {board.map((playerMark, idx) => (
        <Square
          key={idx}
          squareId={idx}
          playerMark={playerMark}
          handleSquareClick={handleSquareClick}
        />
      ))}
    </div>
  </div>
);

// now for the game component. It will contain an initial position of a game, square click event, checks for winner and game over, and calculates the board position and updates accordingly

// the initial state will have three values, and the board is an array with 9 values initially null

// before we get to the game component we will make a list of the winning combinations

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const Game = () => {
  let initialState = {
    board: Array(9).fill(null),
    isXnext: true,
    gameOver: false,
  };

  const [board, setBoard] = useState(initialState.board);
  const [isXnext, setIsXnext] = useState(initialState.isXnext);
  const [isGameOver, setGameOver] = useState(initialState.board.gameOver);
  let winner = false;
  const isWinner = winningCombinations.some((combo) => {
    const [id1, id2, id3] = combo;
    const marks = [board[id1], board[id2], board[id3]];
    const [firstMark] = marks;
    const isWinningCombo =
      firstMark && marks.every((mark) => mark === firstMark);
    if (isWinningCombo) {
      winner = firstMark;
      return true;
    }
    return null;
  });
  // now we create a function to handle Square click. We take a box value to determine which position to be updated.

  let squareClicked = (i) => {
    const tempBoard = [...board];
    if (winner || tempBoard[i]) return;
    tempBoard[i] = isXnext ? 'X' : 'O';
    setGameOver(isWinner || tempBoard.every((mark) => !!mark));
    setBoard(tempBoard);
    setIsXnext(!isXnext);
  };

  let resetGame = () => {
    //set initial state
    setBoard(Array(9).fill(null));
    setIsXnext(true);
    setGameOver(false);
  };

  return (
    <div className='game'>
      <div className='game-board'>
        <Board
          board={board}
          isXnext={isXnext}
          winner={winner}
          gameOver={isGameOver}
          handleSquareClick={squareClicked}
          handleReset={resetGame}
        />
      </div>
    </div>
  );
};

export default Game;
