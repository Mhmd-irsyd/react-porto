import { useState } from "react";
import { motion } from "framer-motion";
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
import { FaBook, FaChartBar, FaChevronDown, FaChevronUp, FaFileAlt } from "react-icons/fa";
import previewKhs from "../assets/khs-preview.png";
import ParallaxSection from "../components/ParallaxSection";
import Reveal from "../components/Reveal";

const khsData = [
  { matkul: "Bahasa Inggris I", grade: "A", nilai: 83, semester: 1 },
  { matkul: "Dasar Pemrograman", grade: "B", nilai: 68, semester: 1 },
  { matkul: "Entrepreneurship", grade: "A", nilai: 87, semester: 1 },
  { matkul: "Logika dan Algoritma", grade: "B", nilai: 74, semester: 1 },
  { matkul: "Pendidikan Pancasila", grade: "A", nilai: 83, semester: 1 },
  { matkul: "Pengantar TIK", grade: "A", nilai: 81, semester: 1 },
  { matkul: "Arsitektur Komputer", grade: "B", nilai: 69, semester: 2 },
  { matkul: "Bahasa Inggris II", grade: "A", nilai: 83, semester: 2 },
  { matkul: "Character Building", grade: "A", nilai: 81, semester: 2 },
  { matkul: "Matematika Diskrit", grade: "B", nilai: 79, semester: 2 },
  { matkul: "Pemrograman Berbasis Objek", grade: "A", nilai: 90, semester: 2 },
  { matkul: "Struktur Data", grade: "B", nilai: 79, semester: 2 },
  { matkul: "Grafika Komputer", grade: "A", nilai: 80, semester: 3 },
  { matkul: "Jaringan Komputer", grade: "A", nilai: 92, semester: 3 },
  { matkul: "Praktikum Jaringan Komputer", grade: "A", nilai: 100, semester: 3 },
  { matkul: "Sistem Basis Data", grade: "B", nilai: 70, semester: 3 },
  { matkul: "Sistem Operasi", grade: "B", nilai: 72, semester: 3 },
  { matkul: "Statistika", grade: "A", nilai: 83, semester: 3 },
  { matkul: "Web Programming I", grade: "A", nilai: 85, semester: 3 },
  { matkul: "Interaksi Manusia Komputer", grade: "A", nilai: 94, semester: 4 },
  { matkul: "Kecerdasan Buatan", grade: "A", nilai: 91, semester: 4 },
  { matkul: "Manajemen Jaringan", grade: "A", nilai: 95, semester: 4 },
  { matkul: "Mobile Commerce", grade: "A", nilai: 83, semester: 4 },
  { matkul: "Pembelajaran Mesin", grade: "A", nilai: 90, semester: 4 },
  { matkul: "Routing and Switching Essential", grade: "A", nilai: 80, semester: 4 },
  { matkul: "Sistem Multimedia", grade: "A", nilai: 86, semester: 4 },
  { matkul: "Cloud Computing", grade: "A", nilai: 80, semester: 5 },
  { matkul: "Keamanan dan Penjaminan Informasi", grade: "A", nilai: 85, semester: 5 },
  { matkul: "Metode Penelitian", grade: "A", nilai: 90, semester: 5 },
  { matkul: "Mobile Programming", grade: "A", nilai: 90, semester: 5 },
  { matkul: "Pengolahan Citra", grade: "A", nilai: 90, semester: 5 },
  { matkul: "Rekayasa Perangkat Lunak", grade: "B", nilai: 74, semester: 5 },
  { matkul: "Virtual dan Augmented Reality", grade: "A", nilai: 93, semester: 5 },
  { matkul: "Arsitektur Enterprise", grade: "A", nilai: 90, semester: 6 },
  { matkul: "Audit Teknologi Informasi", grade: "B", nilai: 77, semester: 6 },
  { matkul: "Computer Forensik", grade: "A", nilai: 80, semester: 6 },
  { matkul: "Kriptografi", grade: "A", nilai: 90, semester: 6 },
  { matkul: "Manajemen Proyek TI", grade: "A", nilai: 95, semester: 6 },
  { matkul: "Pendidikan Agama", grade: "A", nilai: 84, semester: 6 },
  { matkul: "Teknik Penulisan Karya Ilmiah", grade: "A", nilai: 90, semester: 6 },
  { matkul: "Web Programming II", grade: "A", nilai: 91, semester: 6 },
  { matkul: "Bahasa Indonesia", grade: "A", nilai: 90, semester: 7 },
  { matkul: "Etika Profesi TIK", grade: "A", nilai: 88, semester: 7 },
  { matkul: "Pendidikan Kewarganegaraan", grade: "A", nilai: 85, semester: 7 },
  { matkul: "Praktik Kerja Lapangan", grade: "B", nilai: 79, semester: 7 },
];

