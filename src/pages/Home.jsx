import React from 'react'
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Slider from '../components/Slider';
import InfiniteScroll from '../animaton/InfiniteScroll';
import MasterCard from '../components/MasterCard';
import Resources from '../components/Resources';
import Lace from '../components/Lace';
import Freshers from '../components/Freshers';

const Home = () => {
  return (
   <div>
      <Hero/>
      <Intro/>
      <InfiniteScroll/>
      <Slider/>
        <Lace/>
      <Resources/>
      <Freshers/>
      <MasterCard/>

   </div>
  )
}

export default Home
