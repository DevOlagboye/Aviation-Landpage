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