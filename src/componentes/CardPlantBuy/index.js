import React from 'react'

import toxic from '../../assets/icons/grey/toxic.svg'
import noAnswer from '../../assets/icons/grey/no-answer.svg'
import oneDrop from '../../assets/icons/green/one-drop.svg'
import twoDrop from '../../assets/icons/green/two-drops.svg'
import threeDrop from '../../assets/icons/green/three-drops.svg'
import iconSunHigh from '../../assets/icons/coral/high-sun.svg'
import iconSunLow from '../../assets/icons/coral/low-sun.svg'

import './style.css'

function CardPlantBuy(props) {
    return (
        <div className='container-page'>
            <div className='div'>
                <h1>{props.name}</h1>
                <p>${props.price}</p>
                <img
                    src={props.imagem}
                    className='img-plant'
                    alt='imagem de planta'
                />
                <div className='container-icones'>
                    <div className='div-icons'>
                        <img className='icon' src={props.sun === 'high'? iconSunHigh: props.sun === 'low'? iconSunLow: noAnswer} alt='ícones' />
                        <p>{props.sun === 'high'? 'High sunlight': props.sun === 'low'? 'Low sunlight': 'No sunlight'}</p>
                    </div>
                    <div className='div-icons'>
                        <img className='icon' src={props.water === 'rarely'? oneDrop: props.water === 'regularly'? twoDrop: threeDrop} alt='ícones' />
                        <p>{props.water === 'rarely'? 'Water rarely': props.water === 'regularly'? 'Regularly': 'Water daily'}</p>
                    </div>
                    <div className='div-icons'>
                        <img className='icon' src={props.toxicity === true? toxic: noAnswer} alt='ícones' />
                        <p>{props.toxicity === true? "Yes": 'No/They dont care'}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardPlantBuy