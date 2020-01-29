import React from 'react'

function ButtonForm (props) {
  let classes = props.className

  if (props.desabilitado && props.className === 'btn-form') {
    classes += ' btn-desabilitado'
  }

  const handleMudaPagina = (e) => {
    e.preventDefault()
    props.onClick('final')
  }

  return (
    <button 
    value={props.value} 
    onClick={handleMudaPagina} 
    className={classes}>
      
      {props.children}
    </button>
  )
}

export default ButtonForm