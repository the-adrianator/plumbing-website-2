'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-md sticky top-[40px] z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="logo">
          <Link href="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">Nela Plumbing & Gas</h1>
          </Link>
        </div>
        
        <nav className="main-nav">
          <button 
            className="md:hidden flex flex-col space-y-1.5"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <span className={`block w-6 h-0.5 bg-primary transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-primary transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-primary transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
          
          <ul className={`
            md:flex md:space-x-6 
            ${isMenuOpen ? 'absolute top-full left-0 right-0 bg-white shadow-md p-4 flex flex-col space-y-4' : 'hidden'}
            md:static md:p-0 md:shadow-none md:space-y-0
          `}>
            <li><Link href="/" className="font-semibold text-dark hover:text-secondary transition-colors">Home</Link></li>
            <li><Link href="/services" className="font-semibold text-dark hover:text-secondary transition-colors">Services</Link></li>
            <li><Link href="/why-choose-us" className="font-semibold text-dark hover:text-secondary transition-colors">Why Choose Us</Link></li>
            <li><Link href="/service-area" className="font-semibold text-dark hover:text-secondary transition-colors">Service Area</Link></li>
            <li><Link href="/about" className="font-semibold text-dark hover:text-secondary transition-colors">About Us</Link></li>
            <li><Link href="/blog" className="font-semibold text-dark hover:text-secondary transition-colors">Blog</Link></li>
            <li><Link href="/contact" className="font-semibold text-dark hover:text-secondary transition-colors">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
