import React from "react";
import AnimatedSection from "./AnimatedSection";
import lpu from "../assets/lpu.webp";
import jnv from "../assets/Jawahar_Navodaya_Vidyalaya_logo.png";
import du from "../assets/du.jpg";

const Education = () => {
  return (
    <div
      name="education"
      className="relative w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white py-16 md:py-20"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.06),transparent_50%)] pointer-events-none" />

      <div className="max-w-screen-xl px-4 sm:px-6 lg:px-8 mx-auto flex flex-col justify-center w-full h-full">
        <AnimatedSection>
          <div className="pb-8 md:pb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold inline-block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent pb-2">
              Education
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-2 mx-auto" />
            <p className="mt-4 text-base sm:text-lg text-gray-400">My Academic qualifications and coursework</p>
          </div>

          <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Entry 1 */}
            <div className="relative p-5 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-white/5 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white p-1 overflow-hidden flex items-center justify-center">
                    <img src={lpu} alt="LPU Logo" className="w-full h-full object-contain"/>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Master of Computer Applications (MCA)</h3>
                  <div className="text-sm text-gray-300 font-medium">Lovely Professional University</div>
                </div>
              </div>
              <div className="text-sm text-gray-400 mt-2">2025 — Present</div>
              <ul className="mt-3 text-sm text-gray-300 space-y-2 list-disc list-inside">
                <li>Course Work: Software Engineering, Databases, Computer Networks.</li>
                <li>Capstone: Working on  Full-stack e‑commerce application (MongoDB, Express, React, Node.js).</li>
                <li>Relevant skills: React, Nodejs, Express, MongoDB, C++, Linux, Cisco Packet Tracer.</li>
              </ul>
            </div>

            {/* Entry 2 */}
            <div className="relative p-5 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-white/5 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white p-1 overflow-hidden flex items-center justify-center">
                  <img src={du} alt="DU Logo" className="w-full h-full object-contain"/>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">B.Sc. (Hons) Computer Science</h3>
                  <div className="text-sm text-gray-300 font-medium">University of Delhi</div>
                </div>
              </div>
              <div className="text-sm text-gray-400 mt-2">2022 — 2025</div>
              <ul className="mt-3 text-sm text-gray-300 space-y-2 list-disc list-inside">
                <li>Course Work: Data Structures,Algorithms, Operating Systems, Machine Learning,Artificial Intelligence.</li>
                <li>Undergraduate project: DTC Clone webapp using HTML, CSS and Javascript.</li>
                <li>Participated in departmental workshops along with Sport(Basketball).</li>
              </ul>
            </div>

            {/* Entry 3 */}
            <div className="relative p-5 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-white/5 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white p-1 overflow-hidden flex items-center justify-center">
                  <img src={jnv} alt="JNV Logo" className="w-full h-full object-contain"/>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Intermediate and Matriculation</h3>
                  <div className="text-sm text-gray-300 font-medium">Jawahar Navodaya Vidyalaya</div>
                </div>
              </div>
              <div className="text-sm text-gray-400 mt-2">2018 — 2022</div>
              <ul className="mt-3 text-sm text-gray-300 space-y-2 list-disc list-inside">
                <li>Completed schooling with emphasis on Science and Mathematics along with Computer Science.</li>
                <li>Active in school-level sports clubs and science fairs.</li>
                <li>Built foundational skills in Python, problem solving and laboratory practices.</li>
              </ul>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Education;
