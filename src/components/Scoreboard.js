import React, { useState, useEffect } from 'react';

import "../styles/Scoreboard.css";

function Scoreboard(props) {

    const [highscore, setHighscore] = useState(0);

    useEffect(() => {
        if(props.score > highscore) {setHighscore(props.score)}
    }, [props])

    return (
        <div className="scoreboard">
            <label>Score: <span className="score">{props.score}</span></label>
            <label>Highscore: <span className="highscore">{highscore}</span></label>
        </div>
    );
};

export default Scoreboard;