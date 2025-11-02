import React from 'react';
import { motion } from 'framer-motion';

// Reusable animated section wrapper with consistent theme-wide animation settings
export default function AnimatedSection({ 
  children, 
  className = '', 
  style = {}, 
  delay = 0,
  duration = 0.7,
  ...props 
}) {
  const variants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.98
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1] // Custom easing curve for smooth acceleration/deceleration
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      className={`transition-shadow duration-300 ${className}`}
      style={style}
      {...props}
    >
      {children}
    </motion.div>
  );
}
