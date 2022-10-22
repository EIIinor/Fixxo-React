import React from 'react'
import { NavLink } from 'react-router-dom'
import GrayImage from '../assets/images/gray-img.png'


const OfferGridSection = () => {
  return (
    <section className='offer-section'>
        <div className='container'>
            <img src={GrayImage} alt=''/>
            <h1>2 FOR USD $29</h1>
            <NavLink to="#" className="btn-theme-white">
                <span className='corner-left'></span>
                <span className='corner-right'></span>
                SHOP NOW
            </NavLink>
        </div>
        <div>
       
        </div>
    </section>
  )
}

export default OfferGridSection