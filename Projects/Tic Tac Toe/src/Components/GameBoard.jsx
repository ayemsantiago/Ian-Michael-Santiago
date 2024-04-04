export default function GameBoard({ playerTurn, board }) {
    return (
        <ol id='game-board'>
            {board.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((column, columnIndex) => <li key={columnIndex}>
                        <button onClick={() => playerTurn(rowIndex, columnIndex)}
                            disabled={column !== null}>
                            {column}
                        </button>
                    </li>)}
                </ol>
            </li>)}
        </ol>
    )
}