import React from 'react'

export default function Profiles({ Leaderboard }) {
    return (
        <div id="profile">
            {Item(Leaderboard)}
        </div>
    )   
}

function Item(data) {
    return (
        <>
        {
            data.map((value, index) => (
                <div className="flex" key={index}>

                    <span className='rank'>
                        {index + 1}
                    </span>

                    <div className="item">
                        <img 
                            src={value.img}
                            alt="profile"
                            className="profile-pic"
                        />
                        
                        <div className="info">
                            <h3 className='name text-dark'>
                                {value.name}
                            </h3>

                            <span>
                                Trail points found: {value.trailPoints}
                            </span>
                        </div>
                    </div>

                    <div className="item">
                        <span>{value.score}</span>
                    </div>

                </div>
            ))
        }
        </>
    )
}