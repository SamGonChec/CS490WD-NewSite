import React from 'react';
import '../styles/App.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Navbar/>
      {/* content */}
      <p>Content</p>

      {/* <div>Footer</div> */}
      <Footer />
    </>
  );
}

export default Home;