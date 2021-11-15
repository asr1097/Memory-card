import React from 'react';

import "../styles/Card.css";

function Card(props) {

    return (
        <div id={props.id} className="card" onClick={props.onClick}>
            <img id={props.id} src={props.img} alt={props.name}></img>
            <label className="name" id={props.id}>{props.name}</label>
        </div>
    );
};

export default Card;