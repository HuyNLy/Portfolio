"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import projectData from "../data/projects.json";
import TechIcon from "../components/Techicon";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const basePath = "/img/projectsImg/";

type Project = {
  name: string;
  date: string;
  link: string[];
  img: string[];
  description: string;
  tech: string[];
};

export default function Work() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [fallbackSrc, setFallbackSrc] = useState<Record<string, string>>({});

  useEffect(() => {
    if (!selectedProject) return;

    setCurrentImgIndex(0);
    const interval = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % selectedProject.img.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [selectedProject]);

  const handleImageError = (key: string) => {
    setFallbackSrc((prev) => ({
      ...prev,
      [key]: `${basePath}binary.jpg`,
    }));
  };

  return (
    <div className="w-full h-full p-6 flex flex-col bg-gradient-to-r from-blue-900 via-slate-900 to-cyan-950 text-white">
      <h1 className="text-center text-3xl font-bold my-6">My Work</h1>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectData.slice(0, 3).map((project, index) => {
          const firstImg = project.img?.[0] || "binary.jpg";
          const imgKey = `${project.name}-thumb`;

          return (
            <div
              key={index}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer p-3 border border-cyan-200 rounded-md bg-gray-800 hover:scale-105 transition-transform duration-150"
            >
              <Image
                src={fallbackSrc[imgKey] || `${basePath}${firstImg}`}
                alt={project.name}
                width={400}
                height={250}
                className="w-full h-40 object-cover rounded mb-2"
                onError={() => handleImageError(imgKey)}
              />

              <h2 className="text-xl font-semibold mt-2">{project.name}</h2>
              <p className="text-gray-300 text-sm">{project.date}</p>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-blue-950 text-blue-200 p-6 rounded-lg max-w-2xl w-full relative shadow-lg overflow-y-auto max-h-[90vh] scrollbar-hide">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 text-blue-300 hover:scale-110 text-3xl"
            >
              &times;
            </button>

            {/* Title + Links */}
            <div className="flex items-center gap-3 mb-2">
              {selectedProject.link?.find(
                (url) => url.includes("netlify") || url.includes("vercel")
              ) ? (
                <a
                  href={selectedProject.link.find(
                    (url) => url.includes("netlify") || url.includes("vercel")
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-bold text-blue-300 hover:underline flex items-center gap-2"
                >
                  {selectedProject.name}
                  <FaExternalLinkAlt />
                </a>
              ) : (
                <h2 className="text-2xl font-bold">{selectedProject.name}</h2>
              )}

              {selectedProject.link?.find((url) => url.includes("github.com")) && (
                <a
                  href={selectedProject.link.find((url) =>
                    url.includes("github.com")
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:scale-110 text-2xl"
                >
                  <FaGithub />
                </a>
              )}
            </div>

            <p className="text-blue-300 text-sm mb-3">{selectedProject.date}</p>

            {/* Image Viewer */}
            <div className="mb-3">
              <Image
                src={
                  fallbackSrc["modal"] ||
                  `${basePath}${selectedProject.img[currentImgIndex]}`
                }
                alt={`Image ${currentImgIndex}`}
                width={700}
                height={500}
                className="w-full max-h-[50vh] object-contain rounded"
                onError={() => handleImageError("modal")}
              />
              <div className="flex justify-center mt-2 gap-1">
                {selectedProject.img.map((_, i) => (
                  <span
                    key={i}
                    className={`w-2 h-2 rounded-full ${
                      i === currentImgIndex ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            <p className="text-sm mb-4">{selectedProject.description}</p>

            {selectedProject.tech && (
              <div className="mt-2">
                <div className="flex flex-wrap gap-2 text-2xl justify-center">
                  {selectedProject.tech.map((tech, i) => (
                    <TechIcon key={i} name={tech} />
                  ))}
                </div>
              </div>
            )}

            {selectedProject.link && selectedProject.link.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-3">
                {selectedProject.link.map((url, i) => {
                  let label = "Visit Project";
                  let icon = null;

                  if (url.includes("github.com")) {
                    label = "GitHub";
                    icon = <FaGithub className="mr-1" />;
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
                      className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-3 rounded inline-flex items-center text-sm"
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
