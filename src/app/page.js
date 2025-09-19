"use client";

import { useState, useEffect } from "react";
import Hero from "@/components/Hero/Hero";
import ScrollVideo from "@/components/ScrollVideo";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import SliderComponent from "@/components/events/eventSlider";
import { useRef } from "react";
import Events from "@/components/events";
import SponsorsMarquee from "@/components/marquee";
import Footer from "@/components/footer";
import RegistrationProcess from "@/components/registrationProcess";
import Accommodation from "@/components/Accommodation";
import Contact from "@/components/contact";
import { Schedule } from "@/components/schedule/schedule";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setShowContent(true), 500);
    }, 4000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* Loading Screen */}
      {isLoading && (
        <div className="fixed inset-0 z-50">
          <Loader />
        </div>
      )}

      {/* Main Content */}
      <main
        className={`transition-opacity duration-500 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        <Navbar />

        <Hero />

        {/* <ScrollVideo /> */}
        {/* <Hero /> */}
        <Events />
        <Schedule />
        <RegistrationProcess />
        <Accommodation />
        {/* <SponsorsMarquee /> */}
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
