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

class Water extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            classesRa: 'card-icon',
            classIconRa: 'icons',
            classTextRa: 'text-icon',
            classesRe: 'card-icon',
            classIconRe: 'icons',
            classTextRe: 'text-icon',
            classesDay: 'card-icon',
            classIconDay: 'icons',
            classTextDay: 'text-icon',
            iconeRa: `${oneDrop}`,
            iconeRe: `${twooDrop}`,
            iconeDay: `${threeDrop}`
        }
    }

    handleOptionSelectRa = () => {
        this.setState((prevState) => {
            return {
                classesRa: 'card-icon__selected',
                classIconRa: 'icon-selected',
                classTextRa: 'text-icon__selected',
                classesRe: 'card-icon',
                classIconRe: 'icons',
                classTextRe: 'text-icon',
                classesDay: 'card-icon',
                classIconDay: 'icons',
                classTextDay: 'text-icon',
                iconeRa: `${oneDropW}`,
                iconeRe: `${twooDrop}`,
                iconeDay: `${threeDrop}`
            }            
        })

        localStorage.setItem('water', 'rarely')
    }

    handleOptionSelectRe = () => {
        this.setState((prevState) => {
            return {
                classesRe: 'card-icon__selected',
                classIconRe: 'icon-selected',
                classTextRe: 'text-icon__selected',
                classesRa: 'card-icon',
                classIconRa: 'icons',
                classTextRa: 'text-icon',
                classesDay: 'card-icon',
                classIconDay: 'icons',
                classTextDay: 'text-icon',
                iconeRa: `${oneDrop}`,
                iconeRe: `${twooDropW}`,
                iconeDay: `${threeDrop}`
            }
        })

        localStorage.setItem('water', 'regularly')
    }

    handleOptionSelectDay = () => {
        this.setState((prevState) => {
            return {
                classesDay: 'card-icon__selected',
                classIconDay: 'icon-selected',
                classTextDay: 'text-icon__selected',
                classesRa: 'card-icon',
                classIconRa: 'icons',
                classTextRa: 'text-icon',
                classesRe: 'card-icon',
                classIconRe: 'icons',
                classTextRe: 'text-icon',
                iconeRa: `${oneDrop}`,
                iconeRe: `${twooDrop}`,
                iconeDay: `${threeDropW}`
            }
        })

        localStorage.setItem('water', 'daily')
    }

    render() {
        return (
            <div className='container-water'>

                <PagesLogo />

                <div className='container-pages'>
                    <div className='pages-title'>
                        <img src={water} alt='Imagem de um regador'></img>
                        <h2>How often do you want to <span> water </span>your plant? </h2>
                    </div>

                    <div className='container-icons'>
                        <CardIcons
                            icon={this.state.iconeRa}
                            alt='Raramente'
                            text='Rarely'
                            handleClick={this.handleOptionSelectRa}
                            classes={this.state.classesRa}
                            classIcon={this.state.classIconRa}
                            classText={this.state.classTextRa}
                        />
                        <CardIcons
                            icon={this.state.iconeRe}
                            alt='Regularmente'
                            text='Regularly'
                            handleClick={this.handleOptionSelectRe}
                            classes={this.state.classesRe}
                            classIcon={this.state.classIconRe}
                            classText={this.state.classTextRe}
                        />

                        <CardIcons
                            icon={this.state.iconeDay}
                            alt='Diariamente'
                            text='Daily'
                            handleClick={this.handleOptionSelectDay}
                            classes={this.state.classesDay}
                            classIcon={this.state.classIconDay}
                            classText={this.state.classTextDay}
                        />

                    </div>

                    <div className='container-btn'>
                        <Links
                            to='/sun'
                            classes='btn-pages'
                        >home</Links>

                        <Links
                            to='/pets'
                            classes='btn-pages'
                        >next</Links>
                    </div>

                </div>

            </div>
        )
    }
}

export default Water