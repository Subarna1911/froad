import React from 'react'
import Container from '../components/Container'
import { Heart } from 'lucide-react';

export default function Footer() {
  const date = new Date();

  return (
    <footer className="w-full bg-dark-bg text-white md:rounded-tr-4xl">
      <Container>
        <div className="md:py-14 py-8 grid grid-cols-1 gap-10">

          {/* Brand */}
          <div className="space-y-3 text-center">
            <h2 className="text-xl font-bold tracking-wide">FrontEnd Journey</h2>
            <p className="text-sm text-gray-400 leading-relaxed flex justify-center  gap-3 items-center">
              Built with <span><Heart size={18} className="text-red-600"/></span>   for aspiring FrontEnd Developer
              
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-5 text-center">
          <p className="text-xs text-gray-500">
            Women in Tech &copy; {date.getFullYear()} — All rights reserved.
          </p>
        </div>

      </Container>
    </footer>
  )
}