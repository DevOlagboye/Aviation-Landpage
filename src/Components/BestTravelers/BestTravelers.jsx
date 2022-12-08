import React from 'react'
import "./BestTravelers.css"
import BestTravelerLocation1 from "../../Assets/images/BestTraveler-location1.png"

const BestTravelers = () => {
  return (
    <div className='best-traveler-container'>
        <h4>Best Travelers Of This Month</h4>
    <div className='best-traveler-gallery'>
        <div className='best-traveler-card'>
            <img src={BestTravelerLocation1} alt="" />

        </div>

    </div>
    </div>
  )
}

export default BestTravelers