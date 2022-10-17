import React from 'react';
import LeftImage from '../assets/images/showcase-woman.png';
import RightImage from '../assets/images/showcase-male.png';

const Showcase = () => {
  return (
    <section className='showcase'>
        <div className='container'>
            <img src={LeftImage} alt='' />
            <div className="showcase-info">
                <h1>SALE UP <p>To 50% Off</p> </h1>
                <p>Online shopping free home delivery over $100</p>
                <button className="btn-theme">SHOP NOW</button>
            </div>
            <img src={RightImage} alt='' />
        </div>
    </section>
  )
}

export default Showcase
