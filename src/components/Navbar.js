import React from 'react'
import Logo from '../assets/images/logo.svg'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='container'>
            <img src={Logo} alt='logotype'/>   
            <div className="links">
                    <span>
                        <a href="#">Home</a>
                        <a href="#">Categories</a>
                        <a href="#">Products</a>
                        <a href="#">Contacts</a>
                    </span>
                </div> 
                <div className="info">
                    <a class="link" href="#"><i class="fa-regular fa-magnifying-glass me-2"></i></a>
                    <a class="link" href="#"><i class="fa-regular fa-code-compare fa-flip-horizontal"></i></a>
                    <a id="heart" class="link" href="#">
                        <span class="badge rounded-pill">1</span>
                        <i class="fa-regular fa-heart"></i>
                    </a>
                    <a id="cart" class="link" href="#">
                        <span class="badge rounded-pill">3</span>
                        <i class="fa-regular fa-cart-shopping me-2"></i>
                    </a>
                </div>    
        </div>
    </nav>
  )
}

export default Navbar
