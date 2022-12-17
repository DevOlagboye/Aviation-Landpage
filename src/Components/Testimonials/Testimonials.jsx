import React from 'react'
import CustomersImage from "../../Assets/images/Customers.png"
import {Swiper, SwiperSlide} from "swiper/react"
import {Rate} from "antd"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "./Testimonials.css"
import { TestimonialsData } from './data'

import {Autoplay, Pagination, Navigation} from "swiper"

const Testimonials = () => {
  return (
    <div className='testimonial-container'>
        <h5 className='testimonial-first-text'>What's our customer saying</h5>
        <h3>Our Customer Feedback</h3>
        <div className='testimonial-customers'>
            <img src={CustomersImage} alt="Customer's Images"  className='testimonial-main'/>
            <Swiper spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            pagination = {{
                clickable: true,
            }}
            navigation={true}
            modules= {[Autoplay, Pagination, Navigation]}
            className="mySwiper">
                {
                    TestimonialsData.map(Testimonial => (
                        <SwiperSlide key={Testimonial.name}>
                    <div className='customer-details'>
                    <div className='customer-profile'>
                        <img src={Testimonial.CustomerProfile} alt="" />
                    </div>
                    <div className='customer-name-rating'>
                        <h5 className='customer-name'>{Testimonial.name}</h5>
                        <Rate defaultValue={Testimonial.rating} className="rating"/>
                    </div>
                    </div>
                    <div className='testimonial-details'>
                        <h5 className='testimonial-details-text'>{Testimonial.testimonials}</h5>
                    </div>
                    
                </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </div>
  )
}

export default Testimonials