import React from 'react';
import '../App.css';
import Cards from './Cards';
import HeroSection from './HeroSection';
import Fotter from './Fotter';
import Product from './Product';
import Services from './Services';
import SignUp from './SignUp';

function Home() {
  return (
    <>
      <HeroSection />
      <Product />
      <Services />
      <SignUp />
      <Cards />
      <Fotter />
    </>
  );
}

export default Home;