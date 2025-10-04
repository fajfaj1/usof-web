import './PlayerList.css';
import { useRef } from 'react';
import { Button } from './Button';

/**
 * 
 * @param {Players use state hook} players[]
 * @returns 
 */
export function PlayerList({ players, setPlayers }) {
    const newPlayerInput = useRef();
    function addNewPlayer() {
        const newPlayerName = newPlayerInput.current.value;
        if (!newPlayerName || newPlayerInput === '') return;
        const tempPlayers = [...players, newPlayerName];
        setPlayers(tempPlayers);
        newPlayerInput.current.value = "";
    }
    function removePlayer(playerName) {
        setPlayers(players.filter(name => playerName != name));
    }
    function movePlayerUp(playerName) {
        console.log('moving up');
        const tempPlayers = players.slice();
        const playerIndex = tempPlayers.indexOf(playerName);
        const temp = tempPlayers[playerIndex];
        if (playerIndex <= 0) return;
        tempPlayers[playerIndex] = tempPlayers[playerIndex - 1];
        tempPlayers[playerIndex - 1] = temp;
        setPlayers(tempPlayers);
        console.log('moved up');
    }
    function movePlayerDown(playerName) {
        const tempPlayers = players.slice();
        const playerIndex = tempPlayers.indexOf(playerName);
        const temp = tempPlayers[playerIndex];
        if (playerIndex === tempPlayers.length - 1 || playerIndex < 0) return;
        tempPlayers[playerIndex] = tempPlayers[playerIndex + 1];
        tempPlayers[playerIndex + 1] = temp;
        setPlayers(tempPlayers);
    }
    return (<>
        <div className="playerlist">
            {players.map(player => <div className="player" key={player}>
                <Button size="min" style="secondary" onClick={() => removePlayer(player)}>×</Button>
                <Button size="min" style="secondary" onClick={() => movePlayerUp(player)}>˄</Button>
                <Button size="min" style="secondary" onClick={() => movePlayerDown(player)}>˅</Button>
                <span className='playername'>{player}</span>
            </div>)}</div>
        <div className="new_player_form">
            <input type="text" ref={newPlayerInput} onKeyDown={(e) => {
                if (e.code === 'Enter') addNewPlayer();
            }} />
            <Button onClick={addNewPlayer}>Dodaj</Button>
        </div>
    </>);
}