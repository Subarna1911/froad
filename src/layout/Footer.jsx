import React from 'react'
import Container from '../components/Container'


export default function Footer() {
  const date = new Date();

  return (
    <footer className="w-full bg-dark-bg text-white rounded-t-4xl">
      <Container>
        <div className="py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold tracking-wide">Women in Tech</h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Empowering women to learn, grow, and thrive in the world of technology.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-400">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white text-gray-400 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white text-gray-400 transition-colors">Resources</a></li>
              <li><a href="#" className="hover:text-white text-gray-400 transition-colors">Tips for Freshers</a></li>
              <li><a href="#" className="hover:text-white text-gray-400 transition-colors">About</a></li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-400">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"></a>
            </div>
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