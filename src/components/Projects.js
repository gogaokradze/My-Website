import React from "react";

const projectsData = [
  {
    title: "Gamify",
    description: "Gamify your life, set goals, complete them and level up.",
    technologies: ["Next.js", "???"],
    link: "",
    status: "Coming Soon",
  },
  {
    title: "Google Copy",
    description: "Search anything to your heart's content",
    technologies: ["React", "Tailwind"],
    link: "https://goga-google-copy.netlify.app",
    status: "Unavailable",
  },
  {
    title: "Memories App",
    description: "Post interesting events that happened to you",
    technologies: ["React", "Node.js", "Redux"],
    link: "https://goga-memories.netlify.app/",
    status: "Unavailable",
  },
  {
    title: "Student's Management",
    description: "Manage students using this app",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "https://goga-student-management.netlify.app/",
    status: "Unavailable",
  },
  {
    title: "Chat App",
    description: "Choose a room and start chatting",
    technologies: ["Node.js", "Socket.io"],
    link: "https://goga-chat-app.herokuapp.com/",
    status: "Unavailable",
  },
  {
    title: "Weather App",
    description: "Enter coordinates and get weather for any location",
    technologies: ["Node.js", "Geolocation"],
    link: "https://goga-weather-app-1.herokuapp.com/",
    status: "Unavailable",
  },
];

const Projects = ({ darkTheme }) => {
  return (
    <>
      <div className="w-2/3 mx-auto">
        <div className="lg:ml-8 fade-up">
          <span className="inline-flex p-3 rounded-full ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-accent"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              ></path>
            </svg>
          </span>
          <h1 className="text-2xl">Projects</h1>
          <p>Here are some of my projects</p>
        </div>
      </div>
      <div className="flex flex-wrap flex-row lg:justify-start justify-center lg:w-2/3 w-full mx-auto my-auto">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="relative m-8 transform transition-transform duration-100 ease-in-out hover:-translate-y-2"
          >
            <div className="fade-up">
              <div className="projects dark:bg-black w-56 bg-neutral-200 h-52 flex flex-col justify-between items-center cursor-not-allowed opacity-40 hover:shadow-lg">
                <div>
                  <h1 className="text-lg text-center">{project.title}</h1>
                  <p className="mr-2 m-5">{project.description}</p>
                </div>
                <div className="mb-3">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="rounded-sm bg-buttonday dark:bg-button p-1 mr-2 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <p
                  className={`${
                    darkTheme ? "text-red-500" : "text-gray-800"
                  } text-2xl unavailableText`}
                >
                  {project.status}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
