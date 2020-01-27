import React from 'react';
import Button from '../Button'

import toxic from '../../assets/icons/grey/toxic.svg'
import noAnswer from '../../assets/icons/grey/no-answer.svg'
import oneDrop from '../../assets/icons/green/one-drop.svg'
import twoDrop from '../../assets/icons/green/two-drops.svg'
import threeDrop from '../../assets/icons/green/three-drops.svg'
import iconSunHigh from '../../assets/icons/coral/high-sun.svg'
import iconSunLow from '../../assets/icons/coral/low-sun.svg'


import './style.css'

function CardPlants(props) {
    return (
        <div className='plants-container'>
            <img src={props.img} alt='Imagem de planta ' className='plants-img'></img>
            <h3 className='plants-text'>{props.text}</h3>
            <div className='plants-price'>
                <p>{props.price}</p>
                <div className='plants-icons'>
                    {props.toxic === true? <img className='icon' src={toxic} alt='ícones'/>: ""}
                    <img className='icon' src={props.sun === 'high'? iconSunHigh: props.sun === 'low'? iconSunLow: noAnswer} alt='ícones' />                
                    <img className='icon' src={props.water === 'rarely'? oneDrop: props.water === 'regularly'? twoDrop: threeDrop} alt='ícones' />
                </div>                
            </div>
            <Button
            classes='plants-btn'
            >buy now</Button>
        </div>
    )
}

export default CardPlants