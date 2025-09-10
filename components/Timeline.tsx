"use client";

import { FaGraduationCap, FaBriefcase, FaTrophy, FaRocket,  FaBullseye} from "react-icons/fa";

export default function Timeline() {
  const items = [
    {
      year: "Aug 2021",
      title: "University Journey Start",
      description: "Began Software Engineering at UT Dallas",
      icon: <FaBullseye className="text-cyan-500 w-6 h-6" />,
    },
    {
      year: "Sep 2024",
      title: "HackFin Hackathon Winner",
      description: "Built a fintech web app using React and Node.js, won 3rd place.",
      icon: <FaTrophy className="text-yellow-400 w-6 h-6" />,
    },
    {
      year: "Jan 2025",
      title: "Software Engineering Intern — Secure IVAI",
      description:
        "Developed backend APIs, optimized database design, and improved system performance.",
      icon: <FaBriefcase className="text-green-400 w-6 h-6" />,
    },
    {
      year: "May 2025",
      title: "Graduated — University of Texas at Dallas",
      description: "Bachelor's in Software Engineering",
      icon: <FaGraduationCap className="text-blue-500 w-6 h-6" />,
    },
    {
      year: "Future",
      title: "Software Engineer",
      description:
        "Looking forward to contributing to impactful projects, advancing my skills in AI, backend systems, and scalable web applications.",
      icon: <FaRocket className="text-purple-400 w-6 h-6" />,
    },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto p-12">
      <h2 className=" font-bold text-center mb-10">My Journey</h2>
      <div className="relative border-l-4 border-blue-600 pl-6 space-y-12">
        {items.map((item, index) => (
          <div key={index} className="relative">
            {/* Icon */}
            <div className="absolute -left-11 flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 border-2 border-blue-600">
              {item.icon}
            </div>

            {/* Content */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <span className="text-sm text-gray-400">{item.year}</span>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
