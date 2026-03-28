import React from 'react'
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Slider from '../components/Slider';
import InfiniteScroll from '../animaton/InfiniteScroll';
import MasterCard from '../components/MasterCard';
import Resources from '../components/Resources';
import design from "../assets/design.webp";
import Freshers from '../components/Freshers';


const Home = () => {
  return (
   <div>
      <Hero/>
      <Intro/>
      <InfiniteScroll/>
      <Slider/>
         <div
              className="h-40 bg-repeat-x bg-center bg-contain"
              style={{ backgroundImage: `url(${design})` }}
            />
      <Resources/>
      <Freshers/>
   </div>
  )
}

export default Home
