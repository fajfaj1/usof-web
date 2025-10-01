import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Header } from './components/Header'
import { PlayerList } from './components/PlayerList'
import './App.css'

function App() {
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
  return (
    <>
      <Header />
      <div className="playerlists">
        <div>
          <h3>Drużyna A</h3>
          <PlayerList players={teamA} setPlayers={setTeamA}/>
        </div>
        <div>
        <h3>Drużyna B</h3>
          <PlayerList players={teamB} setPlayers={setTeamB}/>
        </div>
      </div>
      
    </>
  )
}

export default App
