import { motion } from "framer-motion";
import previewKhs from "../assets/khs-preview.png";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  Cell,
} from "recharts";
import { useState } from "react";

const khsData = [
   // Semester 1
  { matkul: "Bahasa Inggris I", grade: "A", nilai: 83, semester: 1 },
  { matkul: "Dasar Pemrograman", grade: "B", nilai: 68, semester: 1 },
  { matkul: "Entrepreneurship", grade: "A", nilai: 87, semester: 1 },
  { matkul: "Logika dan Algoritma", grade: "B", nilai: 74, semester: 1 },
  { matkul: "Pendidikan Pancasila", grade: "A", nilai: 83, semester: 1 },
  { matkul: "Pengantar Teknologi Informasi dan Komunikasi", grade: "A", nilai: 81, semester: 1 },

  // Semester 2
  { matkul: "Arsitektur Komputer", grade: "B", nilai: 69, semester: 2 },
  { matkul: "Bahasa Inggris II", grade: "A", nilai: 83, semester: 2 },
  { matkul: "Character Building", grade: "A", nilai: 81, semester: 2 },
  { matkul: "Matematika Diskrit", grade: "B", nilai: 79, semester: 2 },
  { matkul: "Pemrograman Berbasis Objek", grade: "A", nilai: 90, semester: 2 },
  { matkul: "Struktur Data", grade: "B", nilai: 79, semester: 2 },

  // Semester 3
  { matkul: "Grafika Komputer", grade: "A", nilai: 80, semester: 3 },
  { matkul: "Jaringan Komputer", grade: "A", nilai: 92, semester: 3 },
  { matkul: "Praktikum Jaringan Komputer", grade: "A", nilai: 100, semester: 3 },
  { matkul: "Sistem Basis Data", grade: "B", nilai: 70, semester: 3 },
  { matkul: "Sistem Operasi", grade: "B", nilai: 72, semester: 3 },
  { matkul: "Statistika", grade: "A", nilai: 83, semester: 3 },
  { matkul: "Web Programming I", grade: "A", nilai: 85, semester: 3 },

  // Semester 4
  { matkul: "Interaksi Manusia Komputer", grade: "A", nilai: 94, semester: 4 },
  { matkul: "Kecerdasan Buatan", grade: "A", nilai: 91, semester: 4 },
  { matkul: "Manajemen Jaringan", grade: "A", nilai: 95, semester: 4 },
  { matkul: "Mobile Commerce", grade: "A", nilai: 83, semester: 4 },
  { matkul: "Pembelajaran Mesin", grade: "A", nilai: 90, semester: 4 },
  { matkul: "Routing and Switching Essential", grade: "A", nilai: 80, semester: 4 },
  { matkul: "Sistem Multimedia", grade: "A", nilai: 86, semester: 4 },

  // Semester 5
  { matkul: "Cloud Computing", grade: "A", nilai: 80, semester: 5 },
  { matkul: "Keamanan dan Penjaminan Informasi", grade: "A", nilai: 85, semester: 5 },
  { matkul: "Metode Penelitian", grade: "A", nilai: 90, semester: 5 },
  { matkul: "Mobile Programming", grade: "A", nilai: 90, semester: 5 },
  { matkul: "Pengolahan Citra", grade: "A", nilai: 90, semester: 5 },
  { matkul: "Rekayasa Perangkat Lunak", grade: "B", nilai: 74, semester: 5 },
  { matkul: "Virtual dan Augmented Reality", grade: "A", nilai: 93, semester: 5 },

  // Semester 6
  { matkul: "Arsitektur Enterprise", grade: "A", nilai: 90, semester: 6 },
  { matkul: "Audit Teknologi Informasi", grade: "B", nilai: 77, semester: 6 },
  { matkul: "Computer Forensik", grade: "A", nilai: 80, semester: 6 },
  { matkul: "Kriptografi", grade: "A", nilai: 90, semester: 6 },
  { matkul: "Manajemen Proyek Teknologi Informasi", grade: "A", nilai: 95, semester: 6 },
  { matkul: "Pendidikan Agama", grade: "A", nilai: 84, semester: 6 },
  { matkul: "Teknik Penulisan Karya Ilmiah", grade: "A", nilai: 90, semester: 6 },
  { matkul: "Web Programming II", grade: "A", nilai: 91, semester: 6 },

  // Semester 7
  { matkul: "Bahasa Indonesia", grade: "A", nilai: 90, semester: 7 },
  { matkul: "Etika Profesi Teknologi Informasi Dan Komunikasi", grade: "A", nilai: 88, semester: 7 },
  { matkul: "Pendidikan Kewarganegaraan", grade: "A", nilai: 85, semester: 7 },
  { matkul: "Praktik Kerja Lapangan", grade: "B", nilai: 79, semester: 7 }
];

