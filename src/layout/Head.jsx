import React from 'react'
import Container from '../components/Container';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import { Plus,ChevronRight , ChevronLeft  } from 'lucide-react';


const Head = () => {
  return (
    <div className="w-full py-10">
      <Container>
        <header className="flex  flex-wrap  gap-3 items-center md:justify-between  justify-center">
         
         <div className="flex items-center">
         <ChevronLeft className="font-bold text-secondary" size={30}/>
         <h1 className="text-2xl text-dark-blue font-bold" >Froad</h1>
         <ChevronRight className="font-bold text-secondary" size={30}/>
         </div>
        
        <Navbar/>
       <a href="/task"> <Button className="bg-dark-blue text-white flex gap-4 items-center justify-center">
         Add Task <span><Plus size={24}/></span>
        </Button></a>
   
        </header>
      </Container>
    </div>
  )
}

export default Head
