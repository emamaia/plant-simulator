import React from 'react';
import CardIcons from '../../componentes/CardIcons'
import Button from '../../componentes/Button'
import iconSunHigh from '../../assets/icons/coral/high-sun.svg'
import iconSunLow from '../../assets/icons/coral/low-sun.svg'
import iconNoAnswer from '../../assets/icons/coral/no-answer.svg'
import iconSunHighW from '../../assets/icons/white/high-sun.svg'
import iconSunLowW from '../../assets/icons/white/low-sun.svg'
import iconNoAnswerW from '../../assets/icons/white/no-answer.svg'


import './style.css'

function Sun(props){
    return(
        <div>
          <CardIcons
          icon={iconSunHigh}
          alt='Sol forte'
          text='High Sunlight'
          />

            
        </div>
    )
}

export default Sun