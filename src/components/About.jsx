import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGlobeAsia, FaGraduationCap, FaLaptopCode } from "react-icons/fa";
import html5 from "../assets/html5.svg";
import tailwind from "../assets/tailwind.svg";
import javascript from "../assets/javascript.svg";
import react from "../assets/react.svg";
import css3 from "../assets/css.svg";
import php from "../assets/php.svg";
import laravel from "../assets/laravel.svg";
import dart from "../assets/dart.svg";
import flutter from "../assets/flutter.svg";
import nextjs from "../assets/next-js.svg";
import python from "../assets/python.svg";
import vue from "../assets/vue.svg";
import logoUbsi from "../assets/logo-ubsi.png";
import Reveal from "./Reveal";

const skills = [
  { icon: html5, title: "HTML5" },
  { icon: tailwind, title: "Tailwind CSS" },
  { icon: javascript, title: "JavaScript" },
  { icon: react, title: "React" },
  { icon: css3, title: "CSS" },
  { icon: php, title: "PHP" },
  { icon: laravel, title: "Laravel" },
  { title: "Dart", icon: dart },
  { title: "Flutter", icon: flutter },
  { title: "Next.js", icon: nextjs },
  { title: "Python", icon: python },
  { title: "Vue", icon: vue },
];

const experiences = [
  {
    title: "Front-End Developer Intern — PT. Nose Herbalindo",
    time: "Oct 2025 - Present",
    description:
      "Working with the Infant AI team on the design, development, and optimization of financial user interfaces for IFCNews, focusing on professional, low-latency data delivery for global investors.",
  },
  {
    title: "Self-Taught Web Developer",
    time: "2022 - Present",
    description:
      "Building landing pages, dynamic websites, and production-ready apps with React and modern tooling.",
  },
  {
    title: "Front-End Intern (Fullstack Exposure)",
    time: "Apr 2025 - Jul 2025",
    description:
      "Developed responsive interfaces for building management workflows and collaborated with backend integration.",
  },
];

const About = () => {
  return (
    <section id="about" className="scroll-mt-24 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
              About Me
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300 text-lg">
              I&apos;m <span className="text-sky-600 dark:text-sky-400 font-semibold">Irsyad</span>, a frontend Engineer focused on clean interfaces and practical user experience.
            </p>

            <ul className="mt-6 space-y-2 text-slate-600 dark:text-slate-300">
              <li className="flex items-center gap-2"><FaGraduationCap className="text-sky-600 dark:text-sky-400" /> Fresh Graduate in Information Technology</li>
              <li className="flex items-center gap-2"><FaLaptopCode className="text-sky-600 dark:text-sky-400" /> Front-End Engineer Enthusiast</li>
              <li className="flex items-center gap-2"><FaGlobeAsia className="text-sky-600 dark:text-sky-400" /> Based in Indonesia</li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://github.com/Mhmd-irsyd?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-sm font-medium hover:opacity-90 transition"
              >
                View My Projects
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-irsyad-032051258/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-900 transition"
              >
                Let&apos;s Connect
              </a>
              <Link
                to="/khs"
                className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-900 transition"
              >
                Lihat KHS
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-20">
          <h3 className="text-3xl font-semibold text-center text-slate-900 dark:text-slate-100">Skills</h3>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
            {skills.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.04, duration: 0.4 }}
                className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 text-center"
              >
                <img src={item.icon} alt={item.title} className="w-12 h-12 mx-auto object-contain" />
                <p className="mt-3 text-sm font-medium text-slate-700 dark:text-slate-200">{item.title}</p>
              </motion.div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-20">
          <h3 className="text-3xl font-semibold text-center text-slate-900 dark:text-slate-100">Experience Timeline</h3>
          <div className="mt-10 max-w-4xl mx-auto space-y-4">
            {experiences.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5"
              >
                <h4 className="text-base md:text-lg font-semibold text-slate-900 dark:text-slate-100">{item.title}</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">{item.time}</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
