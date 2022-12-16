import './App.css';
import React, {useEffect} from 'react';
import HeroPage from './Components/HeroPage/HeroPage';
import Features from "./Components/Features/Features";
import Cta from './Components/Cta/Cta';
import BookFlight from './Components/BookFlight/BookFlight';
import BestTravelers from './Components/BestTravelers/BestTravelers';
import Testimonials from './Components/Testimonials/Testimonials';
import Memories from './Components/Memories/Memories';
import Newsletter from './Components/Newsletter/Newsletter';
import Footer from './Components/Footer/Footer';
import {gsap, Power3} from "gsap"


function App() {

  const fadeIn = (element) => {
    gsap.to(element, {duration: 1,
      opacity: 1,
      x: 0,
      ease: Power3.easeOut,
      stagger: {
        amount: .3
      }
    
    })
  }
  const fadeOut = (element) => {
    gsap.to(element, {duration: 1,
      opacity: 0,
      x: -20,
      ease: Power3.easeOut,
      })
  }
 // We've reached so animate
  useEffect(() => {
    gsap.to(App, {visibility: "visible"})
  })
  return (
    <div className='App' ref={el => {App = el}}>
      <HeroPage/>
      <Features/>
      <Cta/>
      <BookFlight/>
      <BestTravelers/>
      <Testimonials/>
      <Memories/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;
