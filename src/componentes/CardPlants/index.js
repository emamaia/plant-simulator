import React from 'react';
import Button from '../Button'

import './style.css'

function CardPlants(props) {
    return (
        <div className='plants-container'>
            <img src={props.img} alt='Imagem de planta ' className='plants-img'></img>
            <h3 className='plants-text'>{props.text}</h3>
            <div className='plants-price'>
                <p>{props.price}</p>
                <div className='plants-icons'>
                    <img className='icon' src={props.icon1} alt='ícones' />
                    <img className='icon' src={props.icon2} alt='ícones' />
                </div>                
            </div>
            <Button
            classes='plants-btn'
            >buy now</Button>
        </div>
    )
}

export default CardPlants