'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Home, Phone, Calendar, CreditCard } from 'lucide-react';

const Accommodation = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const contactInfo = [
    {
      name: "Sharanya",
      phone: "+919686224079"
    },
    {
      name: "Gabriel", 
      phone: "+918850109395"
    }
  ];

  return (
    <section 
      className="min-h-screen px-4 md:px-8 lg:px-10 py-16"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-300 to-[#D4ff00] bg-clip-text text-transparent font-orbitron"
          >
            Accommodation
          </motion.h2>
          
          {/* <motion.div 
            variants={itemVariants}
            className="flex justify-center mb-8"
          >
            <Home className="w-16 h-16 text-[#D4ff00]" />
          </motion.div> */}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Accommodation Details */}
          <motion.div 
            variants={itemVariants}
            className="bg-gray-950/50 border border-white/10 rounded-xl p-8 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Home className="w-6 h-6 text-[#D4ff00]" />
              Accommodation Details
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CreditCard className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Pricing</h4>
                  <p className="text-gray-300">
                    Accommodation is available at <span className="text-[#D4ff00] font-bold">₹300</span> for both days (25th & 26th).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Calendar className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Allotment</h4>
                  <p className="text-gray-300">
                    Allotment will be on a <span className="text-[#D4ff00] font-semibold">first-come, first-served basis</span>.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CreditCard className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Payment</h4>
                  <p className="text-gray-300">
                    Payment can be made <span className="text-[#D4ff00] font-semibold">upon arrival at the college</span>.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            variants={itemVariants}
            className="bg-gray-950/50 border border-white/10 rounded-xl p-8 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Phone className="w-6 h-6 text-[#D4ff00]" />
              For More Details, Contact:
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-lg p-6 hover:border-[#D4ff00]/30 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">{contact.name}</h4>
                      <a 
                        href={`tel:${contact.phone}`}
                        className="text-[#D4ff00] font-mono text-lg hover:text-cyan-300 transition-colors duration-200 flex items-center gap-2"
                      >
                        <Phone className="w-4 h-4" />
                        {contact.phone}
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              variants={itemVariants}
              className="mt-8 p-4 bg-gradient-to-r from-cyan-400/10 to-[#D4ff00]/10 border border-cyan-400/20 rounded-lg"
            >
              <p className="text-cyan-300 text-sm text-center">
                💡 <strong>Tip:</strong> Book early to secure your accommodation as slots are limited!
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Accommodation;