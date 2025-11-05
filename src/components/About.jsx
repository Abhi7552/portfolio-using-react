import React from "react";
import AnimatedSection from "./AnimatedSection";

const About = () => {
  return (
    <div
      name="about"
      className="relative w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white py-16 md:py-20"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.08),transparent_50%)] pointer-events-none" />
      
      <div className="max-w-screen-xl px-4 sm:px-6 lg:px-8 mx-auto flex flex-col justify-center w-full h-full">
        <AnimatedSection>
          <div className="pb-8 md:pb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold inline-block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent pb-2">
              About
            </h2>
            <div className="h-1 w-20 md:w-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-2 mx-auto" />
          </div>

          <div className="mt-6 md:mt-8 space-y-4 md:space-y-6 text-left max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Over the past few years, I've immersed myself in various tech stacks, honing my skills and gaining practical experience. During my first year of college, I discovered a coding platform called Coding Ninjas and enrolled in their MERN full stack web development course.
            </p>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              With more than a year of experience as a teaching assistant, I've had the privilege of guiding fellow students through their web development journey. I've facilitated code debugging, answered questions, and shared insights on the same tech stack I've grown to love. It's incredibly rewarding to witness their moments of success and see their projects come to life.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default About;