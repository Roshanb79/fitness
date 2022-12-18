import React from 'react'

import "./style/footer.scss"
import { Link } from 'react-router-dom';

import float_img from "../assets/float.webp";

import { BsYoutube, BsInstagram, BsPinterest, BsFacebook } from 'react-icons/bs';
import {AiFillTwitterSquare} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-contact'>
            <div className='footer-contact-label'>
                <h2>Free Workouts & Advice</h2>
                <p>We send you the latest workouts, videos, expert guides and deals.</p>
            </div>
            <form action='' method='post'>
                <input type="email" name="email" placeholder='Enter Your Email' id="email" />
                <input type="submit" value={"Subscribe"} />
            </form> 
            
        </div>
        <div className='footer'>
            <div className='footer-inner-container'>
                <div className='customer-serive'>
                    <h4>Customer Service</h4>
                    <Link>Help Center</Link>
                    <Link>Track Your Order</Link>
                    <Link>Account Login</Link>
                    <Link>Return & Exchange</Link>
                    <Link>Contact Us</Link>
                </div>
                <div className='follow'>
                    <h4>Follow</h4>
                    <div className='follow-icons'>
                        <Link><BsYoutube /></Link>
                        <Link><BsInstagram /></Link>
                        <Link><BsPinterest /></Link>
                        <Link><BsFacebook /></Link>
                        <Link><AiFillTwitterSquare /></Link>
                    </div>
                </div>
                <div className='about'>
                    <h4>About</h4>
                    <Link>About Us</Link>
                    <Link>Rewards Program</Link>
                    <Link>Careers</Link>
                </div>
                <div className='workWithUs'>
                    <h4>Work with us</h4>
                    <Link>Contribute to M&S</Link>
                    <Link>Affiliate Program</Link>
                </div>                
            </div>
        </div>
        <div className='address'>
            <p>© 2006-2022, Muscle & Strength, LLC. 1180 First Street South Ext, Columbia, SC, 29209. Phone: 1-800-537-9910<br />
Terms of Use - Privacy Policy - Cookie Policy - Accessibility Statement</p>
        </div>
        <div className='footer-float-img'>
            <img src={float_img} alt="" />
        </div>
    </div>
  )
}

export default Footer