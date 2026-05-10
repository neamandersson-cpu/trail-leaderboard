import React, { useState } from 'react';

import Board from './components/board.js';
import Scan from './components/scan.js';
import Navbar from './components/navbar.js';

import './components/style.css';

function App() {

  const [page, setPage] = useState("leaderboard");

  const [userScore, setUserScore] = useState(0);

  const [trailPoints, setTrailPoints] = useState(0);

  return (
    <div className="App" id='main'>

        {
          page === "leaderboard"

          ? <Board 
          userScore={userScore} 
          trailPoints={trailPoints} />

          : <Scan 
              userScore={userScore}
              setUserScore={setUserScore}
              trailPoints={trailPoints}
              setTrailPoints={setTrailPoints}
            />
        }

        <Navbar page={page} setPage={setPage} />

    </div>
  );
}

export default App;