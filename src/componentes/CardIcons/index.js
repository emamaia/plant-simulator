import React from 'react';

import './style.css'

function CardIcons(props) {
    return (
        <div className='card-icon'>
            <img src={props.icon} alt={props.alt} className='icons'></img>
            <p className='text-icon'>{props.text}</p>
        </div>
    )
}

export default CardIcons