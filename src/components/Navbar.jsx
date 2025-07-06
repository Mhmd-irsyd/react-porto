import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../constants/navlinks";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const menuRef = useRef();

  // Deteksi scroll agar navbar bisa blur/background berubah
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Deteksi klik di luar menu untuk menutup dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setToggle(false);
      }
    };

    if (toggle) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggle]);

  return (
    <motion.nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolling ? "bg-blue-800 backdrop-blur-lg" : "bg-transparent"
      }`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Kiri - Logo */}
        <h1 className="text-xl font-bold text-white">Irsyad.dev</h1>

        {/* Tengah - Nav Links Desktop */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setActive(link.title)}
                className={`${
                  active === link.title ? "text-blue-600" : "text-gray-200"
                } hover:text-blue-500 transition duration-300 font-medium`}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Kanan - Ikon Sosial Desktop */}
        <div className="hidden md:flex gap-4 text-xl text-gray-200">
          <a
            href="https://www.instagram.com/muhmd.irsyd/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com/Muhamma75082480"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition duration-300"
          >
            <FaXTwitter />
          </a>
        </div>

        {/* Tombol Burger + Menu Mobile */}
        <div className="md:hidden relative" ref={menuRef}>
          <motion.button
            onClick={() => setToggle(!toggle)}
            className="text-2xl focus:outline-none"
            whileTap={{ scale: 0.95 }}
          >
            {toggle ? "✖" : "☰"}
          </motion.button>

          {/* Dropdown Menu Mobile */}
          <AnimatePresence>
            {toggle && (
              <motion.div
                key="mobile-menu"
                className="absolute right-0 top-16 bg-white rounded-lg shadow-lg p-6 w-52 max-w-xs"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <ul className="flex flex-col gap-4 mb-4">
                  {navLinks.map((link) => (
                    <li key={link.id}>
                      <a
                        href={`#${link.id}`}
                        onClick={() => {
                          setToggle(false);
                          setActive(link.title);
                        }}
                        className={`${
                          active === link.title
                            ? "text-blue-600"
                            : "text-gray-700"
                        } hover:text-blue-500 transition duration-300 font-medium`}
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="flex gap-4 text-xl text-gray-700 justify-center">
                  <a
                    href="https://www.instagram.com/muhmd.irsyd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-500 transition duration-300"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://x.com/Muhamma75082480"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black transition duration-300"
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
