import React from "react";
import { motion } from "framer-motion";
import guessNumber from "../assets/portfolio/guessNumber.png"
import todolist from "../assets/portfolio/dtc.png";
import dtcClone from "../assets/portfolio/todo.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: guessNumber,
      codeLink: "https://github.com/Abhi7552/GuessTheNumber",
      liveLink: "https://abhiguessthenumber.netlify.app/",
    },
    {
      id: 2,
      src: todolist,
      codeLink: "https://github.com/Abhi7552/dtc-bus-pass",
      liveLink: "https://dtc-clone.netlify.app/",
    },
    {
      id: 3,
      src: dtcClone,
      codeLink: "https://github.com/Abhi7552/To_Do_List",
      liveLink: "https://abhi7552.github.io/To_Do_List/",
    },
  ];

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
  };

  const card = {
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

  return (
    <div
      name="portfolio"
      className="relative bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen py-16 md:py-20"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(67,56,202,0.08),transparent_50%)] pointer-events-none" />
      
      <div className="max-w-screen-xl px-4 sm:px-6 lg:px-8 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 md:pb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-4xl font-bold inline-block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent pb-2">
              Portfolio
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-2 mx-auto" />
            <p className="py-6 text-gray-400 text-lg">Check out some of my work on web technologies here</p>
          </motion.div>
        </div>

        <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8" variants={container} initial="hidden" animate="show">
          {portfolios.map(({ id, src, liveLink, codeLink }) => (
            <motion.div 
              key={id} 
              variants={card} 
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 20px 40px rgba(0,0,0,0.3), 0 15px 20px rgba(0,0,0,0.2)'
              }} 
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl shadow-lg shadow-black/40 border border-white/5 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={src}
                  alt=""
                  height={350}
                  width={350}
                  className="w-full h-48 object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="flex flex-col p-4">
                <div className="flex items-center justify-between mt-2">
                  <motion.a
                    href={liveLink}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-1/2 px-6 py-2 m-2 text-center text-white font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 transition-colors duration-300"
                  >
                    Demo
                  </motion.a>
                  <motion.a
                    href={codeLink}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-1/2 px-6 py-2 m-2 text-center border border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-300"
                  >
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
