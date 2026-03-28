import React from 'react'
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Slider from '../components/Slider';
import InfiniteScroll from '../animaton/InfiniteScroll';
import MasterCard from '../components/MasterCard';
import Resources from '../components/Resources';

const Home = () => {
  return (
   <div>
      <Hero/>
      <Intro/>
      <InfiniteScroll/>
      <Slider/>
      <Resources/>
   </div>
  )
}

export default Home
