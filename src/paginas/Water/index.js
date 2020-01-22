import React from 'react';
import PagesLogo from '../../componentes/PagesLogo'
import CardIcons from '../../componentes/CardIcons'
import Links from '../../componentes/Links'

import water from '../../assets/illustrations/wateringcan.png'
import oneDrop from '../../assets/icons/green/one-drop.svg'
import twooDrop from '../../assets/icons/green/two-drops.svg'
import threeDrop from '../../assets/icons/green/three-drops.svg'
import oneDropW from '../../assets/icons/white/one-drop.svg'
import twooDropW from '../../assets/icons/white/two-drops.svg'
import threeDropW from '../../assets/icons/white/three-drops.svg'


import './style.css'

function Water(props) {
    return (
        <div className='container-water'>

            <PagesLogo />

            <div className='container-pages'>
                <div className='pages-title'>
                    <img src={water} alt='Imagem de um regador'></img>
                    <h2>How often do you want to <span>water </span>your plant? </h2>
                </div>

                <div className='container-icons'>
                    <CardIcons
                        icon={oneDrop}
                        alt='Uma gota'
                        text='Rarely'
                    />

                    <CardIcons
                        icon={twooDrop}
                        alt='Duas gotas'
                        text='Regularly'
                    />

                    <CardIcons
                        icon={threeDrop}
                        alt='três gotas'
                        text='Daily'
                    />

                </div>

                <div className='container-btn'>
                    <Links
                        to='/sun'
                        classes='btn-pages'
                    >previous</Links>

                    <Links
                        to='/pets'
                        classes='btn-pages'
                    >next</Links>
                </div>

            </div>

        </div>
    )
}

export default Water