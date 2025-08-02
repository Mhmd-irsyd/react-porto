import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/certificate1.png";
import img2 from "../assets/certificate2.png";
import img3 from "../assets/certificate3.png";
import img4 from "../assets/certificate4.png";
import img5 from "../assets/certificate5.png";
import img6 from "../assets/certificate6.png";

const certificates = [
  {
    title: "Introduction To CyberSecurity Course",
    issuer: "Cisco Networking Academy",
    date: "June,29 2024",
    link: "/certificates/certificate1.pdf",
    image: img1,
  },
  {
    title: "Object Detection with Deep Learning",
    issuer: "Langing Academy",
    date: "March,17 2024",
    link: "/certificates/certificate2.pdf",
    image: img2,
  },
  {
    title: "Database System- Prediction (Master)",
    issuer: "Ikatan Ahli Informatika Indonesia (IAII)",
    date: "July,20 2023",
    link: "/certificates/certificate3.pdf",
    image: img3,
  },
  {
    title: " Program Analyst (Software Development)",
    issuer: "LSP UBSI, under license of BNSP (Badan Nasional Sertifikasi Profesi)",
    date: "February,05 2025",
    link: "/certificates/certificate4.pdf",
    image: img4,
  },
  {
    title: "Intermediate Network Administrator",
    issuer: "LSP UBSI, under license of BNSP (Badan Nasional Sertifikasi Profesi)",
    date: "February,05 2025",
    link: "/certificates/certificate5.pdf",
    image: img5,
  },
  {
    title: "Front-End Mobile Web App Development Building Management",
    issuer: "PT. AGRINAS PANGAN NUSANTARA",
    date: "July,08 2025",
    link: "/certificates/certificate6.pdf",
    image: img6,
  },
];

const Certificates = () => {
  return (
    <div className="relative min-h-screen px-6 py-16 bg-gradient-to-br from-[#1e3a8a] via-emerald-900 to-slate-900 text-white overflow-hidden">
      
      {/* 🫧 Gelembung Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
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

      {/* Judul dan Deskripsi */}
      <motion.h1
        className="text-4xl font-bold text-center mb-2 z-10 relative"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Certificates
      </motion.h1>

      <motion.p
        className="text-center text-emerald-200 mb-10 z-10 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Daftar sertifikat pelatihan yang telah saya ikuti sebagai bagian dari pengembangan diri dan peningkatan kompetensi.
      </motion.p>

      {/* Grid Sertifikat */}
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
