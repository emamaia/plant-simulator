import React from 'react';
import { Link } from 'react-router-dom'



import './style.css'

function Links(props) {
  return (
  
   <div className='btn'>
    <Link
    onClick={props.handleclick}
    to={props.to}
    className={props.classes}        
    >
      {props.children}
      <img className={props.classeImg} src={props.arrow} alt='flecha'/>

    </Link>

    </div>
  )
}


export default Links
