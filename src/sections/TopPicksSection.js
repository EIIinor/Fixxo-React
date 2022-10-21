import React from 'react'
import { NavLink } from 'react-router-dom'
import PamelaImg from '../assets/images/pamela-img.svg';
import ConsciousImg from '../assets/images/conscious-img.svg';

const TopPicksSection = () => {
  return (
    <section className='top-picks'>
        <div className='container'>
            <div className='shop-now'>
                <img src={PamelaImg} alt='' />
                <h1>Pamela Rief's <span>Top Picks</span></h1>
                <NavLink to="#" className="btn-theme">
                    <span className='corner-left'></span>
                    <span className='corner-right'></span>
                    SHOP NOW
                </NavLink>
            </div>
            <div className='flash-sale'>
                <img src={ConsciousImg} alt='' />
                <h1>Lets Be <span>Conscious</span></h1>
                <NavLink to="#" className="btn-theme">
                    <span className='corner-left'></span>
                    <span className='corner-right'></span>
                    FLASH SALE
                </NavLink>
            </div>
        </div>
    </section>
  )
}

export default TopPicksSection
