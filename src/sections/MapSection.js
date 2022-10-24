import React from 'react'
import { NavLink } from 'react-router-dom'
import Map from '../assets/images/map.svg'

const MapSection = () => {
  return (
    <div className='map'>
        <h1 className="fa-solid fa-house">Contacts</h1>
        <img src={Map} alt='map image' />
    </div>
  )
}

export default MapSection