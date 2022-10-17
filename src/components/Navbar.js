import React from 'react'
import Logo from '../assets/images/logo.svg'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='container'>
            <img src={Logo} alt='logotype'/>   
            <div className='links'>links</div> 
            <div className='info'>info</div>    
        </div>
    </nav>
  )
}

export default Navbar
