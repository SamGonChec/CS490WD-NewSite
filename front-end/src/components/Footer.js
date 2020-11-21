import React from 'react'
import {Button} from './Button'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
      
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/'>Testimonials</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <a href='https://www.facebook.com/RichmondFamilyClinic' target="_blank">Facebook</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;