import React from 'react'
import {motion} from 'motion/react';
import quote from '../assets/quote.jpg';
const MasterCard = () => {
  return (
    <motion.div
    initial={{ opacity: 0, x: -100 }}
     animate={{ opacity: 1, x: 0 }}
    whileHover={{scale:1.03}}
     transition={{ duration: 1.5, type: "spring", stiffness: 50 }}
    
    className="px-6 md:px-4 max-w-4xl w-full bg-dark-blue md:py-20 py-5 cursor-pointer text-white rounded-r-none md:rounded-r-full flex flex-col md:flex-row justify-center md:justify-around items-center gap-6 md:gap-2 text-center md:text-left" >

     <h2 className="text-2xl md:text-4xl font-bold tracking-widest col-span-8"> Success Demands Daily Effort</h2>
     <img src={quote} alt="quote" className="rounded-full w-28 h-28 md:w-40 md:h-40 object-cover" />
   
    </motion.div>

    
  )
}

export default MasterCard
