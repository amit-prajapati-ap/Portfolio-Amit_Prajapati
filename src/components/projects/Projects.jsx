import React, { useState } from "react";
import { projects } from "../../constants";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModel = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModel = (e) => {
    e.preventDefault();
    setSelectedProject(null);
  };

  return (
    <section
      id="projects"
      className="md:py-24 py-8 pb-24 max-w-[1900px] mx-auto font-sans relative"
    >
      {/* Section title  */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-24 h-1 mx-auto mt-2 bg-[#8245ec]"></div>
        <p className="text-gray-300 mt-4 text-lg font-semibold">
          Showcasing practical skills and creativity through diverse web
          development projects built with modern technologies
        </p>
      </div>

      {/* Project Grid  */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-6 sm:mx-16 3xl:mx-0">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModel(project)}
            className="border border-gray-600 bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-all duration-300"
          >
            <div className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2 line-clamp-1">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 pt-5 line-clamp-3">
                {project.description}
              </p>
              <div className="mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Model Container  */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div className="bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative">
            <div className="flex justify-end px-4 mt-2 md:mt-4 lg:mt-8">
              <button
                onClick={handleCloseModel}
                className="text-white text-3xl font-bold hover:text-purple-500"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col">
              <div className="w-full flex justify-center bg-gray-900 px-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="lg:w-full w-[90%] object-cover rounded-xl shadow-2xl"
                />
              </div>

              <div className="p-6">
                <h3 className="lg:text-3xl font-semibold text-white mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-300 mb-6 lg:text-base text-xs">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mb-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-blue-700 hover:bg-purple-800 text-gray-300 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center transition-all duration-200"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-green-700 hover:bg-purple-800 text-gray-300 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center transition-all duration-200"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
