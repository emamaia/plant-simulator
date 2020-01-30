import React from 'react'
import Form from '../../componentes/Form'
import ThankYou from '../../componentes/Form/ThankYou'

import './style.css'

class Contact extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      conteudo: 'form'
    }
  }

  handleMudaConteudo = (proximaPagina) => {
    this.setState({
      conteudo: proximaPagina
    })
  }

  render () {
    return (
      <section className='contato'>
        {
          this.state.conteudo === 'form' &&
          <Form
            mudaConteudo={this.handleMudaConteudo}
          />
        }
        {
          this.state.conteudo === 'thankYou' &&
          <ThankYou
            mudaConteudo={this.handleMudaConteudo}
          />
        }
      </section>
    )
  }
}

export default Contact
