import React from 'react';
import '../styles/App.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/HomePage.css';
import ReviewCard from '../components/ReviewCard';

function Home() {
  return (
    <>
      <Navbar/>
      <div class="wrapper">
        <div class="background">
        <img class="bg-img" src='/img/smiling-female-doctor-listening-little-girl.jpg' alt='examination'></img>

        </div>
        <div class="background-text">
        <h1 className='photo_text'>A clinic for your needs</h1>
      </div>
      </div>
      <br></br>
      <hr></hr>
      <div className='patients'>
        <h2 className='title'>Welcome to Richmond Family Clinic</h2>
        <h2 className='sub_title'>We provide services for both new and existing patients</h2>
        <img src='/img/medical.svg' alt='medical'></img>
        <img src='/img/examination.svg' alt='examination'></img>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <a href='/services'>
      <div className='learn_button'> 
        <h3>Click here to learn more</h3>
      </div>
      </a>
      <br></br>
      <br></br>
      <br></br>
      <hr></hr>
      <br></br>
      <div>
        <h2 className='sub_title'>Read Testimonials from our very own patients</h2>
      </div>
      <div>
        <ReviewCard 
        title= 'Clay McGillevry'
        body='The BEST Medical Team in TOWN ! Thanks Dr. Jamie &amp;
        Nurse Kynetta and all of the Front Office Staff !!!
        Captain Clay '
        ></ReviewCard>

        <ReviewCard 
        title= 'Amanda Lucille Keathley'
        body='I love my Dr and all the staff. I drive 100 miles to be able to keep
        my Dr. Dr Honeycutt is very understanding and supportive. She&#39;s
        very thorough and makes sure your ok before leaving.'
        ></ReviewCard>
        
        <ReviewCard 
        title= 'Scott Eugene Milligan'
        body='Jamie Honeycutt is very good Doctor I recommend her to
        anybody she is down to earth.'
        ></ReviewCard>
      </div>
      <br></br>
      <br></br>
      <a href='/about'>
      <div className='learn_button'> 
        <h3>Click here to read more</h3>
      </div>
      </a>
      <br></br>
      <br></br>
      <br></br>
      <br></br>


      {/* <div>Footer</div> */}
      <Footer />
    </>
  );
}

export default Home;

