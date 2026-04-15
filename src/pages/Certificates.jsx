import { motion } from "framer-motion";
import ParallaxSection from "../components/ParallaxSection";
import Reveal from "../components/Reveal";
import img1 from "../assets/certificate1.png";
import img2 from "../assets/certificate2.png";
import img3 from "../assets/certificate3.png";
import img4 from "../assets/certificate4.png";
import img5 from "../assets/certificate5.png";
import img6 from "../assets/certificate6.png";
import img7 from "../assets/certificate7.png";

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
    title: "Program Analyst (Software Development)",
    issuer: "LSP UBSI under license of BNSP",
    date: "February,05 2025",
    link: "/certificates/certificate4.pdf",
    image: img4,
  },
  {
    title: "Intermediate Network Administrator",
    issuer: "LSP UBSI under license of BNSP",
    date: "February,05 2025",
    link: "/certificates/certificate5.pdf",
    image: img5,
  },
  {
    title: "Front-End Mobile Web App Development",
    issuer: "PT. AGRINAS PANGAN NUSANTARA",
    date: "July,08 2025",
    link: "/certificates/certificate6.pdf",
    image: img6,
  },
  {
    title: "Introduction to cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "June,29 2024",
    link: "/certificates/certificate7.pdf",
    image: img7,
  },
];

const Certificates = () => {
  return (
    <section className="min-h-screen px-6 py-16">
      <ParallaxSection strength={18}>
        <Reveal className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">My Certificates</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Daftar sertifikat pelatihan sebagai bagian dari pengembangan diri dan peningkatan kompetensi.
          </p>
        </Reveal>
      </ParallaxSection>

      <ParallaxSection strength={24}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {certificates.map((cert, index) => (
            <motion.article
              key={cert.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm"
            >
              <img src={cert.image} alt={cert.title} className="w-full h-44 object-cover" loading="lazy" />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{cert.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{cert.issuer}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{cert.date}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex mt-4 px-4 py-2 rounded-full bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-sm hover:opacity-90 transition"
                >
                  View Certificate
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </ParallaxSection>
    </section>
  );
};

export default Certificates;
