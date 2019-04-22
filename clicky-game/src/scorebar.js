import React from 'react';

const Scorebar = (props) => {

        return (
            <div className="scorebar">
            <div id="title">Sanrio Memory Game!</div>
            <div id="subtitle">Click on an image to earn points. Don't click on the same image twice!</div>
            <div id="score">Score: {props.score}</div>
            </div>
        )
    }

export default Scorebar;