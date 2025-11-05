import React from "react";
import AnimatedSection from "./AnimatedSection";

const Contact = () => {
  return (
    <div
      name="contact"
      className="relative w-full min-h-screen bg-gradient-to-b from-black to-gray-800 text-white py-16 md:py-20"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.08),transparent_50%)] pointer-events-none" />

      <div className="max-w-screen-xl px-4 sm:px-6 lg:px-8 mx-auto flex flex-col justify-center w-full h-full">
        <AnimatedSection>
          <div className="pb-8 md:pb-12 text-center">
            <h2 className="text-4xl font-bold inline-block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent pb-2">
              Contact
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-2 mx-auto" />
            <p className="mt-4 text-base sm:text-lg text-gray-400">Submit the form below to get in touch with me</p>
          </div>

        <div className="flex justify-center items-center mt-8 sm:mt-10">
          <form
            action="https://getform.io/f/bjjjmprb"
            method="POST"
            className="flex flex-col w-full max-w-2xl"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-3 bg-gray-900/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-colors"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-3 bg-gray-900/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-colors"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="8"
              className="p-3 bg-gray-900/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-colors resize-y"
            ></textarea>

            <button className="text-white bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-3 mt-8 rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 font-medium">
              Let's talk
            </button>
          </form>
        </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Contact;