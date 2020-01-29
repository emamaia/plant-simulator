import React from 'react'

import planta from '../../assets/plant-pictures/succulent-bowl.jpg'
import toxic from '../../assets/icons/grey/toxic.svg'

import './style.css'

function CardPlantBuy(props) {
    return (
        <div className='container-page'>
            <div>
                <h1>{props.name}</h1>
                <p>${props.price}</p>
                <img
                    src={props.imagem}
                    className='img-plant'
                    alt='imagem de planta'
                />
                <div className='container-icones'>
                    <div className='div-icons'>
                        <img src={props.iconToxic} alt='ícones' />
                        <p>{props.textToxic}</p>
                    </div>
                    <div className='div-icons'>
                        <img src={props.iconSun} alt='ícones' />
                        <p>{props.textSun}</p>
                    </div>
                    <div className='div-icons'>
                        <img src={props.iconWater} alt='ícones' />
                        <p>{props.textToxic}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardPlantBuy