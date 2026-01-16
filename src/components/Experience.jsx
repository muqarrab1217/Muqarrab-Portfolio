import { Link } from 'react-router-dom';
import React from "react";

const experiences = [
  {
    title: "AI/ML Engineer Apprentice",
    company: "Finova",
    location: "Remote/Hybrid",
    duration: "June 2025 - Present",
    type: "Apprenticeship",
    skills: ["Machine Learning", "NLP", "TTS/STT", "Gemini API", "Hugging Face"],
    description: [
      "Assisted in training and fine-tuning machine learning models for classification and NLP tasks.",
      "Integrated Text-to-Speech (TTS) and Speech-to-Text (STT) models for voice-enabled applications.",
      "Implemented Gemini File Search API to build document-aware AI assistants.",
      "Applied Hugging Face pre-trained models for text understanding, summarization, and semantic search."
    ]
  },
  {
    title: "Freelance AI/ML Projects (Entry-Level)",
    company: "Self-Employed",
    location: "Remote",
    duration: "Aug 2024 - Present",
    type: "Freelance",
    skills: ["Python", "Computer Vision", "Data Preprocessing", "Exploratory Analysis"],
    description: [
      "Built small-scale AI-driven features such as automated classification and intelligent search.",
      "Developed proof-of-concept solutions using pre-trained models for generation and classification tasks.",
      "Prepared datasets through cleaning, labeling, and validation for ML workflows.",
      "Conducted data preprocessing and exploratory analysis using Python on Google Colab."
    ]
  },
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
    <section id="experience" className="section">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="headline-2 reveal-up mx-auto">Experience</h2>
          <p className="text-zinc-400 mt-4 reveal-up">
            From Challenges to Triumphs – My Professional Journey Unfolded
          </p>
        </div>

        <div className="relative">
          {/* Middle Line: Only visible on large screens */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-zinc-800 h-full"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`flex md:flex-row flex-col items-center w-full md:justify-between reveal-up ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
              >
                {/* Space for the other side */}
                <div className="hidden md:block w-[45%]"></div>

                {/* Timeline Dot */}
                <div className="hidden md:flex w-[10%] justify-center relative z-10">
                  <div className="w-4 h-4 bg-sky-400 border-4 border-zinc-900 rounded-full shadow-[0_0_10px_rgba(56,189,248,0.5)]"></div>
                </div>

                {/* Experience Box */}
                <div className="w-full md:w-[45%] bg-zinc-800/50 p-6 rounded-2xl border border-zinc-700/50 hover:border-sky-400/30 transition-colors shadow-sm">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="title-1 text-sky-400">{exp.title}</h3>
                    <span className="text-xs font-medium px-2 py-1 bg-zinc-700 text-zinc-300 rounded-md">
                      {exp.duration}
                    </span>
                  </div>

                  <p className="text-zinc-400 text-sm mb-4">
                    {exp.company} • {exp.location}
                  </p>

                  {exp.description && (
                    <ul className="list-disc list-outside ml-4 text-zinc-300 text-sm space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-[10px] uppercase tracking-wider font-bold text-zinc-500 bg-zinc-900 px-2 py-1 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
