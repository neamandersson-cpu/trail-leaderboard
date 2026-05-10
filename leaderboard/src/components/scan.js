import React, { useState } from 'react'

export default function Scan({ 
    userScore, 
    setUserScore,
    trailPoints,
    setTrailPoints
 }) {

    const [scanned, setScanned] = useState(false);

    const handleScan = () => {

        setUserScore(userScore + 500);
        
        setTrailPoints(trailPoints + 1);

        setScanned(true);

        setUserScore(userScore + 500);

        setTimeout(() => {
            setScanned(false);
        }, 2000);

    }

    return (
        <div className="scan-page">

            <button 
                className="scan-button"
                onClick={handleScan}
            >
                Scan
            </button>

            {
                scanned &&
                <div className="popup">
                    +500 points earned!
                </div>
            }

            <h1 className="total-score">
                Total Score: {userScore}
            </h1>

        </div>
    )
}