const ipSemester = [
  { semester: 1, ip: 3.56 },
  { semester: 2, ip: 3.50 },
  { semester: 3, ip: 3.75 },
  { semester: 4, ip: 4.00 },
  { semester: 5, ip: 3.83 },
  { semester: 6, ip: 3.87 },
  { semester: 7, ip: 3.64 },
];

const groupedBySemester = khsData.reduce((acc, item) => {
  if (!acc[item.semester]) acc[item.semester] = [];
  acc[item.semester].push(item);
  return acc;
}, {});

// ... (IMPORTS dan khsData tetap seperti yang kamu punya)

const SemesterDropdown = ({ semester, courses, isOpen, toggle }) => (
  <div className="mb-6">
    <button
      onClick={() => toggle(Number(semester))}
      className={`w-full flex justify-between items-center px-4 py-3 rounded-lg font-semibold transition 
        border border-white/30 bg-white/20 hover:bg-white/30 text-white shadow-md backdrop-blur-sm focus:outline-none`}
    >
      <span>📘 Semester {semester}</span>
      <span>{isOpen ? "🔼" : "🔽"}</span>
    </button>

    <motion.div
      initial={false}
      animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.4 }}
      className="overflow-hidden mt-2"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-white/10 backdrop-blur-md shadow-xl rounded-xl p-5 border-l-4"
            style={{
              borderColor: item.grade === "A" ? "rgb(139, 92, 246)" : "rgb(34, 197, 94)",
            }}
          >
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium text-gray-200">{item.matkul}</span>
              <span className={`text-lg font-bold ${item.grade === "A" ? "text-purple-400" : "text-green-400"}`}>{item.grade}</span>
            </div>
            <div className="text-sm text-gray-300 mt-1 text-right">Nilai: {item.nilai}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
);


const KhsPage = () => {
  const [openSemester, setOpenSemester] = useState(null);

  const toggleSemester = (semester) => {
    setOpenSemester((prev) => (prev === semester ? null : semester));
  };

 console.log("Grouped data:", groupedBySemester);
 return (
    <section
      id="khs"
      className="relative min-h-screen py-20 px-4 md:px-10 bg-gradient-to-br from-[#1e3a8a] via-emerald-900 to-slate-900 text-white overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full z-0">
        {[{ size: 40, left: "10%", duration: "8s" }, { size: 60, left: "30%", duration: "10s" }, { size: 50, left: "60%", duration: "12s" }, { size: 70, left: "80%", duration: "14s" }].map((bubble, idx) => (
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

      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center text-white mb-12 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        📄 Kartu Hasil Studi (KHS)
      </motion.h2>

      <div className="max-w-4xl mx-auto mb-16 z-10 relative">
        <h3 className="text-xl font-semibold text-center mb-4 text-white">📊 Index Prestasi Tiap Semester</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={ipSemester} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
            <XAxis dataKey="semester" stroke="#fff" />
            <YAxis domain={[3.2, 4]} stroke="#fff" />
            <Tooltip cursor={{ fill: '#ffffff10' }} />
            <Bar dataKey="ip">
              <LabelList dataKey="ip" position="top" fill="white" />
              {ipSemester.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.semester === 2 ? "#34d399" : "#a78bfa"} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
      {Object.entries(groupedBySemester)
  .sort(([a], [b]) => Number(a) - Number(b))
  .map(([semester, courses]) => (
    <SemesterDropdown
      key={semester}
      semester={semester}
      courses={courses}
      isOpen={openSemester === Number(semester)}
      toggle={toggleSemester}
    />
))}


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

      <style>{`
        @keyframes bubbleMove {
          0% { transform: translateY(0); }
          100% { transform: translateY(120vh); }
        }
      `}</style>
    </section>
  );
};

export default KhsPage;
