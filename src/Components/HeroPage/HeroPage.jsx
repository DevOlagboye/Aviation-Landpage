import React from 'react'
import "./HeroPage.css"
import mainAircraft from "../../Assets/images/MainAircraft.png"
import aircraftLogo from "../../Assets/images/logo.png"
const HeroPage = () => {
  return (
    <div className='hero-container'>
        <div className='hero-menu'>
            <img src={aircraftLogo} alt=""  />
            <ul>
                <li>All Flight</li>
                <li>Schedule</li>
                <li>Passengers</li>
                <li>Your Orders</li>
            </ul>
            <button>Let's Fly</button>
        </div>
        <div className='hero-aviation-aircraft'>
            <img src={mainAircraft} alt=""  />
        </div>
    </div>
  )
}

export default HeroPage