import React from 'react';
import BoxForm from '../../componentes/BoxForm'
import ButtonForm from '../../componentes/ButtonForm'

import './style.css'


class Form extends React.Component {
    constructor(props) {
        super(props);
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
          nome: this.state.nome.valor,
          email: this.state.email.valor         
        }
        console.log(novoContato, 'enviou')
      }

    render() {
        const verificaBotao = this.estaDesabilitado()
        return (
            <div className='form-page'>
                <h2>Nice pick!</h2>
                <p>Tell us your name and e-mail and we will get in touch</p>
                <form className='form'>
                    <BoxForm
                        erro={this.state.nome.erro}
                        htmlFor='nome'
                        label='Nome completo:'
                        name='nome'
                        placeholder='Digite seu nome'
                        mudaEstado={this.handleChange}
                        minLength={10}
                        required
                        type='text'
                    />

                    <BoxForm
                        erro={this.state.nome.erro}
                        htmlFor='email'
                        label='E-mail:'
                        name='e-mail'
                        placeholder='Digite seu e-mail'
                        mudaEstado={this.handleChange}                        
                        required
                        type='email'
                    />

                    <ButtonForm
                     desabilitado={verificaBotao}
                     mudaConteudo={this.props.mudaConteudo}
                     onSubmit={this.handleSubmit}
                     pagina='sucesso'
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