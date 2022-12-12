import React from 'react'
import { FaTwitter, FaFacebookF,FaLinkedinIn } from "react-icons/fa";
import "./Footer.css"
import logo from "../../Assets/images/logo.png"
import FooterDivider from "../../Assets/images/footer-divider.png"

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-content-details'>
            <div className='footer-content'>
                <img src={logo} alt="FT Planet Logo" className='footer-logo' />
                <p>There are many variations <br/> of passages of Lorem Ipsum available, <br/> but the majority have suffered <br/> alteration in some form</p>
                <div className='footer-social-icons'>
                    <div className='footer-circle'>
                        <FaFacebookF className='icon'/>
                    </div>
                    <div className='footer-circle'>
                        <FaLinkedinIn className='icon'/>
                    </div>
                    <div className='footer-circle'>
                        <FaTwitter className='icon'/>
                    </div>
                </div>
            </div>

            <div className='footer-content'>
                <h4>Address</h4>
                <ul>
                    <li>Integrations</li>
                    <li>Hello</li>
                    <li>Intercom</li>
                    <li>Customer</li>
                </ul>
            </div>
            <div className='footer-content'>
                <h4>About</h4>
                <ul>
                    <li>Our Blog</li>
                    <li>Customers</li>
                    <li>Our Team</li>
                    <li>Careers</li>
                    <li>Integrations</li>
                </ul>
            </div>
            <div className='footer-content'>
                <h4>Support</h4>
                <ul>
                    <li>Test Zoom</li>
                    <li>Account</li>
                    <li>Our Team</li>
                    <li>Support Center</li>
                    <li>Live Training</li>
                    <li>Accessibility</li>
                </ul>
            </div>

        </div>
        <img src={FooterDivider} alt="Footer-Divider"  className='footer-divider'/>
        <p className='footer-copyright'>Copyright ©
FT PLANE {new Date().getFullYear()} All right reserved</p>
    </div>
  )
}

export default Footer