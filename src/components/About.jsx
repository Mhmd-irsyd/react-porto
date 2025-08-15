import { motion } from 'framer-motion';
import aboutIllustration from "../assets/ilustration.svg";
import html5 from "../assets/html5.svg";
import tailwind from "../assets/tailwind.svg";
import javascript from "../assets/javascript.svg";
import react from "../assets/react.svg";
import css3 from "../assets/css.svg";
import php from "../assets/php.svg";
import laravel from "../assets/laravel.svg";
import dart from "../assets/dart.svg";
import flutter from "../assets/flutter.svg";
import csharp from "../assets/c_sharp.svg";
import nextjs from "../assets/next-js.svg";
import codeigniter from "../assets/codeigniter.svg";
import logoUbsi from "../assets/logo-ubsi.png";
import { Link } from "react-router-dom";

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

const SkillCard = ({ icon, title, imgSize, barWidth }) => (
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
      className={`${imgSize} mx-auto mb-4 object-contain`} 
    />
    <h4 className="text-xl font-semibold">{title}</h4>
    <div className="w-full bg-gray-300 h-1 mt-2">
      <div className={`bg-blue-500 h-1 ${barWidth}`} />
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
    <li>👨‍🎓 Fresh Graduate in IT "Information Technology"</li>
    <li>💻 Front-End Web Enthusiast</li>
    <li>🌍 Based in Indonesia</li>
  </ul>

  {/* Universitas Info */}
<div className="mt-6 flex items-center gap-4 bg-[#1e293b] p-4 rounded-lg shadow-lg w-fit">
  <img src={logoUbsi} alt="Logo UBSI" className="w-12 h-12 object-contain" />
  <div>
    <p className="text-sm md:text-base text-gray-200">Universitas Bina Sarana Informatika</p>
    <p className="text-sm text-gray-400">IPK: 3.76</p>
  </div>
</div>

  <div className="flex gap-4 mt-4">
    <a href="https://github.com/Mhmd-irsyd?tab=repositories" className="bg-blue-600 px-5 py-2 rounded-xl font-medium hover:bg-blue-500 transition" target="_blank" rel="noopener noreferrer">
      View My Projects
    </a>
    <a href="https://www.linkedin.com/in/muhammad-irsyad-032051258/" className="border border-blue-600 px-5 py-2 rounded-xl font-medium hover:bg-blue-600 transition">
      Let’s Connect
    </a>
    
    <motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  <Link
    to="/khs"
    className="inline-block bg-gradient-to-r from-cyan-500 via-emerald-500 to-teal-500 px-5 py-2 rounded-xl font-medium text-white shadow-lg hover:brightness-110 transition"
  >
    🎓 Lihat KHS Saya
  </Link>
</motion.div>
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
    {[
  { icon: html5, title: "HTML5", imgSize: "w-[60px] h-[60px]", barWidth: "w-4/5" },
  { icon: tailwind, title: "Tailwind CSS", imgSize: "w-[60px] h-[60px]", barWidth: "w-4/5" },
  { icon: javascript, title: "JavaScript", imgSize: "w-[60px] h-[60px]", barWidth: "w-3/4" },
  { icon: react, title: "React.js", imgSize: "w-[60px] h-[60px]", barWidth: "w-2/3" },
  { icon: css3, title: "CSS", imgSize: "w-[80px] h-[60px]", barWidth: "w-4/5" },
  { icon: php, title: "PHP", imgSize: "w-[80px] h-[60px]", barWidth: "w-4/5" },
  { icon: laravel, title: "Laravel", imgSize: "w-[95px] h-[65px]", barWidth: "w-3/4" },
].map((skill, index) => (
  <SkillCard key={index} {...skill} />
))}
  </div>
</motion.div>

<motion.div 
  className="mt-20"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.5 }}
>
  <SectionTitle title="Technologies I've Explored" />
  
  <p className="text-gray-300 mb-8 text-center max-w-2xl mx-auto text-base md:text-lg">
    Aside from my main tech stack, I’ve explored several other technologies to broaden my skills — from mobile app development to server-side frameworks.
  </p>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 px-6">
    {[
     { title: "Dart", icon: dart, barWidth: "w-1/4" },
  { title: "Flutter", icon: flutter, barWidth: "w-1/4" },
  { title: "C#", icon: csharp, barWidth: "w-1/4" },
  { title: "Next.js", icon: nextjs, barWidth: "w-1/4" },
  { title: "CodeIgniter", icon: codeigniter, barWidth: "w-1/4" },
    ].map((item, index) => (
      <motion.div 
        key={index}
        className="relative bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-4 rounded-xl shadow-lg text-center hover:-translate-y-1 transition-transform duration-300 group"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <img src={item.icon} alt={item.title} className="w-10 h-10 mx-auto mb-2 object-contain opacity-80 group-hover:opacity-100" />
        <h4 className="text-md font-semibold text-white mb-1">{item.title}</h4>
        <span className="text-xs text-yellow-400 bg-yellow-900/20 px-2 py-0.5 rounded-full">Explored</span>
        
        <div className="w-full bg-gray-700 h-1 mt-3 rounded">
          <div className={`bg-yellow-400 h-1 rounded ${item.barWidth}`} />
        </div>
      </motion.div>
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
          title: "Front-End Web Developer with Fullstack Capabilities Intern PT Agrinas Pangan Nusantara",
          time: "April 2025 - July 2025",
          description: "Bertanggung jawab sebagai Front-End Developer dalam pengembangan website Building Management selama 3 bulan menggunakan React.js, Laravel, dan Inertia.js. Saya membangun antarmuka pengguna yang responsif dan mudah digunakan untuk memudahkan petugas mengunggah bukti aktivitas gedung. Selain itu, saya juga terlibat secara ringan dalam pengelolaan sisi backend, seperti integrasi data dan autentikasi dasar. Proyek ini memperkuat keterampilan saya dalam membangun aplikasi web modern berbasis komponen dan terintegrasi penuh antara frontend dan backend.",
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
            link: "https://loginhub-56411.firebaseapp.com/"
          }, {
            title: "Personal Portfolio",
            description: "A portfolio website to showcase my work and skills.",
            link: "https://portofolio-one-eta.vercel.app/"
          }, {
            title: "Building Management Website",
            description: "Built the front-end of a Building Management website using React.js, Laravel, and Inertia.js. Focused on creating a responsive and integrated UI, with light backend support for authentication and data flow.",
            link: "https://bm.agrinaspangan.id/login"
          }].map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
