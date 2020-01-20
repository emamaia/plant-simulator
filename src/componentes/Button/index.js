import React from 'react';

import './style.css'

function Button(props) {
  let classes = 'botao'

  if (props.desabilitado) {
    classes += ' botao--desabilitado'
  }

  return (
    <button
      // onClick={handleClick}
      className={classes}
      type={props.type}
    >
      {props.children}
    </button>
  )
}


export default Button
