import React from 'react';
import '../styles/App.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Navbar/>
      {/* content */}
      <h1>A clinic for your needs</h1>
      <img src="front-end/public/img/RFC Logo.jpg"></img>
      {/* <div>Footer</div> */}
      <Footer />
    </>
  );
}

export default Home;