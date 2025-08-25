import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import StikerPhoto from "../assets/irsyad.png";

const Hero = () => {
   const [open, setOpen] = useState(false);
  return (
    <section
  id="home"
  className="snap-start relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1e3a8a] via-emerald-900 to-slate-900 pt-28 md:pt-36 overflow-hidden"
>
  {/* Bubbles Effect */}
  <div className="absolute top-0 left-0 w-full h-full z-0">
    {[{ size: 50, left: "10%", duration: "8s" },
      { size: 60, left: "30%", duration: "10s" },
      { size: 40, left: "60%", duration: "12s" },
      { size: 70, left: "80%", duration: "14s" },
    ].map((bubble, idx) => (
      <div
  key={idx}
  className="bg-white opacity-20 absolute rounded-full"
  style={{
    width: `${bubble.size}px`,
    height: `${bubble.size}px`,
    left: bubble.left,
    top: "-50px", // <-- ubah ini, bukan bottom
    animation: `bubbleMove ${bubble.duration} infinite linear`,
  }}
/>

    ))}
  </div>

  {/* Animated Gradient Background Elements */}
  <motion.div
    className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-green-500 to-green-700 rounded-full blur-3xl opacity-30 -z-10 pointer-events-none"
    animate={{ x: [0, 150, 0], y: [0, 100, 0] }}
    transition={{
      duration: 5,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    }}
  />
  <motion.div
    className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-green-600 to-green-800 rounded-full blur-3xl opacity-30 -z-10 pointer-events-none"
    animate={{ x: [0, -150, 0], y: [0, -100, 0] }}
    transition={{
      duration: 5,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    }}
  />

  {/* Main Content */}
  <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-12 z-10 relative">

    {/* Left Text Section */}
    <motion.div
  initial={{ x: -100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="flex-1 text-center lg:text-left order-2 lg:order-1"
>
  <p className="text-base sm:text-lg mb-2 text-white">👋 Hi, I'm</p>
  
  <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight">
    <span className="text-emerald-400 drop-shadow">Muhammad Irsyad</span>
  </h1>
  
  <h2 className="text-lg sm:text-xl lg:text-2xl mt-2 text-emerald-200">
    <Typewriter
      words={["Frontend Developer", "React Enthusiast", "UI/UX Explorer"]}
      loop
      cursor
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={2000}
    />
  </h2>
  
  <p className="mt-4 text-gray-100 text-sm sm:text-base max-w-md sm:max-w-lg md:mx-0 mx-auto">
    I love crafting clean, responsive, and modern interfaces with delightful user experiences.
  </p>

  <div className="mt-6 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
  <a 
  href="https://mail.google.com/mail/?view=cm&to=irsyadmuhammad4321@gmail.com" 
  target="_blank" 
  rel="noopener noreferrer"
  className="bg-emerald-500 text-white px-6 py-3 rounded-xl hover:bg-emerald-600 transition duration-300"
>
  Hire Me
</a>
<div className="relative inline-block text-left">
              <button
                onClick={() => setOpenCV(!openCV)}
                className="border border-emerald-400 text-emerald-400 px-6 py-3 rounded-xl hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition duration-300"
              >
                Lihat CV
              </button>

              {openCV && (
                <div className="absolute mt-2 w-40 bg-white border border-gray-200 rounded-xl shadow-lg">
                  <a
                    href="/CV-Indonesia.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                  >
                    CV (Indonesia)
                  </a>
                  <a
                    href="/CV-English.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                  >
                    CV (English)
                  </a>
                </div>
              )}
            </div>
          



  </div>

  <div className="mt-6 flex justify-center lg:justify-start gap-4 text-xl sm:text-2xl text-white">
    <a href="https://www.linkedin.com/in/muhammad-irsyad-032051258/" className="hover:text-blue-500 transition">
      <FaLinkedin />
    </a>
    <a href="https://github.com/Mhmd-irsyd" className="hover:text-gray-300 transition">
      <FaGithub />
    </a>
  </div>
</motion.div>


   {/* Center Image Section (Stiker Irsyad) */}
<motion.div
  initial={{ x: 100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
  className="flex-1 flex justify-center order-1 lg:order-2 mb-8 lg:mb-0"
>
  <div className="relative w-60 sm:w-72 md:w-80 lg:w-[400px] h-60 sm:h-72 md:h-80 lg:h-[400px] rounded-full ring-4 ring-gray-700 shadow-2xl hover:scale-105 transition duration-500 mx-auto">
    <img
      src={StikerPhoto}
      alt="Irsyad Sticker"
      className="w-full h-full object-cover rounded-full"
    />
  </div>
</motion.div>



    {/* Welcome Section */}
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      className="flex-1 text-center lg:text-left order-3"
    >
      <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-4">
        Welcome to My World of Front-End Development
      </h3>
      <p className="text-gray-300 text-sm sm:text-lg mb-4">
        Let's build creative and interactive websites together.
      </p>
      <motion.div className="flex justify-center items-center gap-4 mt-8">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full ${
              i === 0
                ? "bg-pink-400"
                : i === 1
                ? "bg-blue-400"
                : "bg-green-400"
            } shadow-lg`}
            animate={{
              y: [0, -15, 0],
              scale: [1, 1.1, 1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 2 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  </div>
</section>
  );
};

export default Hero;
