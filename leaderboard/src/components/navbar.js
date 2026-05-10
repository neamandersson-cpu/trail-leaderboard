import React from 'react'

export default function Navbar({ page, setPage }) {

    return (
        <div className="navbar">

            <button 
                onClick={() => setPage("leaderboard")}
                className={page === "leaderboard" ? "active" : ""}
            >
                Leaderboard
            </button>

            <button 
                onClick={() => setPage("scan")}
                className={page === "scan" ? "active" : ""}
            >
                Scan
            </button>

        </div>
    )
}