import './PlayerList.css'
import { useRef } from 'react'

/**
 * 
 * @param {Players use state hook} players[]
 * @returns 
 */
export function PlayerList({players, setPlayers}) {
    const newPlayerInput = useRef()
    function addNewPlayer() {
        const newPlayerName = newPlayerInput.current.value
        if (!newPlayerName || newPlayerInput === '') return;
        const tempPlayers = [...players, newPlayerName]
        setPlayers(tempPlayers)
        newPlayerInput.current.value = ""
    }
    function removePlayer(playerName) {
        setPlayers(players.filter(name => playerName != name))
    }
    function movePlayerUp(playerName) {
        console.log('moving up')
        const tempPlayers = players.slice()
        const playerIndex = tempPlayers.indexOf(playerName)
        const temp = tempPlayers[playerIndex]
        if (playerIndex <= 0) return;
        tempPlayers[playerIndex] = tempPlayers[playerIndex - 1]
        tempPlayers[playerIndex - 1] = temp
        setPlayers(tempPlayers)
        console.log('moved up')
    }
    function movePlayerDown(playerName) {
        const tempPlayers = players.slice()
        const playerIndex = tempPlayers.indexOf(playerName)
        const temp = tempPlayers[playerIndex]
        if (playerIndex === tempPlayers.length -1 || playerIndex < 0) return;
        tempPlayers[playerIndex] = tempPlayers[playerIndex + 1]
        tempPlayers[playerIndex + 1] = temp
        setPlayers(tempPlayers)
    }
    return (<>

        {players.map(player => <div className="player" key={player}>
            <button onClick={() => removePlayer(player)}>×</button>
            <button onClick={() => movePlayerUp(player)}>˄</button>
            <button onClick={() => movePlayerDown(player)}>˅</button>
            <span className='playername'>{player}</span> 
        </div>)}
        <div className="new_player_form">
            <input type="text" ref={newPlayerInput} onKeyDown={(e) => {
                if (e.code === 'Enter') addNewPlayer()
            }}/>
            <button onClick={addNewPlayer}>Dodaj</button>
        </div>
    </>)
}