import React, { useState } from 'react';
import Cards from "./components/Cards";
import Scoreboard from "./components/Scoreboard"
import './styles/App.css';

function App() {

    const [score, setScore] = useState(0);

    const updateScore = () => {
        setScore(score + 1);
    }

    const resetScore = () => {
        setScore(0)
    }

    return (
        <div className="App">
        <Scoreboard score={score}/>
        <Cards updateScore={updateScore} resetScore={resetScore}/>
        </div>
    );
}

export default App;
