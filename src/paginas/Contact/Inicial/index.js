import React from 'react'
import BoxForm from '../../../componentes/Form/BoxForm'
import ButtonForm from '../../../componentes/Form/ButtonForm'

class Inicial extends React.Component {
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

        handleChange = (nomeDoInput, valorDoInput, erro = '') => {
            const erroDoInput = erro
            this.setState({ [nomeDoInput]: { valor: valorDoInput, erro: erroDoInput } })
        }

        estaDesabilitado = () => {
            return (
                !this.state.nome.valor ||
                this.state.nome.erro ||     
                !this.state.email.valor ||
                this.state.email.erro
            )
        }

        handleSubmit = e => {
            e.preventDefault()

            const novoContato = {
                nome: this.state.nome.valor,
                email: this.state.email.valor
            }

            const estaDesabilitado = this.estaDesabilitado()

            if (!estaDesabilitado) {
                // envia novoContato para API
                console.log(novoContato)
            }
        }

        render(){

            const estaDesabilitado = this.estaDesabilitado()
            return (
                <div className='pagina'>
                    <h1>Nice pick!</h1>
                    <p>Tell us your name and e-mail and we will get in touch regarding your order ;)</p>
                    <form className='formulario' onSubmit={this.handleSubmit}>
                        <BoxForm
                            erro={this.state.nome.erro}
                            htmlFor='nome'
                            label='Nome completo'
                            id='nome'
                            name='nome'
                            placeholder='Digite seu nome'
                            type='text'
                            required
                            minLength={10}
                            onChange={this.handleChange}
                        />

                        <BoxForm
                            erro={this.state.email.erro}
                            htmlFor='email'
                            label='Digite seu e-mail'
                            id='email'
                            name='email'
                            placeholder='Digite seu e-mail'
                            type='email'
                            required
                            minLength={10}
                            onChange={this.handleChange}
                        />
                        
                    <ButtonForm
                           desabilitado={estaDesabilitado}
                           value={'final'}
                           onClick={this.props.onClick}
                           className='btn-form'
                        >
                           Send
                    </ButtonForm>
                    </form>
                </div>
            )
        }
    }


    export default Inicial