import React from 'react';
import './Card.css';

const Card = (event ) => {
    return (
        <div className="card" >
            <h2>{event.title}</h2>
            <p>{event.date}</p>
            <p>{event.location}</p>
            <p><small>{event.description}</small></p>
        </div>
    );
};


export default Card;



