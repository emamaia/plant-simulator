import React from 'react';

import './style.css'

function Button(props) {
  return (
  
  <button
  onClick={props.handleClick}
  className='button'
  >{props.children}</button>
  
  )
}

export default Button
