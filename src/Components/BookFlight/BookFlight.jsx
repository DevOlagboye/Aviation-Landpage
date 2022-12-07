import React, {useState} from 'react'
import {Carousel, Radio} from "antd"
import AirDeliveryImage from "../../Assets/images/Air Delivery.png"
import TicketImage from "../../Assets/images/ticket-background.png"
import "./BookFlight.css"

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
const BookFlight = () => {
    const [dotPosition, setDotPosition] = useState('right');
    const handlePositionChange = ({ target: { value } }) => {
        setDotPosition(value);
      };
  return (
    <div className='book-flight-container'>
        <div className='book-flight-details'>
            <div className='book-flight-text-image'>
                <h4>Book Popular Flight <br/> Tickets</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and <br/>typesetting industry. Lorem Ipsum has been the industry's</p>
                <img src={AirDeliveryImage} alt="Air Craft Delivery" />
            </div>
            <div className='book-flight-ticket'>
            <Carousel dotPosition={dotPosition} autoplay>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
                <img src={TicketImage} alt="Book Flight Ticket" />
            </div>
        </div>
    </div>
  )
}

export default BookFlight