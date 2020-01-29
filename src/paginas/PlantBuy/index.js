import React from 'react'
import PagesLogo from '../../componentes/PagesLogo'
import Contact from '../Contact'
import CardPlantBuy from '../../componentes/CardPlantBuy'

import './style.css'

function PlantBuy(props){
    
    
    return(
        <div className='container-plantbuy'>
            <PagesLogo/>
            <CardPlantBuy
            name='Nome da planta'
            price= '30'
            />
            <Contact></Contact>

        </div>
    )
}

export default PlantBuy