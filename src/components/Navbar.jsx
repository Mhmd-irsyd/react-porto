import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { navLinks } from "../constants/navlinks";
import { FaInstagram, FaXTwitter } from "react-icons/fa6"; // Impor hanya ikon Instagram dan XTwitter

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolling, setScrolling] = useState(false); // Untuk mendeteksi scroll

  // Menangani event scroll untuk menentukan status scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolling(true); // Mengubah status scrolling jika lebih dari 10px scroll
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener saat komponen dibersihkan
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

        {/* Tengah - Nav Links */}
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

        {/* Kanan - Social Icons */}
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

        {/* Mobile Menu Button */}
        <div className="md:hidden relative">
          <motion.button
            onClick={() => setToggle(!toggle)}
            className="text-2xl focus:outline-none"
            whileTap={{ scale: 0.95 }}
          >
            {toggle ? "✖" : "☰"}
          </motion.button>

          {/* Mobile Dropdown */}
          {toggle && (
            <motion.div
              className="absolute right-0 top-16 bg-white rounded-lg shadow-lg p-6 w-52"
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
                        active === link.title ? "text-blue-600" : "text-gray-700"
                      } hover:text-blue-500 transition duration-300 font-medium`}
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex gap-4 text-xl text-gray-700 justify-center">
                <FaInstagram className="hover:text-pink-500 cursor-pointer" />
                <FaXTwitter className="hover:text-black cursor-pointer" />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
