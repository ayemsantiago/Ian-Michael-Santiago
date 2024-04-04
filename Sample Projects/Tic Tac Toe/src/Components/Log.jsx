export default function Log({ logs }) {
    return (
        <ol id='log'>
            {logs.map((log) => <li key={`${log.square.row + 1}${log.square.column + 1}`}>
                {log.player} selected row {log.square.row + 1} column {log.square.column + 1}</li>)}
        </ol>
    )
}