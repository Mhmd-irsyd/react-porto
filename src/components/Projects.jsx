import { useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import {
  FaReact, FaHtml5, FaCss3Alt, FaGithub, FaExternalLinkAlt
} from "react-icons/fa";
import {
  SiTailwindcss, SiFramer, SiJavascript,SiLaravel, SiDotnet, SiUnity, SiMariadb, SiDart, SiFlutter, SiFirebase,
} from "react-icons/si";
import { Tooltip } from "react-tooltip";

import ecommerceImage from "../assets/e-commerce.jpg";
import portogolioImage from "../assets/portfolio.jpg";
import tokoonlineImage from "../assets/tokoonline.jpg";
import klinikImage from "../assets/klinikapp.jpg";
import AugmentedRealityImage from "../assets/augmentedreality.jpg";
import buildingManagementImage from "../assets/buildingmanagement.jpg";

// === ENUM & CONSTANT ===
const PROJECT_TYPES = ["Frontend", "Fullstack", "Mobile"];

const typeColors = {
  Frontend: "bg-indigo-500",
  Fullstack: "bg-emerald-500",
  Mobile: "bg-orange-500",
};

const techIcons = {
  React: <FaReact />,
  Tailwind: <SiTailwindcss />,
  "Framer Motion": <SiFramer />,
  JavaScript: <SiJavascript />,
  Laravel: <SiLaravel />,
  Csharp: <SiDotnet />,
  Unity: <SiUnity />,
  MariaDB: <SiMariadb />,
   Dart: <SiDart />,
  Flutter: <SiFlutter />,
  Firebase: <SiFirebase />,
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
};

// === PROJECT DATA ===
const projectsData = [
  {
    title: "Modern Portfolio",
    description: "A modern portfolio built with React and Tailwind.",
    tech: ["React", "Tailwind", "Framer Motion"],
    image: portogolioImage,
    demo: "https://yourportfolio.com",
    repo: "https://github.com/Mhmd-irsyd/react-porto",
    type: "Frontend",
  },
  {
    title: "Toko Online Admin",
    description: "Admin panel for food store using Laravel + React.",
    tech: ["Laravel", "Tailwind", "MariaDB"],
    image: tokoonlineImage,
    demo: "https://tokoonline-production.up.railway.app/backend/login",
    repo: "https://github.com/Mhmd-irsyd/TokoOnline",
    type: "Fullstack",
  },
  {
    title: "E-commerce App",
    description: "e-commerce app for browsing and purchasing accessories, featuring user authentication, shopping cart, and secure checkout functionality.",
    tech: ["React", "Tailwind", "Firebase"],
    image: ecommerceImage,
    demo: "https://loginhub-56411.firebaseapp.com/",
    repo: "https://github.com/Mhmd-irsyd/react_project",
    type: "Fullstack",
  },
  {
    title: "Building Management",
    description: "A mobile app for managing building assets, where staff can upload maintenance proof easily.",
    tech: ["React", "Tailwind", "JavaScript", "laravel", "MariaDB"],
    image: buildingManagementImage,
    demo: "https://bm.agrinaspangan.id/login",
    repo: "https://github.com/Mhmd-irsyd/BMYK",
    type: "Fullstack",
  },
  {
    title: "Klinik Mobile",
    description: "A mobile health app designed to help users access simple clinical features",
    tech: ["Flutter", "Dart"],
    image: klinikImage,
    repo: "https://github.com/Mhmd-irsyd/klmpk_mble_prgramng",
    apk: "https://drive.google.com/file/d/1fZrw2X-oEfNDD34zbQ7qqLsn6A1C6DM7/view?usp=sharing",
    type: "Mobile",
  },
   {
    title: "Augmented Reality App",
    description: "A mobile augmented reality app that brings animal characters to life with 3D animations for a fun experience.",
    tech: ["Csharp", "Vuforia", "Unity"],
    image: AugmentedRealityImage,
    repo: "https://github.com/Mhmd-irsyd/ar_animated",
    apk: "https://drive.google.com/file/d/1fXbIf8udgtB6Hd1oVKt49LJQgHgPRxF3/view?usp=sharing",
    type: "Mobile",
  },
];

// === MAIN COMPONENT ===
const Projects = () => {
  const [active, setActive] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState(null);

  const sortedProjects = [...projectsData].sort((a, b) =>
    a.type.localeCompare(b.type)
  );

  const filteredProjects =
    active === "All"
      ? sortedProjects
      : sortedProjects.filter((p) => p.type === active);

  const categoryCounts = {
    All: projectsData.length,
    ...PROJECT_TYPES.reduce((acc, type) => {
      acc[type] = projectsData.filter((p) => p.type === type).length;
      return acc;
    }, {}),
  };

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
            Projects I've built with love — covering frontend, fullstack, and mobile.
          </p>
        </motion.div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {["All", ...PROJECT_TYPES].map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1 rounded-full border ${
                active === cat
                  ? "bg-white text-black"
                  : "bg-transparent text-white border-white"
              } transition duration-300 text-sm`}
            >
              {cat} ({categoryCounts[cat]})
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
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
                  <span
                    className={`absolute top-2 left-2 text-xs px-2 py-1 rounded-full text-white ${typeColors[project.type]}`}
                  >
                    {project.type === "Mobile" && "📱 "}
                    {project.type}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 text-lg mb-3 flex-wrap">
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

                  <div className="flex gap-3 flex-wrap">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        className="flex items-center gap-1 px-3 py-1 bg-white text-black rounded-full text-sm hover:bg-gray-200 transition"
                      >
                        <FaExternalLinkAlt /> Demo
                      </a>
                    )}
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        className="flex items-center gap-1 px-3 py-1 bg-white text-black rounded-full text-sm hover:bg-gray-200 transition"
                      >
                        <FaGithub /> GitHub
                      </a>
                    )}
                    {project.apk && (
                      <a
                        href={project.apk}
                        target="_blank"
                        className="flex items-center gap-1 px-3 py-1 bg-green-500 text-white rounded-full text-sm hover:bg-green-400 transition"
                      >
                        📱 Install App
                      </a>
                    )}
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Video Modal */}
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
