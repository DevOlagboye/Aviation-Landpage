import React, {useRef, useEffect} from 'react'
import "./Features.css"
import bestGuideIcon from "../../Assets/images/Best Guide.png"
import discountIcon from "../../Assets/images/discount.png"
import privateIcon from "../../Assets/images/Private-icon.png"
import onlineSupportIcon from "../../Assets/images/online-support-icon.png"
import { FaArrowRight } from "react-icons/fa";
import {gsap, Power3} from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Booking = () => {
  gsap.registerPlugin(ScrollTrigger);
  let featuredContainer = useRef(null)

  useEffect(() =>{
    gsap.to(featuredContainer,
      {
        duration: 5,
        y: -20,
        opacity: 1,
        ease: Power3.easeIn,
        delay: 3,
        scrollTrigger: {
          trigger: featuredContainer,
          markers: false,
          start: "0%",
          end: "5%",
          scrub: true,
        }
    
    });
  }, [])

  return (
    <div className='features-container' ref={el => {featuredContainer = el}}>
        <h4 className='our-feature-main-text'>Our Features</h4>
        <div className='features-cards'>
          <div className='feature-card'
          >
            <img src={bestGuideIcon} alt="Best Guide Icon" />
            <h5>Best Guide</h5>
            <p>Suspendisse ultrices nibh <br/> non cursus sagittis. Morbi <br/>dictum consequat ex, quis <br/>finibus magna.</p>
            <a href='##'><FaArrowRight className='link-icon'/></a>
          </div>
          <div className='feature-card'
          >
            <img src={discountIcon} alt="More Discount Icon" />
            <h5>More Discount</h5>
            <p>Suspendisse ultrices nibh <br/> non cursus sagittis. Morbi <br/>dictum consequat ex, quis <br/>finibus magna.</p>
            <a href='##'><FaArrowRight className='link-icon'/></a>
          </div>
          <div className='feature-card'
          >
            <img src={privateIcon} alt="Private Icon" />
            <h5>Private</h5>
            <p>Suspendisse ultrices nibh <br/> non cursus sagittis. Morbi <br/>dictum consequat ex, quis <br/>finibus magna.</p>
            <a href='##'><FaArrowRight className='link-icon'/></a>
          </div>
          <div className='feature-card'
        >
            <img src={onlineSupportIcon} alt="Online Support Icon" />
            <h5>Online Support </h5>
            <p>Suspendisse ultrices nibh <br/> non cursus sagittis. Morbi <br/>dictum consequat ex, quis <br/>finibus magna.</p>
            <a href='##'><FaArrowRight className='link-icon'/></a>
          </div>
        </div>
    </div>
  )
}

export default Booking