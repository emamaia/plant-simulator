import React from 'react';

import './style.css'

function Button(props) {
  return (
    <button
      // onClick={handleClick}
      className={props.classes}     
    >
      {props.children}
    </button>
  )
}


export default Button
