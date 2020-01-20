import React from 'react';
import logo from '../../assets/logo/logo-greenthumb.svg';
import imgHome from '../../assets/illustrations/illustration-home.png'
import Button from '../../componentes/Button'
import Arrow from '../../assets/icons/white/right-arrow-white.png'

import './style.css'


function Home(props){
    return(
        <div>
            <img src={logo} alt='logo da empresa'></img>
            <img src={imgHome} alt='Imagem de entrada: homem e plantas'></img>
            <Button
            classes='botao'
            >start quizz</Button>
        </div>
    )
}

export default Home