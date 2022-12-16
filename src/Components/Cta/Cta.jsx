import React, {useRef, useEffect}from 'react'
import "./Cta.css"
import ctaImage from "../../Assets/images/Cta-image.png"
import ctaLine from "../../Assets/images/cta-line.png"
import  {gsap, Power3} from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Cta = () => {
    let ctaContainers = useRef(null)
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        gsap.fromTo(ctaContainers,{
            opacity: 0,
            scale: 0.4,
            y: -20
        },{
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 5,
            ease: Power3.easeIn,
            scrollTrigger: {
                markers: false,
                trigger: ctaContainers,
                 start: "-190%",
                 end: "-100%",
                scrub: true
            }
        })
    }, [])
  return (
    <div className='cta-container' ref={el => {ctaContainers = el}}>
        <div className='cta-image'>
            <img src={ctaImage} alt="Call to Action"/>
        </div>
        <div className='cta-details'>
            <h5>Let's Fly <img src={ctaLine} alt="CTA Line" className='cta-line' /></h5> 
            <h4>It’s one of the leading online flight <br/> booking platforms in the world</h4>
            <div className='cta-more-details'>
                <div className='circle'></div>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text</p>
            </div>
            <div className='cta-more-details'>
            <div className='circle'></div>
            <p>If you are going to use a passage of Lorem Ipsum</p>
            </div>
            <div className='cta-more-details'>
            <div className='circle'></div>
            <p>Lorem Ipsum is therefore always free from repetition, injected<br/> humour, or non-characteristic words etc.</p>
            </div>
            <div className='cta-more-details'>
                <div className='circle'></div>
                <p>It is a long established fact that a reader will be distracted <br/>by the readable content of a page when looking at its layout.</p>
            </div>
            <button>Book Now</button>
        </div>
    </div>
  )
}

export default Cta