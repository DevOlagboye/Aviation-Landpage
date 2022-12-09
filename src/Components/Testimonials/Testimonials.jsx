import React from 'react'
import CustomersImage from "../../Assets/images/Customers.png"
import "./Testimonials.css"
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import {Autoplay, Pagination, Navigation} from "swiper"

const Testimonials = () => {
  return (
    <div className='testimonial-container'>
        <h5>What's our customer saying</h5>
        <h3>Our Customer Feedback</h3>
        <div className='testimonial-customers'>
            <img src={CustomersImage} alt="Customer's Images" />
            <Swiper spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination = {{
                clickable: true,
            }}
            navigation={true}
            modules= {[Autoplay, Pagination, Navigation]}
            className="mySwiper">
                <SwiperSlide>
        
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
            </Swiper>
        </div>
    </div>
  )
}

export default Testimonials