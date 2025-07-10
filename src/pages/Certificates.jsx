import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/certificate1.png";
import img2 from "../assets/certificate2.png";
import img3 from "../assets/certificate3.png";
import img4 from "../assets/certificate4.png";
import img5 from "../assets/certificate5.png";

const certificates = [
  {
    title: "Object Detection with Deep Learning",
    issuer: "Langing Academy",
    date: "March 2024",
    link: "/certificates/certificate1.pdf",
    image: img1,
  },
  {
    title: "Front-End Developer Bootcamp",
    issuer: "BuildWith Angga",
    date: "Feb 2024",
    link: "/certificates/certificate2.pdf",
    image: img2,
  },
  {
    title: "AI & Data Webinar",
    issuer: "Dicoding",
    date: "Jan 2024",
    link: "/certificates/certificate3.pdf",
    image: img3,
  },
  {
    title: "Website Development Fundamentals",
    issuer: "Progate",
    date: "Dec 2023",
    link: "/certificates/certificate4.pdf",
    image: img4,
  },
  {
    title: "UI/UX Design Basics",
    issuer: "Coursera",
    date: "Nov 2023",
    link: "/certificates/certificate5.pdf",
    image: img5,
  },
];

const Certificates = () => {
  return (
    <div className="relative min-h-screen px-6 py-16 bg-gradient-to-br from-[#1e3a8a] via-emerald-900 to-slate-900 text-white overflow-hidden">
      {/* Simplified glowing background without animation */}
      <div className="absolute w-60 h-60 bg-blue-500 rounded-full opacity-20 blur-3xl top-0 left-0 pointer-events-none"></div>
      <div className="absolute w-60 h-60 bg-emerald-400 rounded-full opacity-20 blur-3xl bottom-0 right-0 pointer-events-none"></div>

      {/* Content */}
      <motion.h1
        className="text-4xl font-bold text-center mb-2"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Certificates
      </motion.h1>

      <motion.p
        className="text-center text-emerald-200 mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Sertifikat pelatihan, webinar, dan bootcamp yang pernah saya ikuti.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 relative z-10">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            className="bg-white/5 shadow-lg rounded-2xl border border-white/10 transition hover:shadow-emerald-400/30"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-40 object-cover object-center"
              loading="lazy"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-1">{cert.title}</h3>
              <p className="text-sm text-gray-300 mb-2">{cert.issuer}</p>
              <p className="text-sm text-gray-400 mb-4">{cert.date}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-black px-4 py-2 text-sm rounded-full hover:bg-gray-200 transition"
              >
                View Certificate
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
