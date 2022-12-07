import React from 'react'
import AirDeliveryImage from "../../Assets/images/Air Delivery.png"
import "./BookFlight.css"

const BookFlight = () => {
  return (
    <div className='book-flight-container'>
        <div className='book-flight-details'>
            <div className='book-flight-text-image'>
                <h4>Book Popular Flight <br/> Tickets</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and <br/>typesetting industry. Lorem Ipsum has been the industry's</p>
                <img src={AirDeliveryImage} alt="Air Craft Delivery" />
            </div>
        </div>
    </div>
  )
}

export default BookFlight