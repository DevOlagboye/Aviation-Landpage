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
                <li className='active'>All Flight</li>
                <li>Schedule</li>
                <li>Passengers</li>
                <li>Your Orders</li>
            </ul>
            <button>Let's Fly</button>
        </div>
        <div className='hero-aviation-aircraft'>
            <img src={mainAircraft} alt=""  />
        </div>
        <div className='hero-page-text'>
            <h4>Travel Around The World</h4>
            <p>Aviation Travel around the world One of the advantages of being disorganized is that one is always having surprising discoveries</p>
        </div>
        <div className='booking-container'>
            <div className='booking-category'>
                <div className='booking-category-list'>
                    <div className='active'>
                        <h5>Economy</h5>
                    </div>
                    <div>
                        <h5>Business</h5>
                    </div>
                    <div>
                        <h5>First</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroPage