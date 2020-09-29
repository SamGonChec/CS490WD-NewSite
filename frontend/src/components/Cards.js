import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
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
function Cards() {

  const contact = () => {
    toast(<CustomToast/>, {position: toast.POSITION.TOP_CENTER})
  }

  return (
    <div className='cards'>
      <h1>How can we help you today?</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-1.jpg'
              text='Learn about our clinic'
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
              path='/Covid'
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

export default Cards;