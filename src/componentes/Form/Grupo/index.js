import React from 'react'
import Legenda from '../Legenda'
import BoxForm from '../BoxForm'

import '../style.css'

function Grupo (props) {
  return (
    <div className='div-form'>
      {props.children}
      {props.erro && <p className='grupo__erro'>{props.erro}</p>}
    </div>
  )
}

Grupo.Legenda = Legenda
Grupo.BoxForm = BoxForm

export default Grupo