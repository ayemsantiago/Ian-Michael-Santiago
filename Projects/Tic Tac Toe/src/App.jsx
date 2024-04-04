import GameBoard from "./Components/GameBoard"
import GameOver from "./Components/GameOver";
import Log from "./Components/Log";
import Player from "./Components/Player"
import { WINNING_COMBINATIONS } from "./WinningCombination"
import { useState } from "react";

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2'
};

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function getActivePlayer(gameTurn) {
  let currentPlayer = 'X';

  if (gameTurn.length > 0 && gameTurn[0].player === 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;
}

function getGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD.map(array => [...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, column } = square;

    gameBoard[row][column] = player;
  }
  return gameBoard;
}

function getWinner(gameBoard, players) {
  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if (firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol) {
      winner = players[firstSquareSymbol];
    }
  }

  return winner;
}

function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = getActivePlayer(gameTurns);
  const gameBoard = getGameBoard(gameTurns);
  const winner = getWinner(gameBoard, players);
  const draw = gameTurns.length === 9 && !winner;

  function handlePlayerNameChange(symbol, newName) {
    setPlayers(previousPlayers => {
      return {
        ...previousPlayers,
        [symbol]: newName
      }
    });
  }

  function handlePlayerTurn(rowIndex, columnIndex) {
    setGameTurns((previousGameTurn) => {
      const currentPlayer = getActivePlayer(previousGameTurn);

      const turn = [
        {
          square: {
            row: rowIndex,
            column: columnIndex
          },
          player: currentPlayer
        },
        ...previousGameTurn,
      ];
      return turn;
    });
  }

  function handleRestart() {
    setGameTurns([]);
  }

  return (
    <>
      <main>
        <div id='game-container'>
          <ol id='players' className='highlight-player'>
            <Player initialName={PLAYERS.X} symbol='X' isActive={activePlayer === 'X'} onChangeName={handlePlayerNameChange} />
            <Player initialName={PLAYERS.O} symbol='O' isActive={activePlayer === 'O'} onChangeName={handlePlayerNameChange} />
          </ol>
          {(winner || draw) && (
            <GameOver winner={winner} onRestart={handleRestart} />
          )}
          <GameBoard playerTurn={handlePlayerTurn} board={gameBoard} />
        </div>
        <Log logs={gameTurns} />
      </main>
    </>
  )
}

export default App
