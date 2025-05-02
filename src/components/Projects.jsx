// src/components/Projects.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaReact, FaHtml5, FaCss3Alt, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiTailwindcss, SiFramer, SiJavascript } from "react-icons/si";
import { Tooltip } from "react-tooltip";

// Dummy project data
const projectsData = [
  {
    title: "Modern Portfolio",
    description: "A modern portfolio built with React and Tailwind, focusing on accessibility and animations.",
    tech: ["React", "Tailwind", "Framer Motion"],
    image: "/images/portfolio.png",
    demo: "https://yourportfolio.com",
    repo: "https://github.com/yourgithub/portfolio",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    type: "Frontend",
  },
  {
    title: "Dashboard UI",
    description: "Interactive dashboard using modern design systems.",
    tech: ["React", "Tailwind", "JavaScript"],
    image: "/images/dashboard.png",
    demo: "https://dashboardapp.com",
    repo: "https://github.com/yourgithub/dashboard",
    video: "",
    type: "UI Clone",
  },
  {
    title: "E-commerce App",
    description: "Fullstack app with product listing, authentication, and checkout features.",
    tech: ["React", "Tailwind", "JavaScript"],
    image: "/images/ecommerce.png",
    demo: "https://ecommerceapp.com",
    repo: "https://github.com/yourgithub/ecommerce",
    video: "",
    type: "Fullstack",
  },
];

// Tech icon map
const techIcons = {
  React: <FaReact />,
  Tailwind: <SiTailwindcss />,
  "Framer Motion": <SiFramer />,
  JavaScript: <SiJavascript />,
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
};

// Animations
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

// Only show selected categories
const categories = ["All", "Frontend", "Fullstack"];

const Projects = () => {
  const [active, setActive] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState(null);

  const filteredProjects =
    active === "All"
      ? projectsData.filter(
          (p) => p.type === "Frontend" || p.type === "Fullstack"
        )
      : projectsData.filter((p) => p.type === active);

  return (
    <section
      id="projects"
      className="py-20 text-white bg-gradient-to-br from-[#0f172a] via-[#064e3b] to-[#1e3a8a]"
    >
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2">💼 My Projects</h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            Here are some of the projects I've worked on lately. All built with love and precision.
          </p>
        </motion.div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1 rounded-full border ${
                active === cat
                  ? "bg-white text-black"
                  : "bg-transparent text-white border-white"
              } transition duration-300 text-sm`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              custom={index}
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <Tilt
                glareEnable
                glareMaxOpacity={0.3}
                glareColor="#ffffff"
                className="rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md shadow-xl border border-white/10"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover object-center"
                  />
                  {project.video && (
                    <button
                      onClick={() => setSelectedVideo(project.video)}
                      className="absolute top-2 right-2 text-xs bg-white text-black px-2 py-1 rounded hover:bg-gray-100"
                    >
                      🎬 Preview
                    </button>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-300 mb-4">{project.description}</p>
                  <div className="flex items-center gap-2 text-lg mb-3">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        data-tooltip-id={tech}
                        className="hover:scale-110 transition"
                      >
                        {techIcons[tech]}
                        <Tooltip id={tech} place="top" content={tech} />
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.demo}
                      target="_blank"
                      className="flex items-center gap-1 px-3 py-1 bg-white text-black rounded-full text-sm hover:bg-gray-200 transition"
                    >
                      <FaExternalLinkAlt /> Demo
                    </a>
                    <a
                      href={project.repo}
                      target="_blank"
                      className="flex items-center gap-1 px-3 py-1 bg-white text-black rounded-full text-sm hover:bg-gray-200 transition"
                    >
                      <FaGithub /> GitHub
                    </a>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full overflow-hidden">
            <div className="flex justify-between items-center bg-black text-white px-4 py-2">
              <span>🎥 Project Preview</span>
              <button onClick={() => setSelectedVideo(null)}>✖</button>
            </div>
            <iframe
              src={selectedVideo}
              title="Project Preview"
              className="w-full h-[300px] sm:h-[450px]"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
