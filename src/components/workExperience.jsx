import React from "react";
import { motion } from "framer-motion";

// /C:/Users/hp/Desktop/portfolio/src/components/workExperience.jsx

const experiences = [
    {
        title: "Teaching Assistant - Full Stack Web Development",
        company: "Coding Ninjas",
        period: "Jan 2024 — Feb 2025",
        bullets: [
            "Assisted over 200 students in mastering MERN stack concepts and practical applications",
            "Conducted online personal doubt-solving sessions and code reviews",
        ],
    }
];

export default function WorkExperience() {
    const cardVariant = {
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
        <section name="experience" className="relative min-h-screen py-16 md:py-20 px-4 sm:px-6 lg:px-8 flex flex-col gap-8 items-center bg-gradient-to-b from-gray-800 to-black text-white overflow-hidden">
            
            {/* Background accent */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(67,56,202,0.08),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.08),transparent_50%)] pointer-events-none" />

            <div className="z-20 text-center max-w-4xl">
                <h2 className="text-4xl font-bold inline-block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent pb-2">
                    Work Experience
                </h2>
                <div className="h-1 w-32 mx-auto bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-2" />
                <p className="mt-4 text-base sm:text-lg text-gray-400">
                    A concise history of roles — crafted interactions, thoughtful UI, and measurable results.
                </p>
            </div>

            <div className="z-20 w-full max-w-screen-xl grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {experiences.map((exp, i) => (
                    <motion.article
                        key={i}
                        className="relative p-5 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-white/5 shadow-lg hover:shadow-xl transition-shadow duration-300"
                        variants={cardVariant}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ delay: i * 0.09 }}
                        role="listitem"
                    >
                        {/* accent stripe */}
                        <div className="absolute left-0 top-0 bottom-0 w-1 rounded-r-md bg-gradient-to-b from-violet-500 to-teal-300" />

                        <div className="flex justify-between gap-3 items-start">
                            <div>
                                <h3 className="m-0 text-lg font-semibold">{exp.title}</h3>
                                <div className="text-sm text-slate-300 font-medium">{exp.company}</div>
                            </div>
                            <div className="text-sm text-slate-400 min-w-[90px] text-right">{exp.period}</div>
                        </div>

                        <ul className="mt-3 space-y-2 list-none p-0">
                            {exp.bullets.map((b, idx) => (
                                <li key={idx} className="flex gap-3 items-start text-sm text-slate-200 leading-6">
                                    <span className="mt-1 w-2 h-2 rounded-full bg-gradient-to-b from-violet-500 to-teal-300 shadow-md flex-shrink-0" />
                                    <span>{b}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.article>
                ))}
            </div>
        </section>
    );
}