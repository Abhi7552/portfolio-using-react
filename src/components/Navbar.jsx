

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "technology" },
    { id: 4, link: "portfolio" },
    { id: 5, link: "experience" },
    { id: 6, link: "contact" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center w-full h-20 px-4 md:px-8 bg-black/90 backdrop-blur-sm border-b border-white/5">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-3xl md:text-4xl font-signature text-blue-400 hover:text-blue-300 transition-colors">
            Abhishek
          </h1>
        </motion.div>

        <ul className="hidden md:flex items-center space-x-2">
          {links.map(({ id, link }) => (
            <motion.li
              key={id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: id * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to={link}
                smooth
                duration={500}
                className="px-4 py-2 cursor-pointer capitalize font-medium text-gray-300 hover:text-blue-400 transition-all duration-300 rounded-lg hover:bg-white/5"
              >
                {link}
              </Link>
            </motion.li>
          ))}
        </ul>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onClick={() => setNav(!nav)}
          className="cursor-pointer z-10 md:hidden text-gray-400 hover:text-white transition-colors"
        >
          {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
        </motion.div>

        {nav && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden"
            onClick={() => setNav(false)}
          >
            <motion.ul
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="w-3/4 h-screen bg-gradient-to-b from-gray-900 to-black border-r border-white/5 flex flex-col justify-center items-start p-8 space-y-4"
              onClick={(e) => e.stopPropagation()}
            >
              {links.map(({ id, link }) => (
                <motion.li
                  key={id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: id * 0.1 }}
                  className="w-full"
                >
                  <Link
                    onClick={() => setNav(false)}
                    to={link}
                    smooth
                    duration={500}
                    className="block w-full px-4 py-3 text-lg font-medium capitalize text-gray-300 hover:text-blue-400 transition-all duration-300 rounded-lg hover:bg-white/5"
                  >
                    {link}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default NavBar;