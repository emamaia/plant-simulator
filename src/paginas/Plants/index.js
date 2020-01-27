import React from 'react';
import { getPlants } from '../../service/base'
import CardPlants from '../../componentes/CardPlants'
import PagesLogo from '../../componentes/PagesLogo'

import pick from '../../assets/illustrations/pick.png'

import './style.css'

class Plants extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            plantList: []
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
                                <CardPlants
                                    img={item.url}
                                    text={item.name}
                                    price={item.price}
                                    toxic={item.toxicity}
                                    sun={item.sun}
                                    water={item.water}
                                />
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