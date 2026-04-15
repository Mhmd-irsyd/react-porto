import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoHandRightOutline } from "react-icons/io5";
import Reveal from "./Reveal";

const Hero = () => {
  const [openCV, setOpenCV] = useState(false);
  const cvRef = useRef(null);

  useEffect(() => {
    const onClick = (event) => {
      if (cvRef.current && !cvRef.current.contains(event.target)) {
        setOpenCV(false);
      }
    };

    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <section id="home" className="scroll-mt-24 min-h-screen py-20 flex items-center">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
        <Reveal>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 flex items-center justify-center gap-2 mb-2">
            <IoHandRightOutline /> Hi, I&apos;m
          </p>

          <h1 className="text-4xl md:text-7xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 leading-tight">
            Muhammad Irsyad
          </h1>

          <h2 className="text-xl md:text-3xl mt-4 text-sky-600 dark:text-sky-400 font-medium">
            <Typewriter
              words={["Frontend Developer", "React Enthusiast", "UI Explorer"]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={45}
              delaySpeed={1800}
            />
          </h2>

          <p className="mt-6 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-base md:text-lg">
            I build clean, responsive interfaces with a focus on readability, performance,
            and delightful interactions.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4" ref={cvRef}>
            <a
              href="https://mail.google.com/mail/?view=cm&to=irsyadmuhammad4321@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-sm md:text-base font-medium hover:scale-105 transition-transform"
            >
              Hire Me
            </a>

            <div className="relative">
              <button
                onClick={() => setOpenCV((prev) => !prev)}
                className="px-6 py-3 rounded-full border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-sm md:text-base font-medium hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
              >
                View Resume/CV
              </button>

              {openCV && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-lg overflow-hidden z-50 text-left">
                  <a
                    href="/CV-Indonesia2.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
                  >
                    CV (Indonesia)
                  </a>
                  <a
                    href="/Resume-English2.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 border-t border-slate-100 dark:border-slate-800 transition"
                  >
                    Resume (English)
                  </a>
                </div>
              )}
            </div>
          </div>

          <div className="mt-10 flex items-center justify-center gap-6 text-2xl text-slate-600 dark:text-slate-300">
            <a href="https://www.linkedin.com/in/muhammad-irsyad-032051258/" className="hover:text-sky-600 dark:hover:text-sky-400 hover:scale-110 transition-all">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Mhmd-irsyd" className="hover:text-slate-900 dark:hover:text-slate-100 hover:scale-110 transition-all">
              <FaGithub />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
