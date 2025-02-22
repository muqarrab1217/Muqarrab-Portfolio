import { Link } from 'react-router-dom';
import React from "react";

const experiences = [
  {
    title: "Lab Demonstrator",
    company: "National University of Computer and Emerging Sciences",
    location: "Islamabad, Pakistan",
    duration: "Aug'24 - Present · 6 mos",
    type: "Contract · On-site",
    skills: ["Databases", "Database Design", "SQL", "MySQL", "MongoDB"],
  },
  {
    title: "Lab Demonstrator",
    company: "National University of Computer and Emerging Sciences",
    location: "Islamabad, Pakistan",
    duration: "Aug'24 - Present · 6 mos",
    type: "Contract · On-site",
    skills: ["COAL", "Assembly Language", "DOSBOX"],
  },
  {
    title: "Nascon Coverage Head",
    company: "NaSCon ' 25",
    location: "Islamabad, Pakistan",
    duration: "Mar'25 · 1 mo",
    type: "Apprenticeship · On-site",
    skills: ["Event Planning", "Photography", "Team Leadership"],
  },
  {
    title: "Media Head",
    company: "FAST Computing Society",
    location: "Islamabad, Pakistan",
    duration: "Sep'24 - Present · 6 mos",
    type: "Contract · Hybrid",
    skills: ["Management", "Social Media", "Media Coverage"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience">
      <div className="pt-20 pb-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mt-2">Experience</h2>
          <p className="text-gray-600 mt-4">
            From Challenges to Triumphs – My Professional Journey Unfolded
          </p>
        </div>

        <div className="mt-12 max-w-5xl mx-auto px-12 relative">
          {/* Middle Line: Only visible on large screens */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-200 h-full"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`flex md:flex-row flex-col items-center w-full md:justify-between ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Dots (Only on large screens) */}
              
              <div className="w-2/5"></div>
              <div className="hidden md:flex w-1/5 flex justify-center relative">
                <div className="w-5 h-5 bg-blue-600 border-2 border-blue-500
                 rounded-full absolute top-1/2 transform -translate-y-1/2"></div>
              </div>

              {/* Experience Box */}
              <div className="w-full md:w-2/5 bg-zinc-50/10 p-6 shadow-lg rounded-lg mt-6 md:mt-0">
                <h3 className="text-lg font-semibold">{exp.title}</h3>
                <p className="text-gray-500 text-sm">
                  {exp.company} | {exp.location}
                </p>

                {/* Skills */}
                <div className="mt-2 flex flex-wrap gap-2">
                  {exp.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-gray-600 text-white text-sm font-semibold px-3 py-1 rounded-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Duration */}
                <span className="inline-block bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-lg mt-2">
                  {exp.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
