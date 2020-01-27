import React from 'react';

import './style.css'

function CardIcons(props) {

    return (
        <div onClick={props.handleClick}  className={props.classes}>
            <img src={props.icon} alt={props.alt} className={props.classIcon}></img>
            <p className={props.classText}>{props.text}</p>
        </div>
    )
}

export default CardIcons