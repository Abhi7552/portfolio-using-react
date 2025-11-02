import React from "react";
import HeroImage from "../assets/mypic.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Home = () => {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.7, 
        ease: [0.22, 1, 0.36, 1]
      }
    },
  };

  const imgVariant = {
    hidden: { opacity: 0, x: 30, scale: 0.98 },
    show: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1]
      }
    },
  };

  return (
    <div
      name="home"
      className="relative h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 overflow-hidden pt-24 md:pt-28"
    >
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1800px] opacity-20 bg-[radial-gradient(circle_at_top_right,rgba(67,56,202,0.12),transparent_50%),radial-gradient(circle_at_left,rgba(59,130,246,0.12),transparent_50%)]" />

      <div className="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center justify-center h-full px-6 lg:px-8 py-8 md:space-x-12">
        <motion.div className="flex flex-col mt-10 md:mt-16 justify-center h-full text-center md:text-left max-w-3xl"
          variants={container} initial="hidden" animate="show">
          <motion.h2 variants={fadeUp} className="text-4xl mt-5 sm:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-sm">
            I'm an aspiring Full Stack Developer
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-400 py-6 text-lg leading-relaxed"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            Hello, I'm Abhishek Kumar.
            I am currently pursuing a Master of Computer Applications (MCA) at Lovely Professional University, Punjab. Prior to this, I completed my undergraduate degree—B.Sc. (Hons) in Computer Science—from Delhi University.
            I have a strong passion for building dynamic and scalable web applications. My technical toolkit includes React, Tailwind CSS, MongoDB, Express.js, and JavaScript, which I use to craft intuitive user experiences and robust backend systems.
          </motion.p>

          <motion.div variants={fadeUp} className="flex justify-center md:justify-start">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          variants={imgVariant} 
          initial="hidden" 
          animate="show" 
          className="flex justify-center items-center w-full mb-8 md:mb-0"
        >
          <motion.img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl shadow-lg w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover object-top mx-auto border-4 border-blue-500/20 bg-black/20"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
