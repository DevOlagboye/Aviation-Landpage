import React from 'react'
import "./Features.css"
import bestGuideIcon from "../../Assets/images/Best Guide.png"

const Booking = () => {
  return (
    <div className='features-container'>
        <h4 className='our-feature-main-text'>Our Features</h4>
        <div className='features-cards'>
          <div className='feature-card'>
            <img src={bestGuideIcon} alt="Best Guide Icon" />
            <h5>Best Guide</h5>
            <p>Suspendisse ultrices nibh <br/> non cursus sagittis. Morbi <br/>dictum consequat ex, quis <br/>finibus magna.</p>
          </div>
        </div>
    </div>
  )
}

export default Booking