import React from 'react'
import ButtonForm from '../../componentes/ButtonForm'

function ThankYou (props) {
  return (
    <div className='pagina'>
      <h2>Thank you!</h2>
      <p>You will hear from us soon. Please check your e-mail!</p>
      <ButtonForm
        mudaConteudo={props.mudaConteudo}
        pagina='form'
        type='button'
      >
        Previous
      </ButtonForm>
    </div>
  )
}

export default ThankYou