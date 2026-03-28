import React, { useState } from 'react'
import Container from '../components/Container';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
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

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a href="/task">
              <Button className="bg-dark-blue text-white flex gap-4 items-center justify-center">
                Add Task <span><Plus size={24} /></span>
              </Button>
            </a>
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
            <a href="/task">
              <Button className="bg-dark-blue text-white flex gap-4 items-center justify-center">
                Add Task <span><Plus size={24} /></span>
              </Button>
            </a>
          </div>
        )}
      </Container>
    </div>
  )
}

export default Head
