import React from 'react';
import logo from '../../assets/logo/logo-greenthumb.svg';
import imgHome from '../../assets/illustrations/illustration-home.png'
import Links from '../../componentes/Links'

import arrowR from '../../assets/icons/white/right-arrow-white.png'

import './style.css'

function Home(props) {
    return (
        <div className='container'>
            <nav className='nav'>
                <img src={logo} alt='logo da empresa'></img>
            </nav>
            <div className='home'> 
                <div className='home-title__btn'>
                    <h2>Find your next green friend</h2>
                    <Links
                        to='/sun'
                        classes='home-btn'
                        arrow={arrowR}
                        classeImg='arrow-home'
                    >start quizz</Links>
                </div>
                <img className='home-img' src={imgHome} alt='Imagem de entrada: homem e plantas'></img>
            </div>
        </div>
    )
}

export default Home