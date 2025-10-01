import './draft.css'
import { useState } from 'react'
import { PlayerList } from '../components/PlayerList'

export function Draft() {
  const [teamA, setTeamA] = useState([
    "Lorem",
    "Ipsum",
    "Dolor"
  ])
  const [teamB, setTeamB] = useState([
    "Lorem",
    "Ipsum",
    "Dolor"
  ])
    return (<><div className="playerlists">
        <div>
            <h3>Drużyna A</h3>
            <PlayerList players={teamA} setPlayers={setTeamA} />
        </div>
        <div>
            <h3>Drużyna B</h3>
            <PlayerList players={teamB} setPlayers={setTeamB} />
        </div>
    </div></>)
}