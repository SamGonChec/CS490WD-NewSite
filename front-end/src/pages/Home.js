import React from 'react';
import '../styles/App.css';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <>
      <Navbar/>
      {/* content */}
      <p>Content</p>
      {/* <Footer /> */}
      <div>Footer</div>
    </>
  );
}

export default Home;