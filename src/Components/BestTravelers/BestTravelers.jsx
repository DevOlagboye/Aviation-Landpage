import React from 'react'
import "./BestTravelers.css"
import BestTravelerLocation1 from "../../Assets/images/BestTraveler-location1.png"
import BestTraveler1Profile from "../../Assets/images/BestTraveler1-profile.png"

const BestTravelers = () => {
  return (
    <div className='best-traveler-container'>
        <h4>Best Travelers Of This Month</h4>
    <div className='best-traveler-gallery'>
        <div className='best-traveler-card'>
            <img src={BestTravelerLocation1} alt="BestTraveler Location" className='best-traveler-location'/>
            <img src={BestTraveler1Profile} alt="BestTraveler Profile" className='best-traveler-profile' />
            <h5>Raju Mullah</h5>
            <p>@rajumulllah</p>
        </div>

    </div>
    </div>
  )
}

export default BestTravelers