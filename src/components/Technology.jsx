import React from "react";
import AnimatedSection from "./AnimatedSection";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png";
import mongodb from "../assets/mongodb.svg";
import ai from "../assets/ai.svg";
import ml from "../assets/ml.svg";

const Technologies = () => {
    const techs = [
        { id: 1, src: html, title: "HTML", style: "shadow-orange-500" },
        { id: 2, src: css, title: "CSS", style: "shadow-blue-500" },
        { id: 3, src: javascript, title: "JavaScript", style: "shadow-yellow-500" },
        { id: 4, src: reactImage, title: "React", style: "shadow-blue-600" },
        { id: 5, src: node, title: "Node", style: "shadow-green-600" },
        { id: 6, src: tailwind, title: "Tailwind", style: "shadow-sky-400" },
        { id: 7, src: mongodb, title: "MongoDB", style: "shadow-green-500" },
        { id: 8, src: github, title: "GitHub", style: "shadow-gray-400" },
        { id: 9, src: ai, title: "Artificial Intelligence", style: "shadow-purple-600" },
        { id: 10, src: ml, title: "Machine Learning", style: "shadow-cyan-600" },
    ];

    return (
        <div
            name="technology"
            className="relative w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white py-16 md:py-20"
        >
            {/* Background accent */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.08),transparent_50%)] pointer-events-none" />

            <div className="max-w-screen-xl px-4 sm:px-6 lg:px-8 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8 md:pb-12 text-center">
                    <h2 className="text-4xl font-bold inline-block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent pb-2">
                        Technologies
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-2 mx-auto" />
                    <p className="mt-4 text-base sm:text-lg text-gray-400">These are the technologies I've worked with</p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 text-center py-8">
                                    {techs.map(({ id, src, title, style }) => (
                                        <AnimatedSection key={id}>
                                            <div className={`bg-gray-900/50 backdrop-blur-sm border border-white/5 p-6 rounded-xl hover:scale-105 duration-300 ${style}`}>
                                                <img src={src} alt={title} className="w-16 md:w-20 mx-auto" />
                                                <p className="mt-4 text-gray-300 font-medium">{title}</p>
                                            </div>
                                        </AnimatedSection>
                                    ))}
                        </div>
            </div>
        </div>
    );
};

export default Technologies;
