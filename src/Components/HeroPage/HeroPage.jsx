import React from 'react'
import { DatePicker } from 'antd'
import "./HeroPage.css"
import mainAircraft from "../../Assets/images/MainAircraft.png"
import aircraftLogo from "../../Assets/images/logo.png"
import bookingLocation from "../../Assets/images/booking-location.png"
import travelersIcon from "../../Assets/images/travelers-icon.png"
import checkInIcon from "../../Assets/images/check-in-icon.png"
const HeroPage = () => {
    const onChange = (date, dateString) =>{
        console.log(date, dateString);
    }
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
            <div className='booking-features'>
                    <div className='booking-features-details'>
                        <img src={bookingLocation} alt="booking location" />
                        <h5>Location<br/>
                            <span>Where are you going?</span>
                        </h5>
                    </div>
                    <div className='booking-features-details'>
                        <img src={travelersIcon} alt="Travelers Icon" />
                        <h5>Travelers<br/>
                            <span>Add guest</span>
                        </h5>
                    </div>
                    <div className='booking-features-details'>
                        <img src={checkInIcon} alt="Check In Icon" />
                        <h5>Check-in<br/>
                            <DatePicker onChange={onChange} className="date-picker" placeholder={"Add Date"}/>
                        </h5>
                    </div>
                    <div className='booking-features-details'>
                        <img src={checkInIcon} alt="Check In Icon" />
                        <h5>Check-out<br/>
                            <DatePicker onChange={onChange} className="date-picker" placeholder={"Add Date"}/>
                        </h5>
                    </div>
                </div>
                <form>
                    <button type='submit' className='book-button'>
                        Book Now
                    </button>
                </form>
        </div>
    </div>
  )
}

export default HeroPage