import React from "react";
import reactLogo from '../assets/react.svg';
import './Card.css';

const Card = (props) => {
    return (
        <div className="card">
            <h1>{props.name}</h1>
            <h2>{props.roll}</h2>
            <img src={props.pic} alt="logo" className="logo" />
        </div>
    );
};

export default Card;