import { useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaBriefcase, FaExternalLinkAlt, FaGithub, FaMobileAlt } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFramer,
  SiJavascript,
  SiLaravel,
  SiDotnet,
  SiUnity,
  SiMariadb,
  SiDart,
  SiFlutter,
  SiFirebase,
} from "react-icons/si";
import Reveal from "./Reveal";

import ecommerceImage from "../assets/e-commerce.jpg";
import portogolioImage from "../assets/portfolio.jpg";
import tokoonlineImage from "../assets/tokoonline.jpg";
import klinikImage from "../assets/klinikapp.jpg";
import augmentedRealityImage from "../assets/augmentedreality.jpg";
import buildingManagementImage from "../assets/buildingmanagement.jpg";

const PROJECT_TYPES = ["Frontend", "Fullstack", "Mobile"];

const typeColors = {
  Frontend: "bg-sky-500",
  Fullstack: "bg-indigo-500",
  Mobile: "bg-slate-700",
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
    description: "E-commerce app with auth, cart, and secure checkout.",
    tech: ["React", "Tailwind", "Firebase"],
    image: ecommerceImage,
    demo: "https://loginhub-56411.firebaseapp.com/",
    repo: "https://github.com/Mhmd-irsyd/react_project",
    type: "Fullstack",
  },
  {
    title: "Building Management",
    description: "Web app for building maintenance submissions and monitoring.",
    tech: ["React", "Tailwind", "JavaScript", "Laravel", "MariaDB"],
    image: buildingManagementImage,
    demo: "https://bm.agrinaspangan.id/login",
    repo: "https://github.com/Mhmd-irsyd/BMYK",
    type: "Fullstack",
  },
  {
    title: "Klinik Mobile",
    description: "A mobile health app for basic clinical workflows.",
    tech: ["Flutter", "Dart"],
    image: klinikImage,
    repo: "https://github.com/Mhmd-irsyd/klmpk_mble_prgramng",
    apk: "https://drive.google.com/file/d/1fZrw2X-oEfNDD34zbQ7qqLsn6A1C6DM7/view?usp=sharing",
    type: "Mobile",
  },
  {
    title: "Augmented Reality App",
    description: "An AR app showing animated animals in 3D.",
    tech: ["Csharp", "Unity"],
    image: augmentedRealityImage,
    repo: "https://github.com/Mhmd-irsyd/ar_animated",
    apk: "https://drive.google.com/file/d/1fXbIf8udgtB6Hd1oVKt49LJQgHgPRxF3/view?usp=sharing",
    type: "Mobile",
  },
];

const Projects = () => {
  const [active, setActive] = useState("All");

  const sortedProjects = [...projectsData].sort((a, b) => a.type.localeCompare(b.type));
  const filteredProjects = active === "All" ? sortedProjects : sortedProjects.filter((p) => p.type === active);

  const categoryCounts = {
    All: projectsData.length,
    ...PROJECT_TYPES.reduce((acc, type) => {
      acc[type] = projectsData.filter((p) => p.type === type).length;
      return acc;
    }, {}),
  };

  return (
    <section id="projects" className="scroll-mt-24 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 flex items-center justify-center gap-2">
            <FaBriefcase /> My Projects
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A selection of frontend, fullstack, and mobile projects.
          </p>
        </Reveal>

        <Reveal delay={0.05} className="flex flex-wrap justify-center gap-3 mb-10">
          {["All", ...PROJECT_TYPES].map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full border text-sm transition ${
                active === cat
                  ? "bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 border-slate-900 dark:border-slate-100"
                  : "border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900"
              }`}
            >
              {cat} ({categoryCounts[cat]})
            </button>
          ))}
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.05}>
              <Tilt className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                <div className="relative">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                  <span className={`absolute top-3 left-3 text-xs px-2 py-1 rounded-full text-white ${typeColors[project.type]}`}>
                    {project.type}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{project.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{project.description}</p>

                  <div className="mt-3 flex flex-wrap items-center gap-2 text-lg text-slate-600 dark:text-slate-300">
                    {project.tech.map((tech) => (
                      <span key={tech} data-tooltip-id={tech} className="hover:scale-110 transition">
                        {techIcons[tech] || tech}
                        <Tooltip id={tech} place="top" content={tech} />
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-full bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-sm inline-flex items-center gap-1 hover:opacity-90 transition">
                        <FaExternalLinkAlt /> Demo
                      </a>
                    )}
                    {project.repo && (
                      <a href={project.repo} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-full bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-sm inline-flex items-center gap-1 hover:opacity-90 transition">
                        <FaGithub /> GitHub
                      </a>
                    )}
                    {project.apk && (
                      <a href={project.apk} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-full border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-sm inline-flex items-center gap-1 hover:bg-slate-100 dark:hover:bg-slate-800 transition">
                        <FaMobileAlt /> Install
                      </a>
                    )}
                  </div>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
