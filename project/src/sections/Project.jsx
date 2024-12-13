import React from 'react';

export const Project = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A responsive e-commerce web app with user authentication, product filtering, and payment integration.",
      image: "https://via.placeholder.com/300x200", // Replace with actual image URL
      link: "https://example.com/ecommerce",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio showcasing projects, skills, and experience using React and Tailwind.",
      image: "https://via.placeholder.com/300x200", // Replace with actual image URL
      link: "https://example.com/portfolio",
    },
    {
      title: "Chat Application",
      description:
        "A real-time chat application built with Node.js, Socket.IO, and React, featuring group chats and media sharing.",
      image: "https://via.placeholder.com/300x200", // Replace with actual image URL
      link: "https://example.com/chatapp",
    },
    {
      title: "Task Management Tool",
      description:
        "A full-stack task manager app with drag-and-drop functionality and real-time updates.",
      image: "https://via.placeholder.com/300x200", // Replace with actual image URL
      link: "https://example.com/taskmanager",
    },
  ];

  return (
    <section
      id="projects"
      className="h-screen py-12 px-8 bg-gradient-to-r from-gray-800 to-gray-700"
    >
      <div className="text-center mb-8">
        <h2 className="text-5xl font-bold text-teal-400">Projects</h2>
        <p className="mt-2 text-lg text-gray-300">
          Explore some of the projects I have worked on.
        </p>
      </div>
      <div className="flex overflow-x-auto space-x-8 px-4 py-6 scrollbar-thin scrollbar-thumb-teal-500 scrollbar-track-gray-600">
        {projects.map((project, index) => (
          <div
            key={index}
            className="min-w-[300px] flex-shrink-0 bg-gray-900 rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-teal-400">
                {project.title}
              </h3>
              <p className="mt-2 text-gray-300 text-sm">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 text-sm font-medium text-white bg-teal-500 rounded-md hover:bg-teal-600 transition"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
