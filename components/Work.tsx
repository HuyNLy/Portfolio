"use client";
import { useState, useEffect } from "react";
import projectData from "../data/projects.json";
import TechIcon from "../components/Techicon";
import {FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const basePath = "/img/projectsImg/";

type Project = {
  name: string;
  date: string;
  link: string[]; // now an array
  img: string[];
  description: string;
  tech: string[];
};

export default function Work() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    if (!selectedProject) return;

    setCurrentImgIndex(0);
    const interval = setInterval(() => {
      setCurrentImgIndex((prev) =>
        (prev + 1) % selectedProject.img.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [selectedProject]);

  return (
    <div className="w-full h-full p-8  flex flex-col bg-gradient-to-r from-blue-900 via-slate-900 to-cyan-950 text-white">
      <h1 className="text-center text-4xl font-bold my-8">My Work</h1>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/*  {projectData.slice(0, 3).map((project, index) => (  {projectData.map((project, index) => (*/}
          {projectData.slice(0, 3).map((project, index) => (
          <div
            key={index}
            onClick={() => setSelectedProject(project)}
            className="cursor-pointer p-4 border-2 border-cyan-200 rounded-lg bg-gray-800 hover:scale-105 transition-transform duration-150"
          >
            <img
              src={`${basePath}${project.img?.[0] || "binary.jpg"}`}
              alt={project.name}
              className="w-full h-52 object-cover rounded mb-2"
              onError={(e) => {
                e.currentTarget.src = `${basePath}binary.jpg`;
              }}
            />


            <h2 className="text-2xl font-semibold mt-4">{project.name}</h2>
            <p className="text-gray-300">{project.date}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-blue-950 text-blue-200 p-8 rounded-lg max-w-5xl w-full relative shadow-lg">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-blue-300 hover:animate-pulse text-6xl"
            >
              &times;
            </button>

            {/* Title with Live Link and GitHub Icon */}
            <div className="flex items-center gap-4 mb-2">
              {/* Live Site Link */}
              {selectedProject.link?.find((url) =>
                url.includes("netlify") || url.includes("vercel")
              ) ? (
                <a
                  href={
                    selectedProject.link.find((url) =>
                      url.includes("netlify") || url.includes("vercel")
                    )
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl font-bold text-blue-300 hover:underline flex items-center  gap-2"
                >
                  {selectedProject.name}
                  <FaExternalLinkAlt />

               
                </a>
              ) : (
                <h2 className="text-3xl font-bold">{selectedProject.name}</h2>
              )}

              {/* GitHub Icon */}
              {selectedProject.link?.find((url) => url.includes("github.com")) && (
                <a
                  href={selectedProject.link.find((url) => url.includes("github.com"))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" text-blue-300 hover:animate-ping text-4xl ml-2 "
                >
                  <FaGithub />
                </a>
              )}
            </div>

            <p className="text-blue-300 mb-4">{selectedProject.date}</p>

            {/* Image Viewer */}
            <div className="mb-4">
              <img
                src={`${basePath}${selectedProject.img[currentImgIndex]}`}
                alt={`Image ${currentImgIndex}`}
                className="w-full h-96 object-contain rounded transition-all duration-200"
              />
              <div className="flex justify-center mt-2 gap-2">
                {selectedProject.img.map((_, i) => (
                  <span
                    key={i}
                    className={`w-3 h-3 rounded-full ${
                      i === currentImgIndex ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            <p className="mb-8">{selectedProject.description}</p>

            {/* Tech Stack */}
            {selectedProject.tech && (
              <div className="mt-2 ">
                <div className="flex flex-wrap gap-4 text-4xl justify-center">
                  {selectedProject.tech.map((tech, i) => (
                    <TechIcon key={i} name={tech} />
                  ))}
                </div>
              </div>
            )}

            {/* External Links */}
            {selectedProject.link && selectedProject.link.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-4">
                {selectedProject.link.map((url, i) => {
                  let label = "Visit Project";
                  let icon = null;

                  if (url.includes("github.com")) {
                    label = "GitHub";
                    icon = <FaGithub className="mr-2" />;
                  } else if (url.includes("netlify") || url.includes("vercel")) {
                    label = "Live Site";
                  } else if (i === 1) {
                    label = "Live Site";
                  }

                  return (
                    <a
                      key={i}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded inline-flex items-center transition-colors duration-200"
                    >
                      {icon}
                      {label}
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
