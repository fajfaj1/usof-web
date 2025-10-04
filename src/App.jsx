import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Game } from './pages/game';
import { Draft } from './pages/draft';
import { OverwiteWarning } from './pages/overwrite_warning';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Draft />} />
        <Route path="/game" element={<Game />} />
        <Route path="/overwrite_warning" element={<OverwiteWarning />} />
      </Routes>
    </>
  );
}

export default App;
