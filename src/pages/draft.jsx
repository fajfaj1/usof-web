import './draft.css';
import { useEffect, useState } from 'react';
import { PlayerList } from '../components/PlayerList';
import { Link, useNavigate } from 'react-router';
import { Session } from '../components/session';
import { Button } from '../components/Button';

export function Draft() {

  const navigate = useNavigate();
  useEffect(() => {
    const existingSession = Session.load();
    if (existingSession !== null) {
      navigate("/overwrite_warning");
    }

  });
  const [teamA, setTeamA] = useState([]);
  const [teamB, setTeamB] = useState([]);
  let isGameReady = false;
  if (teamA.length > 0 && teamB.length > 0) {
    isGameReady = true;
  }
  const config = {
    teams: [
      teamA, teamB
    ]
  };
  function startGame() {
    const session = Session.create({
      teams: {
        "Drużyna A": teamA,
        "Drużyna B": teamB
      }
    });

    navigate('/game');
  }
  return (<>
    <div className="playerlists">
      <div>
        <h3>Drużyna A</h3>
        <PlayerList players={teamA} setPlayers={setTeamA} />
      </div>
      <div>
        <h3>Drużyna B</h3>
        <PlayerList players={teamB} setPlayers={setTeamB} />
      </div>
    </div>
    <br />
    <div className="button-bar">
      <Button style="primary" disabled={!isGameReady} onClick={startGame}>Rozpocznij grę</Button>
    </div>
  </>);
}