import React, { useState } from 'react'
import Profiles from './profiles';
import { Leaderboard, CurrentUser } from './database';

export default function Board({ userScore, trailPoints }) {

    CurrentUser.score = userScore;
    CurrentUser.trailPoints = trailPoints;

    const [period, setPeriod] = useState(4000);

    const handleClick = (e) => {
        setPeriod(Number(e.target.dataset.id));
    }

    return (
        <div className="board">
            <h1 className='leaderboard'>Leaderboard</h1>

            <div className="duration">
                <button onClick={handleClick} data-id='7'>
                    7 days
                </button>

                <button onClick={handleClick} data-id='30'>
                    30 days
                </button>

                <button onClick={handleClick} data-id='4000'>
                    All time
                </button>
            </div> 

            <Profiles 
            Leaderboard={
                between([CurrentUser, ...Leaderboard], period)
            }
            />

        </div>
    )   
}

function between(data, between){

    const today = new Date();
    const previous = new Date(today);

    previous.setDate(previous.getDate() - (between + 1));

    let filter = data.filter(val => {

        let userDate = new Date(val.dt);

        return previous <= userDate && today >= userDate;
    })

    return filter.sort((a,b) => b.score - a.score);
}