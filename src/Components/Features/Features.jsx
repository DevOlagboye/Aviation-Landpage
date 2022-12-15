import React, {useRef, useEffect} from 'react'
import "./Features.css"
import bestGuideIcon from "../../Assets/images/Best Guide.png"
import discountIcon from "../../Assets/images/discount.png"
import privateIcon from "../../Assets/images/Private-icon.png"
import onlineSupportIcon from "../../Assets/images/online-support-icon.png"
import { FaArrowRight } from "react-icons/fa";
import gsap, {Power3} from "gsap"
const Booking = ({el}) => {
  let featureCard1 = useRef(null)
  let featureCard2 = useRef(null)
  let featureCard3 = useRef(null)
  let featureCard4 = useRef(null)

  useEffect(() =>{
    gsap.to([featureCard1, featureCard2, featureCard3, featureCard4],{
        duration: 3,
        y: -5,
        opacity: 1,
        ease: Power3.easeIn,
        delay: .5
    
    })
  })

  return (
    <div className='features-container fadeIn' ref={el}>
        <h4 className='our-feature-main-text'>Our Features</h4>
        <div className='features-cards'>
          <div className='feature-card' ref={el => {featureCard1 = el}}
          >
            <img src={bestGuideIcon} alt="Best Guide Icon" />
            <h5>Best Guide</h5>
            <p>Suspendisse ultrices nibh <br/> non cursus sagittis. Morbi <br/>dictum consequat ex, quis <br/>finibus magna.</p>
            <a href='##'><FaArrowRight className='link-icon'/></a>
          </div>
          <div className='feature-card'ref={el => {featureCard2 = el}}
          >
            <img src={discountIcon} alt="More Discount Icon" />
            <h5>More Discount</h5>
            <p>Suspendisse ultrices nibh <br/> non cursus sagittis. Morbi <br/>dictum consequat ex, quis <br/>finibus magna.</p>
            <a href='##'><FaArrowRight className='link-icon'/></a>
          </div>
          <div className='feature-card' ref={el => {featureCard3 = el}}
          >
            <img src={privateIcon} alt="Private Icon" />
            <h5>Private</h5>
            <p>Suspendisse ultrices nibh <br/> non cursus sagittis. Morbi <br/>dictum consequat ex, quis <br/>finibus magna.</p>
            <a href='##'><FaArrowRight className='link-icon'/></a>
          </div>
          <div className='feature-card'ref={el => {featureCard4 = el}}
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