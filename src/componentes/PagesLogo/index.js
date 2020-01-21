import React from 'react';
import logo from '../../assets/logo/logo-greenthumb.svg';

import './style.css'

function PagesLogo(props) {
    return (
        <div className='pages'>
            <img className='pages-logo' src={logo} alt='Logo' />
            <div className='pages-line'></div>
        </div>
    )
}

export default PagesLogo