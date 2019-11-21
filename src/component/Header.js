import React from 'react'
import mine from './image/Mine.jpg'
import './css/header.css'

function Header() {
    return (
        <div>
            <header>
          <img className='profile'src={mine} alt="error"/>
          <h3>ALAUDDIN AHMED</h3></header>
        </div>
    )
}

export default Header
