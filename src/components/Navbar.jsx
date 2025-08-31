'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePageTransition } from '@/hooks/usePageTransition'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Navbar() {
  const { startPageTransition } = usePageTransition();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigation = (href) => {
    startPageTransition(() => {
      router.push(href);
    });
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50  backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Gateways Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/gateways-logo.png"
                alt="Gateways Logo"
                width={40}
                height={40}
                className="mr-2"
              />
              <span className="text-white font-orbitron font-bold text-base sm:text-2xl">
                GATEWAYS
              </span>
            </Link>
          </div>

          {/* Center - Navigation Links */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-20 font-content text-xl">
              <button
                onClick={() => handleNavigation('/events')}
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium cursor-pointer"
              >
                Events
              </button>
              <button
                onClick={() => handleNavigation('/about')}
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium cursor-pointer"
              >
                About
              </button>
              <a href="https://heyzine.com/flip-book/746bdd4368.html" target='_blank'>
              <button
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium cursor-pointer"
              >
                Brochure
              </button>
              </a>
            </div>
          </div>

          {/* Right side - Christ University Logo */}
          <div className="flex items-center">
            <Link href="https://christuniversity.in" target="_blank" className="flex items-center">
              <Image
                src="/cu-old.webp"
                alt="Christ University Logo"
                width={150}
                height={100}
                className="mr-2 w-30 h-auto sm:w-28 md:w-32 lg:w-36 xl:w-[150px]"
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
              aria-label="Open menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu (hidden by default) */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 border-b border-gray-800 backdrop-blur-sm">
            <button
              onClick={() => handleNavigation('/events')}
              className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer w-full text-center"
            >
              Events
            </button>
            <button
              onClick={() => handleNavigation('/about')}
              className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer w-full text-center"
            >
              About
            </button>
            <a href="https://heyzine.com/flip-book/746bdd4368.html" target='_blank'>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer w-full text-center"
            >
              Brochure
            </button>
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
