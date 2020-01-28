import React from 'react';

import './style.css'

function BoxForm(props) {
    
  function validaCampo (evento) {
    const { value, name } = evento.target
    
    if(props.required && value.trim() === ''){
      props.mudaEstado(name, value, 'Campo obrigatório')
      return
    }

    if(props.minLength && value.length < props.minLength) {
      props.mudaEstado(name, value, `Digite pelo menos ${props.minLength} caracteres`)
      return
    }

    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(props.type === 'email' && !regex.test(value)) {
      props.mudaEstado(name, value, 'Digite um email válido')
      return
    }
    props.mudaEstado(name, value)
  }

    return (
        <div>
            <label htmlFor={props.htmlFor}>
                {props.label}
            </label>
            <input
                name={props.name}
                type={props.type}
                className='campo'
                placeholder={props.placeholder}
                onChange={validaCampo}
            />
             {props.erro && <p className='grupo__erro'>{props.erro}</p>}
        </div>
    )
}

export default BoxForm