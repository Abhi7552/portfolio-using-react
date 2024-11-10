import React from "react";
import stopwatch from "../assets/portfolio/stopwatch.png";
import todolist from "../assets/portfolio/dtc.png";
import dtcClone from "../assets/portfolio/todo.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: stopwatch,
      codeLink: "https://github.com/Abhi7552/Stopwatch",
      liveLink: "https://abhi7552.github.io/Stopwatch/",
    },
    {
      id: 2,
      src: todolist,
      codeLink: "https://github.com/Abhi7552/To_Do_List",
      liveLink: "https://abhi7552.github.io/To_Do_List/",
    },
    {
      id: 3,
      src: dtcClone,
      codeLink: "https://github.com/Abhi7552/dtc-bus-pass",
      liveLink: "https://abhi7552.github.io/Stopwatch/",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-16">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work on technologies here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, liveLink, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                height={350}
                width={350}
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </a>
                <a
                  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