const ipSemester = [
  { semester: 1, ip: 3.56 },
  { semester: 2, ip: 3.5 },
  { semester: 3, ip: 3.75 },
  { semester: 4, ip: 4.0 },
  { semester: 5, ip: 3.83 },
  { semester: 6, ip: 3.87 },
  { semester: 7, ip: 3.64 },
];

const groupedBySemester = khsData.reduce((acc, item) => {
  if (!acc[item.semester]) acc[item.semester] = [];
  acc[item.semester].push(item);
  return acc;
}, {});

const SemesterDropdown = ({ semester, courses, isOpen, toggle }) => (
  <div className="mb-5">
    <button
      onClick={() => toggle(Number(semester))}
      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between text-slate-900 dark:text-slate-100"
    >
      <span className="inline-flex items-center gap-2"><FaBook /> Semester {semester}</span>
      {isOpen ? <FaChevronUp /> : <FaChevronDown />}
    </button>

    <motion.div
      initial={false}
      animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden mt-2"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {courses.map((item) => (
          <div
            key={`${item.semester}-${item.matkul}`}
            className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4"
          >
            <div className="flex justify-between gap-3 items-start">
              <p className="text-sm text-slate-700 dark:text-slate-200">{item.matkul}</p>
              <span className={`text-sm font-semibold ${item.grade === "A" ? "text-sky-600 dark:text-sky-400" : "text-slate-500 dark:text-slate-400"}`}>
                {item.grade}
              </span>
            </div>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Nilai: {item.nilai}</p>
          </div>
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

  return (
    <section id="khs" className="scroll-mt-24 min-h-screen py-20 px-4 md:px-10">
      <ParallaxSection strength={18}>
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center text-slate-900 dark:text-slate-100 flex items-center justify-center gap-2">
            <FaFileAlt /> Kartu Hasil Studi (KHS)
          </h2>
        </Reveal>
      </ParallaxSection>

      <ParallaxSection strength={22}>
        <Reveal className="max-w-4xl mx-auto mt-10">
          <h3 className="text-xl font-semibold text-center mb-4 text-slate-900 dark:text-slate-100 inline-flex items-center justify-center gap-2 w-full">
            <FaChartBar /> Index Prestasi Tiap Semester
          </h3>
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={ipSemester} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#94a3b830" />
                <XAxis dataKey="semester" stroke="#64748b" />
                <YAxis domain={[3.2, 4]} stroke="#64748b" />
                <Tooltip cursor={{ fill: "#94a3b81a" }} />
                <Bar dataKey="ip">
                  <LabelList dataKey="ip" position="top" fill="#64748b" />
                  {ipSemester.map((entry) => (
                    <Cell key={entry.semester} fill={entry.semester % 2 === 0 ? "#38bdf8" : "#6366f1"} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Reveal>
      </ParallaxSection>

      <ParallaxSection strength={24}>
        <div className="max-w-6xl mx-auto mt-12">
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

          <Reveal>
            <div className="mt-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 text-center">
              <img
                src={previewKhs}
                alt="Preview KHS PDF"
                className="w-full h-48 object-cover rounded-lg border border-slate-200 dark:border-slate-800"
              />
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-slate-100">Lihat KHS Versi PDF</h3>
              <a
                href="khs-asli.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex mt-4 px-4 py-2 rounded-lg bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:opacity-90 transition"
              >
                <FaFileAlt className="mr-2" /> Lihat PDF
              </a>
            </div>
          </Reveal>
        </div>
      </ParallaxSection>
    </section>
  );
};

export default KhsPage;
