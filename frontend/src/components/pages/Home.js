import React from 'react';
import '../../App.css';
import LandingCards from '../LandingCards';
import Landing from '../Landing';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <Landing />
      <LandingCards />
      <Footer />
    </>
  );
}

export default Home;