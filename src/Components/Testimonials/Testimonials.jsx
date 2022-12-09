import React from 'react'
import CustomersImage from "../../Assets/images/Customers.png"
import CustomerProfile from "../../Assets/images/Customer-profile.png"
import {Swiper, SwiperSlide} from "swiper/react"
import {Rate} from "antd"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "./Testimonials.css"

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
                    <div className='customer-details'>
                    <div className='customer-profile'>
                        <img src={CustomerProfile} alt="" />
                    </div>
                    <div className='customer-name-rating'>
                        <h5>Jaylon Vaccaro</h5>
                        <Rate defaultValue={5}/>
                    </div>
                    </div>
                    <div className='testimonial-details'>
                        <h5>There are many variations of passages of Lorem <br/>Ipsum available, but the majority have suffered <br/>alteration in some form, by injected humour, or <br/>randomised words which don</h5>
                    </div>
                    
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
            </Swiper>
        </div>
    </div>
  )
}

export default Testimonials