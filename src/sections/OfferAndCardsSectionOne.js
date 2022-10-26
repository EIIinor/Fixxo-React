import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import GrayImage from '../assets/images/gray-img.png'
import ProductCard from '../components/ProductCard'


const OfferAndCardsSectionOne = ( { products} ) => {


  return (
    <section className='offer-one'>
        <div className='container'>
            <img src={GrayImage} alt=''/>
            <div className='info'>
              <h1>2 FOR USD $29</h1>
              <NavLink to="#" className="btn-theme-white">
                  <span className='corner-left'></span>
                  <span className='corner-right'></span>
                  SHOP NOW
              </NavLink>
            </div>
            <div className='cards'>
              <div className='row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4'>
                {
                    products.map(product => <ProductCard key={product.id} product={product} />)
                }
              </div>
            </div>
        </div>
        <div>
       
        </div>
    </section>
  )
}

export default OfferAndCardsSectionOne