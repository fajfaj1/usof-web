import { Session } from '../components/session';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';
export function OverwiteWarning() {
    const navigate = useNavigate();
    const session = Session.load();
    const date = Date(session.timestamp);
    function overwrite() {
        session.delete();
        navigate('/');
    }
    function continueSession() {
        navigate('/game');
    }
    return (<>
        <h3>Wykryto nieskończoną rozgrywkę z:</h3>
        <p>{date.toString()}</p>
        <p>Co chcesz z nią zrobić?</p>
        <div className='button-bar'>
            <Button style="secondary" onClick={overwrite}>Nadpisz</Button>
            <Button style="primary" onClick={continueSession}>Wróć do gry</Button>
        </div>

    </>);
}