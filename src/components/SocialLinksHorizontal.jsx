import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinksHorizontal = () => {
  const links = [
    {
      id: 1,
      icon: <FaLinkedin size={24} />,
      href: "https://linkedin.com/in/abhi7552",
      color: "hover:text-blue-500 hover:bg-blue-500/10",
      hoverScale: 1.15,
      label: "LinkedIn"
    },
    {
      id: 2,
      icon: <FaGithub size={24} />,
      href: "https://github.com/Abhi7552",
      color: "hover:text-white hover:bg-white/10",
      hoverScale: 1.15,
      label: "GitHub"
    },
    {
      id: 3,
      icon: <FaTwitter size={24} />,
      href: "https://x.com/Abhi_7552",
      color: "hover:text-blue-400 hover:bg-blue-400/10",
      hoverScale: 1.15,
      label: "Twitter"
    },
    {
      id: 4,
      icon: <BsFillPersonLinesFill size={24} />,
      href: "/Resume_3.pdf",
      color: "hover:text-emerald-400 hover:bg-emerald-400/10",
      hoverScale: 1.15,
      label: "Resume",
      download: true
    },
  ];

  return (
    <div className="lg:hidden w-full bg-gradient-to-t from-black to-gray-900 py-6 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-screen-xl mx-auto"
      >
        <div className="flex items-center justify-center space-x-8">
          {links.map(({ id, icon, href, color, label, download }) => (
            <motion.a
              key={id}
              whileHover={{ 
                scale: 1.15,
                rotate: [0, -10, 10, -5, 5, 0],
                transition: {
                  rotate: {
                    duration: 0.5,
                    ease: "easeInOut"
                  }
                }
              }}
              whileTap={{ scale: 0.95 }}
              href={href}
              download={download}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className={`text-gray-400 p-3 rounded-lg transition-all duration-300 ${color}`}
            >
              {icon}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SocialLinksHorizontal;