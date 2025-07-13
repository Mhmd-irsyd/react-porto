import React from "react";
import { motion } from "framer-motion";
import previewKhs from "../assets/khs-preview.png";

const khsData = [
  { matkul: "Virtual dan Augmented Reality", grade: "A", nilai: 93 },
  { matkul: "Arsitektur Enterprise", grade: "A", nilai: 90 },
  { matkul: "Audit Teknologi Informasi", grade: "B", nilai: 77 },
  { matkul: "Computer Forensik", grade: "A", nilai: 80 },
  { matkul: "Kriptografi", grade: "A", nilai: 90 },
  { matkul: "Manajemen Proyek Teknologi Informasi", grade: "A", nilai: 95 },
  { matkul: "Pendidikan Agama", grade: "A", nilai: 84 },
  { matkul: "Teknik Penulisan Karya Ilmiah", grade: "A", nilai: 90 },
  { matkul: "Routing and Switching Essential", grade: "A", nilai: 80 },
  { matkul: "Sistem Multimedia", grade: "A", nilai: 86 },
  { matkul: "Cloud Computing", grade: "A", nilai: 80 },
  { matkul: "Keamanan dan Penjaminan Informasi", grade: "A", nilai: 85 },
  { matkul: "Metode Penelitian", grade: "A", nilai: 90 },
  { matkul: "Mobile Programming", grade: "A", nilai: 90 },
  { matkul: "Pengolahan Citra", grade: "A", nilai: 90 },
  { matkul: "Rekayasa Perangkat Lunak", grade: "B", nilai: 74 },
  { matkul: "Sistem Operasi", grade: "B", nilai: 72 },
  { matkul: "Statistika", grade: "A", nilai: 83 },
  { matkul: "Web Programming I", grade: "A", nilai: 85 },
  { matkul: "Interaksi Manusia Komputer", grade: "A", nilai: 94 },
  { matkul: "Kecerdasan Buatan", grade: "A", nilai: 91 },
  { matkul: "Manajemen Jaringan", grade: "A", nilai: 95 },
  { matkul: "Mobile Commerce", grade: "A", nilai: 83 },
  { matkul: "Pembelajaran Mesin", grade: "A", nilai: 90 },
  { matkul: "Character Building", grade: "A", nilai: 81 },
  { matkul: "Matematika Diskrit", grade: "B", nilai: 79 },
  { matkul: "Pemrograman Berbasis Objek", grade: "A", nilai: 90 },
  { matkul: "Struktur Data", grade: "B", nilai: 79 },
  { matkul: "Grafika Komputer", grade: "A", nilai: 80 },
  { matkul: "Jaringan Komputer", grade: "A", nilai: 92 },
  { matkul: "Praktikum Jaringan Komputer", grade: "A", nilai: 100 },
  { matkul: "Sistem Basis Data", grade: "B", nilai: 74 },
  { matkul: "Bahasa Inggris I", grade: "A", nilai: 83 },
  { matkul: "Dasar Pemrograman", grade: "B", nilai: 68 },
  { matkul: "Entrepreneurship", grade: "A", nilai: 87 },
  { matkul: "Logika dan Algoritma", grade: "B", nilai: 74 },
  { matkul: "Pendidikan Pancasila", grade: "A", nilai: 83 },
  { matkul: "Pengantar Teknologi Informasi dan Komunikasi", grade: "A", nilai: 81 },
  { matkul: "Arsitektur Komputer", grade: "B", nilai: 69 },
  { matkul: "Bahasa Inggris II", grade: "A", nilai: 83 },
  { matkul: "Web Programming II", grade: "A", nilai: 90 },
];

const KhsPage = () => {
  return (
    <section
      id="khs"
      className="relative min-h-screen py-20 px-4 md:px-10 bg-gradient-to-br from-[#1e3a8a] via-emerald-900 to-slate-900 text-white overflow-hidden"
    >
      {/* Bubble Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        {[{ size: 40, left: "10%", duration: "8s" },
          { size: 60, left: "30%", duration: "10s" },
          { size: 50, left: "60%", duration: "12s" },
          { size: 70, left: "80%", duration: "14s" },
        ].map((bubble, idx) => (
          <div
            key={idx}
            className="bg-white opacity-20 absolute rounded-full"
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              left: bubble.left,
              top: "-50px",
              animation: `bubbleMove ${bubble.duration} infinite linear`,
            }}
          />
        ))}
      </div>

      {/* Judul */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center text-white mb-12 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        📄 Kartu Hasil Studi (KHS)
      </motion.h2>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {khsData.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white/10 backdrop-blur-md shadow-xl rounded-xl p-5 border-l-4 hover:scale-[1.02] transition duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.02 }}
            style={{
              borderColor:
                item.grade === "A"
                  ? "rgb(139, 92, 246)"
                  : "rgb(34, 197, 94)",
            }}
          >
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium text-gray-200">
                {item.matkul}
              </span>
              <span
                className={`text-lg font-bold ${
                  item.grade === "A" ? "text-purple-400" : "text-green-400"
                }`}
              >
                {item.grade}
              </span>
            </div>
            <div className="text-sm text-gray-300 mt-1 text-right">
              Nilai: {item.nilai}
            </div>
          </motion.div>
        ))}
        {/* Card untuk lihat KHS PDF */}
<motion.div
  className="bg-white/10 backdrop-blur-md shadow-xl rounded-xl p-5 border-l-4 border-yellow-400 hover:scale-[1.02] transition duration-300 flex flex-col items-center text-center"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: khsData.length * 0.02 }}
>
 <img
  src={previewKhs}
  alt="Preview KHS PDF"
  className="w-full h-48 object-cover rounded-md mb-4 border border-white/30"
/>
  <h3 className="text-lg font-semibold text-white mb-2">Lihat KHS Versi PDF</h3>
 <a
  href="khs-asli.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-auto inline-block px-4 py-2 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600 transition"
>
  📄 Lihat PDF
</a>
</motion.div>

      </div>

      <style>
        {`
          @keyframes bubbleMove {
            0% { transform: translateY(0); }
            100% { transform: translateY(120vh); }
          }
        `}
      </style>
    </section>
  );
};

export default KhsPage;
