import React from "react";
import HeroImage from "../assets/mypic3.jpg";
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
      className="relative min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 overflow-hidden pt-6 md:pt-8"
    >
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1800px] opacity-20 bg-[radial-gradient(circle_at_top_right,rgba(67,56,202,0.12),transparent_50%),radial-gradient(circle_at_left,rgba(59,130,246,0.12),transparent_50%)]" />

      <div className="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <motion.div className="flex flex-col justify-center h-full text-left max-w-3xl"
          variants={container} initial="hidden" animate="show">
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-sm">
            I'm an aspiring Full Stack Developer
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-400 py-6 text-base sm:text-lg leading-relaxed"
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
          className="flex justify-center items-center w-full mb-6 md:mb-0"
        >
          <div className="group relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 flex items-center justify-center">
            {/* gradient ring */}
            <div className="rounded-full p-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500">
              <div className="rounded-full overflow-hidden bg-black/20 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 border-4 border-white/5">
                <motion.img
                  src={HeroImage}
                  srcSet={`${HeroImage} 1x, ${HeroImage} 2x`}
                  sizes="(max-width: 768px) 192px, 320px"
                  loading="lazy"
                  decoding="async"
                  alt="Abhishek Kumar — Full Stack Developer"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover transform transition duration-500 ease-out group-hover:scale-105"
                />
              </div>
            </div>
            {/* subtle floating shadow */}
            <div className="pointer-events-none absolute inset-0 rounded-full shadow-xl opacity-30 blur-sm" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
