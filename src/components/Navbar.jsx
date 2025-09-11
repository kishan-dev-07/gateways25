"use client";

import Image from "next/image";
import Link from "next/link";
import { usePageTransition } from "@/hooks/usePageTransition";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const { startPageTransition } = usePageTransition();
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [shouldHideBanner, setShouldHideBanner] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      const scrollThreshold = viewportHeight * 0.15; // 15% of viewport height

      setShouldHideBanner(scrollPosition > scrollThreshold);
    };

    // Only add scroll listener on home page
    if (pathname === "/") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [pathname]);

  const handleNavigation = (href) => {
    startPageTransition(() => {
      router.push(href);
    });
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMarqueeClick = () => {
    handleNavigation("/events?slide=11");
  };

  function Banner() {
    const marqueeText =
      "🚀 Hackathon starts on 19th September, Click here to register! 🚀";

    return (
      <div
        className="bg-gradient-to-r from-cyan-400 via-[#D4ff00] to-cyan-400 overflow-hidden relative cursor-pointer hover:from-cyan-500 hover:via-[#B8E600] hover:to-cyan-500 transition-all duration-300"
        onClick={handleMarqueeClick}
      >
        <div className="flex">
          {/* First marquee text */}
          <motion.div
            className="flex whitespace-nowrap items-center gap-8 py-2"
            animate={{
              x: ["0%", "-100%"],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <span className="px-8 font-bold text-black font-mono tracking-wide text-sm md:text-base flex items-center gap-2">
              {marqueeText}
            </span>
            <span className="px-8 font-bold text-black font-mono tracking-wide text-sm md:text-base flex items-center gap-2">
              {marqueeText}
            </span>
          </motion.div>

          {/* Second marquee text (duplicate for seamless loop) */}
          <motion.div
            className="flex whitespace-nowrap items-center gap-8 py-2"
            animate={{
              x: ["0%", "-100%"],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <span className="px-8 font-bold text-black font-mono tracking-wide text-sm md:text-base flex items-center gap-2">
              {marqueeText}
            </span>
            <span className="px-8 font-bold text-black font-mono tracking-wide text-sm md:text-base flex items-center gap-2">
              {marqueeText}
            </span>
          </motion.div>
        </div>

        {/* Gradient fade effects */}
        <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-cyan-400 to-transparent pointer-events-none z-10"></div>
        <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-cyan-400 to-transparent pointer-events-none z-10"></div>
      </div>
    );
  }

  return (
    <>
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
                  onClick={() => handleNavigation("/events")}
                  className="text-gray-300 hover:text-white transition-colors duration-200 font-medium cursor-pointer"
                >
                  Events
                </button>
                <button
                  onClick={() => handleNavigation("/about")}
                  className="text-gray-300 hover:text-white transition-colors duration-200 font-medium cursor-pointer"
                >
                  About
                </button>
                <a
                  href="https://heyzine.com/flip-book/746bdd4368.html"
                  target="_blank"
                >
                  <button className="text-gray-300 hover:text-white transition-colors duration-200 font-medium cursor-pointer">
                    Brochure
                  </button>
                </a>
              </div>
            </div>

            {/* Right side - Christ University Logo */}
            <div className="flex items-center">
              <Link
                href="https://christuniversity.in"
                target="_blank"
                className="flex items-center"
              >
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
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
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
                onClick={() => handleNavigation("/events")}
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer w-full text-center"
              >
                Events
              </button>
              <button
                onClick={() => handleNavigation("/about")}
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer w-full text-center"
              >
                About
              </button>
              <a
                href="https://heyzine.com/flip-book/746bdd4368.html"
                target="_blank"
              >
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

      {/* Marquee Banner - Only shown on home page */}
      {pathname === "/" && (
        <motion.div
          className="fixed top-16 left-0 right-0 z-40"
          animate={{
            opacity: shouldHideBanner ? 0 : 1,
            y: shouldHideBanner ? -10 : 0,
            pointerEvents: shouldHideBanner ? "none" : "auto",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Banner />
        </motion.div>
      )}
    </>
  );
}
