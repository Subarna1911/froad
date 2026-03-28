import React from 'react'
import {motion} from 'motion/react';
import quote from '../assets/quote.jpg';





const MasterCard = () => {
  return (
    <>


    <motion.div
    initial={{ opacity: 0, x: -100 }}
     animate={{ opacity: 1, x: 0 }}
    whileHover={{scale:1.1}}
     transition={{ duration: 1.5, type: "spring", stiffness: 50 }}
    
    className=" px-4 w-full bg-dark-blue md:py-20 py-18 mt-20 cursor-pointer text-white rounded-r-full max-w-4xl flex justify-around items-center gap-2" >

     <h2 className="md:text-4xl text-2xl font-bold tracking-widest text-center col-span-8">Ready To Master <span className="text-yellow md:text-4xl text-2xl font-bold font-heading text-center">FrontEnd ?</span></h2>
     <img src={quote} alt="quote" className="rounded-full w-40 h-40 object-cover" />
   
    </motion.div>
    </>
    
  )
}

export default MasterCard
