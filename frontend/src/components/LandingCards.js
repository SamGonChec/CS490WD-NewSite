import React from 'react';
import './LandingCards.css';
import CardItem from './CardItem';
import { toast } from 'react-toastify';
import { FaPhoneSquare, FaEnvelope } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css'
import './Landing.css';

const CustomToast = () => {
  return (
    <div className='toast-alert'>
      <h1 className='toast-alert-header'>Contact Us</h1>
      <br/>
      <div className='contact-phone-number'>
        <FaPhoneSquare/>
        {' '}(816) 470-2131
      </div>
      <br/>
      <div className='contact-email'>
      <FaEnvelope/>
        {' '}RHC@gmail.com
      </div>
      <br/>
    </div>
  )
}

toast.configure();
function LandingCards() {

  const contact = () => {
    toast(<CustomToast/>, {
      position: toast.POSITION.TOP_CENTER, 
      autoClose: 8000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: false,
      progress: undefined
    })
  }

  return (
    <div className='cards'>
      <h1>How can we help you today?</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-1.jpg'
              text='Hear our story'
              label='About'
              path='/about'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Find out what services we offer'
              label='Services'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Meet our physicians'
              label='Doctors'
              path='/doctors'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Learn how we are dealing with Covid-19'
              label='Covid'
              path='/covid'
            />
            <CardItem
              src='images/img-0.jpg'
              text='Contact us'
              label='Contact'
              onClick={contact}
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LandingCards;