import React from "react";
import { motion } from "framer-motion";

const Support = () => {
  console.log(motion.apply);
  return (
    <div className="w-full bg-sky-900 py-12 px-4">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        {/* Section Title - slides from left */}
        <motion.h6
          className="text-white text-sm uppercase tracking-widest font-semibold"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          SUPPORT OUR CAUSE
        </motion.h6>

        {/* Main Heading - slides from right */}
        <motion.h2
          className="text-white text-2xl md:text-3xl font-bold leading-snug"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          Your support helps in breaking stigmas and building futures!
        </motion.h2>

        {/* Donate Button - slides from bottom with zoom-in */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
        >
          <a
            href="https://raphaellalewisfoundation.org/donate/"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md shadow-md transition duration-300"
          >
            Donate Today
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Support;
