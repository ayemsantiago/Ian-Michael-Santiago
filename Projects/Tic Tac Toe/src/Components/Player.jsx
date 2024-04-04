import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);
    let nameContainer = <span className='player-name'>{playerName}</span>;

    function handleEdit() {
        setIsEditing(editing => !editing);

        if (isEditing) {
            onChangeName(symbol, playerName);
        }
    }

    function handleChange(newName) {
        setPlayerName(newName.target.value);
    }

    if (isEditing) {
        nameContainer = <input type='text' required onChange={handleChange} value={playerName}></input>;
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className='player'>
                {nameContainer}
                <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}