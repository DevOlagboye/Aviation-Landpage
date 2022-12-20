import React, {useState, useMemo, useRef, useEffect} from 'react'
import Select from "react-select"
import countryList from "react-select-country-list"
import { DatePicker, Drawer } from 'antd'
import "./HeroPage.css"
import mainAircraft from "../../Assets/images/MainAircraft.png"
import aircraftLogo from "../../Assets/images/logo.png"
import bookingLocation from "../../Assets/images/booking-location.png"
import travelersIcon from "../../Assets/images/travelers-icon.png"
import checkInIcon from "../../Assets/images/check-in-icon.png"
import gsap, {Power3} from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaAlignRight, FaTimes } from 'react-icons/fa'
const HeroPage = () => {
    gsap.registerPlugin(ScrollTrigger);

    const changeDate = (date, dateString) =>{
        console.log(date, dateString);
    }
    const [value, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), [])

    const changeHandler = value => {
        setValue(value)
    }

    let logoItem = useRef(null)
    let bookButton = useRef(null)
    let heroPageText = useRef(null)
    let heroPageTextP = useRef(null)

    const [expand, setExpand] = useState(false)
    const handleExpand = () =>{
        gsap.to(bookButton, {y: 10, duration: .8, ease:Power3.easeOut  })
        setExpand(true)
    }
    const handleShrink = () =>{
        gsap.to(bookButton, {y: 0, duration: .8, ease:Power3.easeIn  })
        setExpand(false)
    }
    useEffect(() => {
            gsap.to('.hero-image', {y: 25, duration: 5, opacity: 1});
            gsap.fromTo([logoItem, heroPageText, heroPageTextP],{
                opacity: 0,
                y: 20
            },
                {
                    duration: 3,
                    y: 0,
                    opacity: 1,
                    ease: Power3.easeIn,
                    delay: .2,
                }
            )
        
    }, [])
    const [open, setOpen] = useState(false)

    const showNavBar = () =>{
        setOpen(true)
    }
    const onClose = () => {
        setOpen(false)
    }
    
  return (
    <div className='hero-container'>
        <div className='hero-menu'>
            <img src={aircraftLogo} alt="" ref={el => {logoItem = el}}/>
            <ul>
                <li className='active'>All Flight</li>
                <li>Schedule</li>
                <li>Passengers</li>
                <li>Your Orders</li>
            </ul>
            <button>Let's Fly</button>
            <FaAlignRight className='menu-bar' onClick={showNavBar}/>
        </div>
        <Drawer closable={false} placement='bottom' open={open} className='menu-drawer' onClose={onClose}>
            <FaTimes onClick={onClose} className="closeIcon"/>
            <ul>
                <li className='active' onClick={onClose}>All Flight</li>
                <li>Schedule</li>
                <li>Passengers</li>
                <li>Your Orders</li>
            </ul>
            <button>Let's Fly</button>
        </Drawer>
        <div className='hero-aviation-aircraft'>
            <img src={mainAircraft} alt="" className='hero-image' />
        </div>
        <div className='hero-page-text'>
            <h4 ref={el =>{heroPageText = el} }>Travel Around The World</h4>
            <p ref={el =>{heroPageTextP = el} }>Aviation Travel around the world One of the advantages of being disorganized is that one is always having surprising discoveries</p>
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
                    <button onMouseLeave={handleShrink} onMouseEnter={handleExpand} ref={el => {bookButton = el}} type='submit' className='book-button'>
                        Book Now
                    </button>
                </form>
        </div>
    </div>
  )
}

export default HeroPage