import React from 'react'
import Container from  '../components/Container';
import design from '../assets/design.webp';


const Resources = () => {
  return (
    <div className="w-full">
        <div
  className="h-40 bg-repeat-x bg-center bg-contain"
  style={{ backgroundImage: `url(${design})` }}
/>
        <Container>
            <h1 className="md:text-4xl  py-10 md:py-24 text-2xl font-bold text-center tracking-widest">Curated Resources</h1>
        

        </Container>
      
    </div>
  )
}

export default Resources
