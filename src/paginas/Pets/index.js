import React from 'react';
import PagesLogo from '../../componentes/PagesLogo'
import CardIcons from '../../componentes/CardIcons'
import Button from '../../componentes/Button'

import sun from '../../assets/illustrations/sun.png'
import pet from '../../assets/icons/coral/pet.svg'
import iconNoAnswer from '../../assets/icons/coral/no-answer.svg'
import PetW from '../../assets/icons/white/pet.svg'
import iconNoAnswerW from '../../assets/icons/white/no-answer.svg'

import './style.css'

function Pets(props) {
    return (
        <div className='container-pets'>

            <PagesLogo />

            <div className='container-pages'>
                <div className='pages-title'>
                    <img src={sun} alt='Imagem do sol com óculos'></img>
                    <h2>Do you have pets? Do they <span>chew </span>plants? </h2>
                    <p>We are asking because some plants can be <span>toxic</span> for your buddy. </p>
                </div>

                <div className='container-icons'>
                    <CardIcons
                        icon={pet}
                        alt='Pet'
                        text='Yes'
                    />                    

                    <CardIcons
                        icon={iconNoAnswer}
                        alt='Sem pet'
                        text="No/They don't care"
                    />

                </div>

                <div className='container-btn'>
                    <Button
                        classes='btn-pages'
                    >home</Button>

                    <Button
                        classes='btn-pages'
                    >next</Button>
                </div>

            </div>

        </div>
    )
}

export default Pets