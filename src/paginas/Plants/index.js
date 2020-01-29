import React from 'react';
import { getPlants } from '../../service/base'
import CardPlants from '../../componentes/CardPlants'
import PagesLogo from '../../componentes/PagesLogo'
import Button from '../../componentes/Button'

import pick from '../../assets/illustrations/pick.png'

import './style.css'

class Plants extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            plantList: [],
            id:""
        }
    }

    componentDidMount() {
        getPlants()
            .then(response => {
                this.setState({
                    plantList: response.data
                })
                console.log(response.data);

            })
            .catch(error => {
                console.error(error)
            })
    }

     selecionaPlanta(id) {
         localStorage.setItem('id',id)        
        
        this.props.history.push({
            pathname: '/plantbuy'
        })

    }

    render() {
        return (
            <div>
                <PagesLogo />
                <div className='container-title'>
                    <img src={pick}></img>
                    <h1>Our picks for you</h1>
                </div>

                <div className='container-plants'>
                    <div className='container-plants__itens'>
                        {this.state.plantList.map(item => {
                            return (
                                <div className='div-plants'>
                                    <CardPlants
                                        img={item.url}
                                        text={item.name}
                                        price={item.price}
                                        toxic={item.toxicity}
                                        sun={item.sun}
                                        water={item.water}
                                    />
                                    <Button
                                        click={() => this.selecionaPlanta(item.id)}
                                        classes='button'
                                    >buy now</Button>
                                </div>
                            )
                        })
                        }
                    </div>
                </div>

            </div>
        )
    }
}

export default Plants