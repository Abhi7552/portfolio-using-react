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
        <section name="experience" className="relative min-h-screen p-16 md:p-20 flex flex-col gap-8 items-center bg-[#0f1724] text-[#e6eef8] overflow-hidden">

            {/* decorative floating blobs */}
            <div className="absolute rounded-full filter blur-3xl opacity-90 mix-blend-screen float-slow left-[-120px] top-[-80px] w-[420px] h-[420px] bg-gradient-to-br from-violet-500 to-pink-400" aria-hidden />
            <div className="absolute rounded-full filter blur-3xl opacity-90 mix-blend-screen float-slow right-[-100px] bottom-[-140px] w-[380px] h-[380px] bg-gradient-to-br from-teal-300 to-sky-400" aria-hidden />

            <div className="z-20 text-center max-w-4xl -translate-y-1">
                <h1 className="m-0 text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">Work Experience</h1>
                <p className="mt-2 text-sm text-slate-300">A concise history of roles — crafted interactions, thoughtful UI, and measurable results.</p>
            </div>

            <div className="z-20 w-full max-w-6xl grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {experiences.map((exp, i) => (
                    <motion.article
                        key={i}
                        className="relative p-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/5 shadow-xl"
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