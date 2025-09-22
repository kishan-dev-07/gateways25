"use client";
import React from "react";
import { motion } from "framer-motion";

export function Schedule() {
  return (
    <section
      className="min-h-screen px-4 md:px-8 lg:px-10"
      // style={{
      //   background:
      //     "linear-gradient(298deg, #1c1829 0%, #1b1828 8.61%, #191724 17.21%, #161520 25.82%, #14131c 34.42%, #121218 43.03%, #111117 51.63%)",
      // }}
      style={{
        background:
          "linear-gradient(252deg, #1c1829 0%, #1b1828 8.61%, #191724 17.21%, #161520 25.82%, #14131c 34.42%, #121218 43.03%, #111117 51.63%)",
      }}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h1 className="text-[3.5rem] w-fit mx-auto text-center font-bold md:text-7xl bg-gradient-to-r from-cyan-300 to-[#D4ff00] bg-clip-text text-transparent pt-3">
            Schedule
          </h1>
        </motion.div>

        {/* Schedule Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2 pb-12"
        >
          {/* Day 1 Schedule */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="bg-gray-950/50 border-white/[0.2] rounded-xl p-6 border hover:shadow-2xl hover:shadow-cyan-500/[0.1] transition-all duration-300"
          >
            <div className="bg-gradient-to-r from-cyan-300 to-[#D4ff00] bg-clip-text text-transparent text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold">
                DAY 01
              </h2>
              <p className="text-lg mt-1">September 25, 2025</p>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between border-b border-white/[0.1] pb-2">
                <span className="text-cyan-300">9:30 AM - 10:30 AM</span>
                <span className="text-white">INAUGURATION</span>
              </div>
              <div className="flex justify-between border-b border-white/[0.1] pb-2">
                <span className="text-cyan-300">11:00 AM - 02:00 PM</span>
                <span className="text-white">TREASURE HUNT</span>
              </div>
              <div className="flex justify-between border-b border-white/[0.1] pb-2">
                <span className="text-cyan-300">11:00 AM - 12:00 PM</span>
                <span className="text-white">UI/UX</span>
              </div>
              <div className="flex justify-between border-b border-white/[0.1] pb-2">
                <span className="text-cyan-300">11:30 AM - 01:30 PM</span>
                <span className="text-white">IT MANAGER</span>
              </div>
              <div className="flex justify-between border-b border-white/[0.1] pb-2">
                <span className="text-cyan-300">11:00 AM - 03:00 PM</span>
                <span className="text-white">GAMING</span>
              </div>
              <div className="flex justify-between border-b border-white/[0.1] pb-2">
                <span className="text-cyan-300">11:00 PM - 05:00 PM</span>
                <span className="text-white">PHOTOGRAPHY</span>
              </div>    
              <div className="flex justify-between border-b border-white/[0.1] pb-2">
                <span className="text-cyan-300">02:00 PM - 03:00 PM</span>
                <span className="text-white">CODING DEBUGGING</span>
              </div>
              <div className="flex justify-between border-b border-white/[0.1] pb-2">
                <span className="text-cyan-300">02:00 PM - 05:00 PM</span>
                <span className="text-white">CAPTURE THE FLAG</span>
              </div>
              <div className="flex justify-between border-b border-white/[0.1] pb-2">
                <span className="text-cyan-300">03:30 PM - 05:00 PM</span>
                <span className="text-white">UI/UX</span>
              </div>
            </div>
          </motion.div>

          {/* Day 2 Schedule */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="bg-gray-950/50 border-white/[0.2] rounded-xl p-6 border hover:shadow-2xl hover:shadow-cyan-500/[0.1] transition-all duration-300"
          >
            <div className="bg-gradient-to-r from-cyan-300 to-[#D4ff00] bg-clip-text text-transparent text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold">
                DAY 02
              </h2>
              <p className="text-lg mt-1">September 26, 2025</p>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between border-b border-white/[0.1] pb-2">
                <span className="text-cyan-300">9:00 AM - 10:00 AM</span>
                <span className="text-white">IT QUIZ</span>
              </div>
              <div className="flex justify-between border-b border-white/[0.1] pb-2">
                <span className="text-cyan-300">9:00 AM - 11:00 AM</span>
                <span className="text-white">GAMING</span>
              </div>
              <div className="flex justify-between border-b border-white/[0.1] pb-2">
                <span className="text-cyan-300">09:00 AM - 11:00 AM</span>
                <span className="text-white">IOT</span>
              </div>
              <div className="flex justify-between border-b border-white/[0.1] pb-2">
                <span className="text-cyan-300">10:30 AM - 12:00 PM</span>
                <span className="text-white">CODING DEBUGGING</span>
              </div>
              <div className="flex justify-between border-b border-white/[0.1] pb-2">
                <span className="text-cyan-300">12:00 PM - 02:00 PM</span>
                <span className="text-white">IT MANAGER</span>
              </div>
              <div className="flex justify-between border-b border-white/[0.1] pb-2">
                <span className="text-cyan-300">12:30 PM - 03:00 PM</span>
                <span className="text-white">SURPRISE EVENT</span>
              </div>
              <div className="flex justify-between">
                <span className="text-cyan-300">4:00 PM - 06:00 PM</span>
                <span className="text-white">VALEDICTORY</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-center max-w-4xl mx-auto px-4 pb-12"
        >
        </motion.div>
      </div>
    </section>
  );
}