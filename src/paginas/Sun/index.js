import React  from 'react'

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

class Sun extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            classesHigh: 'card-icon',
            classIconHigh: 'icons',
            classTextHight: 'text-icon',
            classesLow: 'card-icon',
            classIconLow: 'icons',
            classTextLow: 'text-icon',
            classesNo: 'card-icon',
            classIconNo: 'icons',
            classTextNo: 'text-icon',
            iconeHigh: `${iconSunHigh}`,
            iconeLow: `${iconSunLow}`,
            iconeNo: `${iconNoAnswer}`,
        }
    }

    handleOptionSelectHigh = () => {
        this.setState((prevState) => {
            return {
                classesHigh: 'card-icon__selected',
                classIconHigh: 'icon-selected',
                classTextHigh: 'text-icon__selected',
                classesLow: 'card-icon',
                classIconLow: 'icons',
                classTextLow: 'text-icon',
                classesNo: 'card-icon',
                classIconNo: 'icons',
                classTextNo: 'text-icon',
                iconeHigh: `${iconSunHighW}`,
                iconeLow: `${iconSunLow}`,
                iconeNo: `${iconNoAnswer}`,
            }

            
        })
        localStorage.setItem('sun', 'high')         
    }

    handleOptionSelectLow = () => {
        this.setState((prevState) => {
            return {
                classesLow: 'card-icon__selected',
                classIconLow: 'icon-selected',
                classTextLow: 'text-icon__selected',
                classesHigh: 'card-icon',
                classIconHigh: 'icons',
                classTextHigh: 'text-icon',
                classesNo: 'card-icon',
                classIconNo: 'icons',
                classTextNo: 'text-icon',
                iconeHigh: `${iconSunHigh}`,
                iconeLow: `${iconSunLowW}`,
                iconeNo: `${iconNoAnswer}`,
            }

        })
        localStorage.setItem('sun', 'low')
    }

    handleOptionSelectNo = () => {
        this.setState((prevState) => {
            return {
                classesNo: 'card-icon__selected',
                classIconNo: 'icon-selected',
                classTextNo: 'text-icon__selected',
                classesHigh: 'card-icon',
                classIconHigh: 'icons',
                classTextHigh: 'text-icon',
                classesLow: 'card-icon',
                classIconLow: 'icons',
                classTextLow: 'text-icon',
                iconeHigh: `${iconSunHigh}`,
                iconeLow: `${iconSunLow}`,
                iconeNo: `${iconNoAnswerW}`,
            }

        })
        localStorage.setItem('sun', 'no')
    }

    render() {
        return (
            <div className='container-sun'>

                <PagesLogo />

                <div className='container-pages'>
                    <div className='pages-title'>
                        <img src={sun} alt='Imagem do sol com óculos'></img>
                        <h2>First, set the amount of <span> sunlight </span>your plant will get. </h2>
                    </div>

                    <div className='container-icons'>
                        <CardIcons
                            icon={this.state.iconeHigh}
                            alt='Sol forte'
                            text='High Sunlight'
                            handleClick={this.handleOptionSelectHigh}
                            classes={this.state.classesHigh}
                            classIcon={this.state.classIconHigh}
                            classText={this.state.classTextHigh}
                        />
                        <CardIcons
                            icon={this.state.iconeLow}
                            alt='Pouco sol'
                            text='Low sunlight'
                            handleClick={this.handleOptionSelectLow}
                            classes={this.state.classesLow}
                            classIcon={this.state.classIconLow}
                            classText={this.state.classTextLow}
                        />

                        <CardIcons
                            icon={this.state.iconeNo}
                            alt='Sem sol'
                            text='No sunlight'
                            handleClick={this.handleOptionSelectNo}
                            classes={this.state.classesNo}
                            classIcon={this.state.classIconNo}
                            classText={this.state.classTextNo}
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
}

export default Sun