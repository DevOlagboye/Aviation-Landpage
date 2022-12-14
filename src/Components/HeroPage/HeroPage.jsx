import React, {useState, useMemo, useRef, useEffect} from 'react'
import Select from "react-select"
import countryList from "react-select-country-list"
import { DatePicker } from 'antd'
import "./HeroPage.css"
import mainAircraft from "../../Assets/images/MainAircraft.png"
import aircraftLogo from "../../Assets/images/logo.png"
import bookingLocation from "../../Assets/images/booking-location.png"
import travelersIcon from "../../Assets/images/travelers-icon.png"
import checkInIcon from "../../Assets/images/check-in-icon.png"
import gsap from "gsap"
const HeroPage = ({timeline, ease}) => {
    const changeDate = (date, dateString) =>{
        console.log(date, dateString);
    }
    const [value, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), [])

    const changeHandler = value => {
        setValue(value)
    }
    let logo = useRef(null);
    let menu_item1 = useRef(null);
    let menu_item2 = useRef(null);
    let menu_item3 = useRef(null);
    let menu_item4 = useRef(null);
    
    useEffect(() => {
            gsap.to('.hero-image', {y: 25, duration: 3});
        timeline.to(logo, 1, {
            opacity: 1,
            y: '10'
        });

        timeline.to([menu_item1, menu_item2, menu_item3, menu_item4], 2 ,{
            opacity: 1,
            y: 9,
            stagger: {
                amount: .4
            },
            ease: ease
        })
    })
    
  return (
    <div className='hero-container'>
        <div className='hero-menu'>
            <img src={aircraftLogo} alt=""  ref={el => logo = el} className="logo"/>
            <ul>
                <li ref={el => menu_item1 = el} className='menu-item active'>All Flight</li>
                <li ref={el => menu_item2 = el} className="menu-item">Schedule</li>
                <li ref={el => menu_item3 = el} className="menu-item">Passengers</li>
                <li ref={el => menu_item4 = el} className="menu-item">Your Orders</li>
            </ul>
            <button>Let's Fly</button>
        </div>
        <div className='hero-aviation-aircraft'>
            <img src={mainAircraft} alt="" className='hero-image' />
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
                            <Select placeholder={"Where are you going"} options={options} value={value} onChange={changeHandler} styles={{
                                control: (baseStyles, state) =>({
                                    ...baseStyles,
                                    border: "none",
                                    width: "250px",
                                }),
                            }}/>
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
                            <DatePicker onChange={changeDate} className="date-picker" placeholder={"Add Date"}/>
                        </h5>
                    </div>
                    <div className='booking-features-details'>
                        <img src={checkInIcon} alt="Check In Icon" />
                        <h5>Check-out<br/>
                            <DatePicker onChange={changeDate} className="date-picker" placeholder={"Add Date"}/>
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