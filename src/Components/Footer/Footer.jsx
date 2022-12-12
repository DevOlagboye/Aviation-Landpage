import React from 'react'
import { FaTwitter, FaFacebookF,FaLinkedinIn } from "react-icons/fa";
import "./Footer.css"
import logo from "../../Assets/images/logo.png"

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-content-details'>
            <div className='footer-content'>
                <img src={logo} alt="FT Planet Logo" />
                <p>There are many variations <br/> of passages of Lorem Ipsum available, <br/> but the majority have suffered <br/> alteration in some form</p>
                <div className='footer-social-icons'>
                    <div className='footer-circle'>
                        <FaFacebookF/>
                    </div>
                    <div className='footer-circle'>
                        <FaLinkedinIn/>
                    </div>
                    <div className='footer-circle'>
                        <FaTwitter/>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer