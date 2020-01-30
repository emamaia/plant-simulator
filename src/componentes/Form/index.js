import React from 'react'
import axios from 'axios'
import Grupo from './Grupo'
import ButtonForm from './ButtonForm'

import './style.css'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nome: {
        valor: '',
        erro: ''
      },
      email: {
        valor: '',
        erro: ''
      }
    }
  }

  handleChange = (nomeDoCampo, valorDoCampo, erroDoCampo = '') => {
    this.setState({
      [nomeDoCampo]: {
        valor: valorDoCampo,
        erro: erroDoCampo
      }
    })
  }

  estaDesabilitado = () => {
    return (
      !this.state.nome.valor ||
      this.state.nome.erro ||
      !this.state.email.valor ||
      this.state.email.erro

    )
  }

  handleSubmit = () => {
    const novoContato = {
      name: this.state.nome.valor,
      email: this.state.email.valor,
      id: localStorage.getItem('id')
    }
    console.log(novoContato)
    const requestInfo={
      method: 'POST',
      body:JSON.stringify(novoContato),
      headers: new Headers({
        'Content-type':'application/json'
      })
    }

    fetch(`https://6nrr6n9l50.execute-api.us-east-1.amazonaws.com/default/front-plantTest-service`, requestInfo)
    .then(response=>{
      if(response.ok){
        console.log('enviou')        
      }
      else{
        console.log(response);
        
      }
    })
  }

  render() {
    const verificaBotao = this.estaDesabilitado()
    //true ou false
    return (
      <div className='pagina'>
        <h1>Nice pick!</h1>
        <p>Tell us your name and e-mail and we will get in touch regarding your order ;)</p>
        <form className='formulario' >
          <Grupo erro={this.state.nome.erro} >
            <Grupo.Legenda htmlFor='nome'> Nome Completo: </Grupo.Legenda>
            <Grupo.BoxForm
              name='nome'
              placeholder='Digite seu nome'
              mudaEstado={this.handleChange}
              minLength={10}
              required
              type='text'
            />
          </Grupo>
          <Grupo erro={this.state.email.erro} >
            <Grupo.Legenda htmlFor='email'> Email: </Grupo.Legenda>
            <Grupo.BoxForm
              name='email'
              placeholder='Digite seu email'
              mudaEstado={this.handleChange}
              required
              type='email'
            />
          </Grupo>

          <ButtonForm
            desabilitado={verificaBotao}
            mudaConteudo={this.props.mudaConteudo}
            onSubmit={this.handleSubmit}
            pagina='thankYou'
            type='submit'
          >
            Send
          </ButtonForm>

        </form>
      </div>
    )
  }
}

export default Form