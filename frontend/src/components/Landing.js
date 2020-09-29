import React from 'react';
import '../App.css';
import { Button } from './Button';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import './Landing.css';

const CustomToast = () => {
  return (
    <div className='toast-alert'>
      <h1 className='toast-alert-header'>Contact</h1>
      <div className='contact-phone-number'>
        Phone Number
      </div>
      <div className='contact-email'>
        Email
      </div>
    </div>
  )
}

toast.configure();
function Landing() {

  const contact = () => {
    toast(<CustomToast/>, {position: toast.POSITION.TOP_CENTER})
  }
  
  return (
    <div className='landing-container'>
      <video src='' autoPlay loop muted />
      <h1>RICHMOND HEALTH CLINIC</h1>
      <p>What are you waiting for?</p>
      <div className='landing-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          path='/services'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={contact}
        >
          GET IN CONTACT
        </Button>
      </div>
    </div>
  );
}

export default Landing;