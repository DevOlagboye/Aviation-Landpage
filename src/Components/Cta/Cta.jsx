import React from 'react'
import "./Cta.css"
import ctaImage from "../../Assets/images/Cta-image.png"
import ctaLine from "../../Assets/images/cta-line.png"

const Cta = () => {
  return (
    <div className='cta-container'>
        <div className='cta-image'>
            <img src={ctaImage} alt="Call to Action" />
        </div>
        <div className='cta-details'>
            <h5>Let's Fly <img src={ctaLine} alt="CTA Line" /></h5> 
            <h5>It’s one of the leading online flight <br/> booking platforms in the world</h5>
        </div>
    </div>
  )
}

export default Cta