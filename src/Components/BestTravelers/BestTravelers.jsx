import React, {useRef, useEffect} from 'react'
import "./BestTravelers.css"
import {gsap, Power3} from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { bestTravelers } from './data'



const BestTravelers = () => {
  gsap.registerPlugin(ScrollTrigger);

  let bestTravelerContainer = useRef(null)

  useEffect(() =>{
    gsap.to(bestTravelerContainer,
      {
        duration: 5,
        y: -20,
        opacity: 1,
        ease: Power3.easeIn,
        delay: 3,
        scrollTrigger: {
          trigger: bestTravelerContainer,
          markers: false,
          start: "-190%",
          end: "5%",
          scrub: true,
        }
    
    });
  }, [])
  return (
    <div className='best-traveler-container' ref={el => {bestTravelerContainer = el}}>
        <h4>Best Travelers Of This Month</h4>
    <div className='best-traveler-gallery'>
        {bestTravelers.map(bestTraveler => (
            <div className='best-traveler-card' key={bestTraveler.name}>
            <img src={bestTraveler.location} alt="BestTraveler Location" className='best-traveler-location'/>
            <img src={bestTraveler.profileImage} alt="BestTraveler Profile" className='best-traveler-profile' />
            <h5>{bestTraveler.name}</h5>
            <p>{bestTraveler.username}</p>
        </div>
        ))}

    </div>
    </div>
  )
}

export default BestTravelers