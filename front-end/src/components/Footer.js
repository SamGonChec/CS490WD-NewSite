import React from 'react'
import {Button} from './Button'
import '../styles/Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
        <div class='footer-links'>
            <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h3>Social Media</h3>
            <a href='https://www.facebook.com/RichmondFamilyClinic'>Facebook</a>
            <Button buttonStyle='btn--outline'>Click Me</Button>
          </div>
        </div>
        </div>
        </div>
    )
}

export default Footer
