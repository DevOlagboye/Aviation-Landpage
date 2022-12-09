import React from 'react'
import CustomersImage from "../../Assets/images/Customers.png"

const Testimonials = () => {
  return (
    <div className='testimonial-container'>
        <h5>What's our customer saying</h5>
        <h3>Our Customer Feedback</h3>
        <div className='testimonial-customers'>
            <img src={CustomersImage} alt="Customer's Images" />
        </div>
    </div>
  )
}

export default Testimonials