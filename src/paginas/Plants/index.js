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

                {this.state.plantList.map(item => {
                    return (
                    <CardPlants
                    img={item.url}
                    text={item.text}
                    price={item.price}
                    toxic={item.toxicity}
                    sun={item.sun}
                    water={item.water}
                    />
                    )
                })
                }

            </div>
        )
    }
}

export default Plants