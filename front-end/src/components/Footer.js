import React from 'react'
import {Button} from './Button'
import {Link} from 'react-router-dom'
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
      
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <a href='https://www.facebook.com/RichmondFamilyClinic/reviews/?ref=page_internal' target="_blank" >Testimonials</a>
          </div>
        
        
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/contact'>Contact</Link>
          </div>
        
        
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <a href='https://www.facebook.com/RichmondFamilyClinic' target="_blank">Facebook</a>
          </div>
        
        
          <div class='footer-link-items'>
            <h2>Hours 🕒</h2>
            <ul>
            <li>Monday-Friday: 7:30 AM - 5:00 PM</li>
            <li>Saturday: 8:00 AM - 12:00 PM 	</li>
            <li>Sunday: Closed 	</li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Footer;
