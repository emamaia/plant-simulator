import React from 'react';
import PagesLogo from '../../componentes/PagesLogo'
import CardIcons from '../../componentes/CardIcons'
import Links from '../../componentes/Links'

import sun from '../../assets/illustrations/sun.png'
import iconSunHigh from '../../assets/icons/coral/high-sun.svg'
import iconSunLow from '../../assets/icons/coral/low-sun.svg'
import iconNoAnswer from '../../assets/icons/coral/no-answer.svg'
import iconSunHighW from '../../assets/icons/white/high-sun.svg'
import iconSunLowW from '../../assets/icons/white/low-sun.svg'
import iconNoAnswerW from '../../assets/icons/white/no-answer.svg'

import './style.css'

function Sun(props) {
    return (
        <div className='container-sun'>

            <PagesLogo />

            <div className='container-pages'>
                <div className='pages-title'>
                    <img src={sun} alt='Imagem do sol com óculos'></img>
                    <h2>First, set the amount of<span>sunlight </span>your plant will get. </h2>
                </div>

                <div className='container-icons'>
                    <CardIcons
                        icon={iconSunHigh}
                        alt='Sol forte'
                        text='High Sunlight'
                    />

                    <CardIcons
                        icon={iconSunLow}
                        alt='Pouco sol'
                        text='Low sunlight '
                    />

                    <CardIcons
                        icon={iconNoAnswer}
                        alt='Sem sol'
                        text='No sunlight'
                    />

                </div>

                <div className='container-btn'>
                    <Links
                        to='/'
                        classes='btn-pages'
                    >home</Links>

                    <Links
                        to='/water'
                        classes='btn-pages'
                    >next</Links>
                </div>

            </div>

        </div>
    )
}

export default Sun