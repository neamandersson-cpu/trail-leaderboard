import React from 'react'

export default function Navbar({ page, setPage }) {

    return (
        <div className="navbar">

            <button 
                onClick={() => setPage("leaderboard")}
                className={page === "leaderboard" ? "active" : ""}
            >
                Poänglista
            </button>

            <button 
                onClick={() => setPage("scan")}
                className={page === "scan" ? "active" : ""}
            >
                Blippa station
            </button>

        </div>
    )
}