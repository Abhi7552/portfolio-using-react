import React from "react";
import AnimatedSection from "./AnimatedSection";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-auto bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <AnimatedSection>
          <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

  <p className="text-xl mt-20">
          Over the past few years, I’ve immersed myself in various tech stacks, honing my skills and gaining practical experience.In first year of college journey, I came to know about a coding platform named coding ninjas and took MERN full stack web development course.
        </p>

        <br />

        <p className="text-xl">
          More than a year as a teaching assistant, I’ve had the privilege of guiding fellow students through their web development journey. I’ve facilitated code debugging, answered questions, and shared insights on the same tech stack I’ve grown to love. It’s incredibly rewarding to witness their satisfaction moments and see their projects come to life.
        </p>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default About;