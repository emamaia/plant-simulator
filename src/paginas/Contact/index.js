import React, { Component } from 'react'

import ThankYou from './ThankYou'
import Inicial from './Inicial'

import './style.css'

class Contact extends Component {
  constructor (props) {
    super(props)

    this.state = {
      conteudo: undefined
    }
  }

  handleClick = (proximaPagina) => {
    this.setState({
      conteudo: proximaPagina
    })
  }

  render () {
    return (
      <div className='contato'>
        {this.state.conteudo === undefined && (
          <Inicial onClick={this.handleClick} />
        )}
        {this.state.conteudo === 'final' && <ThankYou />}
      </div>
    )
  }
}

export default Contact