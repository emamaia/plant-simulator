import React from 'react'

function ButtonForm (props) {
  let classes = 'btn-form'

  if (props.desabilitado) {
    classes += ' btn-desabilitado'
  }

  const handleClick = (evento) => {
    evento.preventDefault()
    if (props.type === 'submit') {
      props.onSubmit()
    }
    props.mudaConteudo(props.pagina)
  }
  return (
    <button
      onClick={handleClick}
      className={classes}
      type={props.type}
    >
      {props.children}
    </button>
  )
}

export default ButtonForm