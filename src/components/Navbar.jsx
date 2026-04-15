import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaInstagram, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { navLinks } from "../constants/navlinks";
import { scrollToSection } from "../utils/scrollToSection";
import { applyTheme, getInitialTheme, storeTheme } from "../utils/theme";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme());
  const menuRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolling(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    applyTheme(theme);
    storeTheme(theme);
  }, [theme]);

  useEffect(() => {
    const onClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setToggle(false);
      }
    };

    if (toggle) {
      document.addEventListener("mousedown", onClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [toggle]);

  const handleSectionClick = (link) => {
    setActive(link.title);

    if (location.pathname === "/") {
      scrollToSection(link.id);
      return;
    }

    localStorage.setItem("scrollTo", link.id);
  };

  const activeClass = "text-sky-600 dark:text-sky-400";
  const idleClass = "text-slate-600 dark:text-slate-300";

  return (
    <motion.nav
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-40 backdrop-blur bg-white/80 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800 transition-all duration-300 ${scrolling ? "shadow-md" : "shadow-none"}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <div className="flex items-center gap-5 text-xl text-slate-600 dark:text-slate-300">
          <a
            href="https://www.instagram.com/muhmd.irsyd/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 dark:hover:text-white transition-colors duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com/Muhamma75082480"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 dark:hover:text-white transition-colors duration-300"
          >
            <FaXTwitter />
          </a>
        </div>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                to="/"
                onClick={() => handleSectionClick(link)}
                className={`${active === link.title ? activeClass : idleClass} hover:text-slate-900 dark:hover:text-slate-100 transition duration-200 text-sm font-medium`}
              >
                {link.title}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/certificates"
              onClick={() => setActive("Certificates")}
              className={`${active === "Certificates" ? activeClass : idleClass} hover:text-slate-900 dark:hover:text-slate-100 transition duration-200 text-sm font-medium`}
            >
              Certificates
            </Link>
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-4 text-lg text-slate-600 dark:text-slate-300">
          <button
            type="button"
            onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-full border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900 transition inline-flex items-center justify-center"
          >
            {theme === "dark" ? <FaSun size={14} /> : <FaMoon size={14} />}
          </button>
        </div>

        <div className="md:hidden relative flex items-center gap-2" ref={menuRef}>
          <button
            type="button"
            onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-full border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900 transition inline-flex items-center justify-center"
          >
            {theme === "dark" ? <FaSun size={14} /> : <FaMoon size={14} />}
          </button>

          <motion.button
            onClick={() => setToggle((prev) => !prev)}
            className="text-slate-900 dark:text-slate-100 text-2xl"
            whileTap={{ scale: 0.95 }}
          >
            {toggle ? <FaTimes /> : <FaBars />}
          </motion.button>

          <AnimatePresence>
            {toggle && (
              <motion.div
                className="absolute right-0 top-14 w-56 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-lg p-4"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <ul className="flex flex-col gap-3 mb-4">
                  {navLinks.map((link) => (
                    <li key={link.id}>
                      <Link
                        to="/"
                        onClick={() => {
                          handleSectionClick(link);
                          setToggle(false);
                        }}
                        className={`${active === link.title ? activeClass : "text-slate-700 dark:text-slate-200"} hover:text-slate-900 dark:hover:text-slate-100 text-sm font-medium transition duration-200`}
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      to="/certificates"
                      onClick={() => {
                        setActive("Certificates");
                        setToggle(false);
                      }}
                      className={`${active === "Certificates" ? activeClass : "text-slate-700 dark:text-slate-200"} hover:text-slate-900 dark:hover:text-slate-100 text-sm font-medium transition duration-200`}
                    >
                      Certificates
                    </Link>
                  </li>
                </ul>

                <div className="flex justify-center gap-4 text-slate-600 dark:text-slate-300">
                  <a
                    href="https://www.instagram.com/muhmd.irsyd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-slate-900 dark:hover:text-slate-100"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://x.com/Muhamma75082480"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-slate-900 dark:hover:text-slate-100"
                  >
                    <FaXTwitter />
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
