import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Landing from '../Landing';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <Landing />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;