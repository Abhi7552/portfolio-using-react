import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
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
          As a teaching assistant, I’ve had the privilege of guiding fellow students through their web development journey. For 3 months, I’ve facilitated code debugging, answered questions, and shared insights on the same tech stack I’ve grown to love. It’s incredibly rewarding to witness their satisfaction moments and see their projects come to life.
        </p>
      </div>
    </div>
  );
};

export default About;