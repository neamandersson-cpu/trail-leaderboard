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

        setTimeout(() => {
            setScanned(false);
        }, 2000);
    }

    return (
        <div className="scan-page">

            <h1 className="user-name">
                Ditt Namn
            </h1>

            <img
                src="/shoe5.png"
                alt="profil"
                className="profile-pic"
            />

            <div className="stats-card">

                <div className="stat-box">
                    <h2>Stationer: {trailPoints}</h2>
                </div>

                <div className="stat-box">
                    <h2>Poäng: {userScore}</h2>
                </div>

            </div>

            <button
                className="scan-button"
                onClick={handleScan}
            >
                BLIPPA STATION
            </button>

            {scanned &&
                <div className="popup">
                    +500 poäng!
                </div>
            }

        </div>
    )
}