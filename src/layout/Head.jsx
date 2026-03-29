import React, { useState } from 'react'
import Container from '../components/Container';
import Navbar from '../components/Navbar';
import AddTask from '../components/AddTask';

import { Plus, ChevronRight, ChevronLeft, Menu, X } from 'lucide-react';


const Head = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full py-6 md:py-10">
      <Container>
        <header className="flex items-center justify-between gap-3">

          {/* Logo */}
          <div className="flex items-center">
            <ChevronLeft className="font-bold text-secondary" size={30} />
            <h1 className="text-2xl text-dark-blue font-bold">Froad</h1>
            <ChevronRight className="font-bold text-secondary" size={30} />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <Navbar />
          </div>

         

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </header>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 flex flex-col items-center gap-4 pb-4 border-t pt-4">
            <Navbar />
           <AddTask/>
          </div>
        )}
      </Container>
    </div>
  )
}

export default Head
