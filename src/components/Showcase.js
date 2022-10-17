import React from 'react';
import LeftImage from '../assets/images/showcase-woman.png';
import RightImage from '../assets/images/showcase-male.png';

const Showcase = () => {
  return (
    <section className='showcase'>
        <div className='container'>
            <img src={LeftImage} alt='' />
            <div></div>
            <img src={RightImage} alt='' />
        </div>
    </section>
  )
}

export default Showcase
