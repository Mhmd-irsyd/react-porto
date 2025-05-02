import { motion } from 'framer-motion';
import aboutIllustration from "../assets/ilustration.svg";
import html5 from "../assets/html5.svg";
import tailwind from "../assets/tailwind.svg";
import javascript from "../assets/javascript.svg";
import react from "../assets/react.svg";

const SectionTitle = ({ title }) => (
  <motion.h3 
    className="text-3xl font-semibold mb-6 text-center"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5 }}
  >
    {title}
  </motion.h3>
);

const SkillCard = ({ icon, title, width }) => (
  <motion.div 
  className="bg-[#1e293b] p-6 rounded-lg shadow-lg text-center"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.5 }}
>
  <img 
    src={icon} 
    alt={title} 
    className="w-16 h-16 mx-auto mb-4" 
  />
  <h4 className="text-xl font-semibold">{title}</h4>
  <div className="w-full bg-gray-300 h-1 mt-2">
    <div className={`bg-blue-500 h-1 ${width}`}></div>
  </div>
</motion.div>
);
  
  

const TimelineItem = ({ title, time, description, isLeft }) => (
  <motion.div
    className={`w-full md:w-1/2 px-4 py-6 relative ${isLeft ? "self-start md:pr-10 text-right" : "self-end md:pl-10 text-left"}`}
    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5 }}
  >
    <div className="bg-[#1e293b] rounded-lg shadow-md p-6">
      <h4 className="text-xl font-semibold">{title}</h4>
      <p className="text-gray-400">{time}</p>
      <p className="text-gray-300 mt-2">{description}</p>
    </div>
    {/* Bulatan Tengah */}
    <span className="absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-[#0f172a] z-10" />
  </motion.div>
);



const ProjectCard = ({ title, description, link }) => (
  <motion.div 
    className="bg-[#1e293b] p-6 rounded-lg shadow-md"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5 }}
  >
    <h4 className="text-xl font-semibold mb-2">{title}</h4>
    <p className="text-gray-400 mb-4">{description}</p>
    <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
      View Project
    </a>
  </motion.div>
);

const About = () => {
  return (
    <section
  id="about"
  className="snap-start w-full py-20 text-white min-h-screen bg-gradient-to-br from-[#1e3a8a] via-[#064e3b] to-[#1e3a8a]"
>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left - Text */}
        <motion.div 
  className="opacity-100 transform transition-all duration-400 ease-out"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.5 }}
>
  <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">About Me</h2>
  <p className="text-lg text-gray-200 mb-6">
    I'm <span className="text-blue-500 font-semibold">Irsyad</span>, a passionate front-end developer focused on building modern and interactive web experiences.
  </p>
  <ul className="mb-6 space-y-2 text-gray-300">
    <li>👨‍🎓 Fresh Graduate in IT</li>
    <li>💻 Front-End Web Enthusiast</li>
    <li>🌍 Based in Indonesia</li>
  </ul>
  <div className="flex gap-4 mt-4">
    <a href="https://github.com/Mhmd-irsyd?tab=repositories" className="bg-blue-600 px-5 py-2 rounded-xl font-medium hover:bg-blue-500 transition" target="_blank" rel="noopener noreferrer">
      View My Projects
    </a>
    <a href="https://www.linkedin.com/in/muhammad-irsyad-032051258/" className="border border-blue-600 px-5 py-2 rounded-xl font-medium hover:bg-blue-600 transition">
      Let’s Connect
    </a>
  </div>
</motion.div>


        {/* Right - Illustration */}
        <motion.div 
          className="opacity-100 transform transition-all duration-400 ease-out flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={aboutIllustration}
            alt="About Illustration"
            className="w-[300px] md:w-[400px] object-contain"
          />
        </motion.div>
      </div>

      {/* Skills Section */}
      <motion.div 
        className="mt-20 opacity-100 transform transition-all duration-400 ease-out"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <SectionTitle title="Skills & Expertise" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-6">
          {[{ icon: html5, title: "HTML5", width: "w-4/5" },
            { icon: tailwind, title: "Tailwind CSS", width: "w-4/5" },
            { icon: javascript, title: "JavaScript", width: "w-3/4" },
            { icon: react, title: "React.js", width: "w-2/3" }]
            .map((skill, index) => (
              <SkillCard key={index} {...skill} />
          ))}
        </div>
      </motion.div>

      {/* Experience Timeline */}
      <motion.div 
  className="mt-20 relative"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.5 }}
>
  <SectionTitle title="Experience Timeline" />
  
  <div className="relative max-w-4xl mx-auto mt-12">
    {/* Garis Vertikal Tengah */}
    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500 z-0" />

    <div className="flex flex-col space-y-8">
      {[
        {
          title: "Self-Taught Web Developer",
          time: "2022 - Present",
          description: "Secara mandiri mengembangkan berbagai proyek web, termasuk landing page, website dinamis, dan situs e-commerce. Menggunakan teknologi seperti React, Tailwind CSS, dan Firebase untuk membangun aplikasi web responsif dan fungsional, serta terus meningkatkan keterampilan dalam pengembangan front-end dan back-end melalui proyek nyata dan tantangan pengembangan.",
        },
        {
          title: "Full-Stack Web Developer Intern – PT Yodya Karya",
          time: "April 2025 – July 2025",
          description: "Bertanggung jawab dalam pengembangan website Engineering Hub selama 3 bulan dengan menggunakan Laravel. Mengelola sisi backend seperti pengelolaan database, autentikasi, dan logika bisnis, sekaligus membangun antarmuka frontend yang responsif dan user-friendly. Pengalaman ini memperkuat pemahaman saya dalam membangun aplikasi web secara menyeluruh, mulai dari desain hingga implementasi.",
        },
      ].map((item, index) => (
        <TimelineItem
          key={index}
          {...item}
          isLeft={index % 2 === 0}
        />
      ))}
    </div>
  </div>
</motion.div>
      {/* Latest Projects */}
      <motion.div 
        className="mt-20 opacity-100 transform transition-all duration-400 ease-out"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <SectionTitle title="Latest Projects" />
        <div className="grid md:grid-cols-3 gap-8 px-6">
          {[{
            title: "E-commerce Store",
            description: "A fully responsive e-commerce site with shopping cart functionality.",
            link: "https://github.com/irsyad/e-commerce"
          }, {
            title: "Personal Portfolio",
            description: "A portfolio website to showcase my work and skills.",
            link: "https://github.com/irsyad/portfolio"
          }, {
            title: "Engineering Hub Website",
            description: "A web platform developed using Laravel with user management, authentication, and an admin dashboard for internal use at PT Yodya Karya.",
            link: "https://github.com/irsyad/blog"
          }].map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
