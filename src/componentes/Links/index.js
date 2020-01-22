import React from 'react';
import { Link } from 'react-router-dom'

import './style.css'

function Links(props) {
  return (
  
   <div className='btn'>
    <Link
    to={props.to}
    className={props.classes}        
    >
      {props.children}

    </Link>

    </div>
  )
}


export default Links
