
import React from 'react';
import CardPlants from '../../componentes/CardPlants'
import PagesLogo from '../../componentes/PagesLogo'

import pick from '../../assets/illustrations/pick.png'

import plant from '../../assets/plant-pictures/bunny-ears-cacti.jpg'
import iconSunHigh from '../../assets/icons/coral/high-sun.svg'
import iconSunLow from '../../assets/icons/coral/low-sun.svg'

import './style.css'

function Plants(props) {
    return (

        <div>
            <div className='container-title'>
                <img src={pick} />
                <h1>Our picks for you</h1>
            </div>
            <PagesLogo></PagesLogo>
            <div className='container-plants'>
                <CardPlants
                    img={plant}
                    text='Nome da planta'
                    price='$30'
                    icon1={iconSunHigh}
                    icon2={iconSunLow}
                />
            </div>
        </div>

    )
}

export default Plants