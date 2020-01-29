import React from 'react'
import PagesLogo from '../../componentes/PagesLogo'
import Contact from '../Contact'
import CardPlantBuy from '../../componentes/CardPlantBuy'
import { getId } from '../../service/baseid'

import './style.css'

class PlantBuy extends React.Component{
    constructor(props){
        super(props);
        this.state={
            plantId: ''
        }
    }

    componentDidMount() {
        getId()
            .then(response => {
                console.log(response);
                
                this.setState({
                    plantId: response.data
                })             
            })
            .catch(error => {
                console.error(error)
            })
    }
    
    render(){
    return(
        <div className='container-plantbuy'>
            <PagesLogo/>
            <CardPlantBuy
            name={this.state.plantId.name}
            price={this.state.plantId.price}
            imagem={this.state.plantId.url}
            sun={this.state.plantId.sun}
            water={this.state.plantId.water}
            toxicity={this.state.plantId.toxicity}
            />
            <Contact></Contact>

        </div>
    )
}
}

export default PlantBuy