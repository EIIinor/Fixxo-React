import React from 'react'
import ProductCard from '../components/ProductCard'

const SmallCardsSection = ({title, items = [] }) => {


  return (
    <section className='small-cards'>
        <div className='container'>
            <div className='latest'>
                <h1>Latest Product</h1>
                {
                  items.map( product => <ProductCard key={product.articalNumber} item={product} />)
               }
            </div>
            <div className='best-selling'>
                <h1>Best Selling Product</h1>
                {
                  items.map( product => <ProductCard key={product.articalNumber} item={product} />)
               }
            </div>
            <div className='top-ranked'>
                <h1>Top Ranked Product</h1>
                {
                  items.map( product => <ProductCard key={product.articalNumber} item={product} />)
               }
            </div>
        </div>
    </section>
  )
}

export default SmallCardsSection