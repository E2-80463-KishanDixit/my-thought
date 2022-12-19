import React from 'react';
import logo from './Images/BlueLogoBG22.png';
import './Header.css';

function Header() {
  return (
    <> 
       <div className='header'>
           <img className='logoImg'    src={logo}  alt='logo'/>
           <div className='heading'><h1>Kishan-Thought</h1></div> 
       </div>
    </>
  );
}

export default Header;