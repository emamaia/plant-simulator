import React from 'react';
import PagesLogo from '../../componentes/PagesLogo'
import CardIcons from '../../componentes/CardIcons'
import Links from '../../componentes/Links'

import dog from '../../assets/illustrations/dog.png'
import arrowR from '../../assets/icons/arrowRGreen.png'
import arrowL from '../../assets/icons/arrowLGreen.png'
import pet from '../../assets/icons/coral/pet.svg'
import petW from '../../assets/icons/white/pet.svg'
import iconNoAnswer from '../../assets/icons/coral/no-answer.svg'
import iconNoAnswerW from '../../assets/icons/white/no-answer.svg'

import './style.css'

class Pets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            classesPet: 'card-icon',
            classIconPet: 'icons',
            classTextPet: 'text-icon',
            classesNo: 'card-icon',
            classIconNo: 'icons',
            classTextNo: 'text-icon',
            iconePet: `${pet}`,
            iconeNo: `${iconNoAnswer}`
        }
    }

    handleOptionSelectPet = () => {
        this.setState((prevState) => {
            return {
                classesPet: 'card-icon__selected',
                classIconPet: 'icon-selected',
                classTextPet: 'text-icon__selected',
                classesNo: 'card-icon',
                classIconNo: 'icons',
                classTextNo: 'text-icon',
                iconePet: `${petW}`,
                iconeNo: `${iconNoAnswer}`
            }
        })

        localStorage.setItem('pets', 'true')
    }

    handleOptionSelectNo = () => {
        this.setState((prevState) => {
            return {
                classesNo: 'card-icon__selected',
                classIconNo: 'icon-selected',
                classTextNo: 'text-icon__selected',
                classesPet: 'card-icon',
                classIconPet: 'icons',
                classTextPet: 'text-icon',
                iconePet: `${pet}`,
                iconeNo: `${iconNoAnswerW}`

            }
        })

        localStorage.setItem('pets', 'false')
    }

    render() {
        return (
            <div className='container-pets'>

                <PagesLogo />

                <div className='container-pages'>
                    <div className='pages-title'>
                        <img src={dog} alt='Imagem de cachorro'></img>
                        <h2>Do you have pets? Do they <span>chew </span>plants? </h2>
                        <p>We are asking because some plants can be <span>toxic</span> for your buddy. </p>
                    </div>

                    <div className='container-icons'>
                    <CardIcons
                            icon={this.state.iconePet}
                            alt='Pet'
                            text='Yes'
                            handleClick={this.handleOptionSelectPet}
                            classes={this.state.classesPet}
                            classIcon={this.state.classIconPet}
                            classText={this.state.classTextPet}
                        />
                        <CardIcons
                            icon={this.state.iconeNo}
                            alt='No/They dont care'
                            text='No/They dont care'
                            handleClick={this.handleOptionSelectNo}
                            classes={this.state.classesNo}
                            classIcon={this.state.classIconNo}
                            classText={this.state.classTextNo}
                        />

                    </div>

                    <div className='container-btn'>
                        <Links
                            to='/water'
                            classes='btn-pages'
                            arrow={arrowL}
                            classeImg='arrow-pages'
                        >previous</Links>

                        <Links
                            to='/plants'
                            classes='btn-pages'
                            arrow={arrowR}
                            classeImg='arrow-pages'
                        >next</Links>
                    </div>

                </div>

            </div>
        )
    }
}


export default Pets