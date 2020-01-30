import React from 'react'

import enviado from '../../../assets/illustrations/envelop.png'


function ThankYou (props) {
  return (
    <div className='pagina'>
      <h1>Thank you!</h1>
      <img className='enviado' src={enviado} alt='imagem de envelope'/>
      <p>You will hear from us soon. Please check your e-mail!</p>
      
    </div>
  )
}

export default ThankYou