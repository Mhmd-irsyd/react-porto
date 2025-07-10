import React from "react";

// Ganti dengan path gambar asli kamu
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
    <div className="min-h-screen px-6 py-16 bg-gradient-to-br from-[#1e3a8a] via-emerald-900 to-slate-900 text-white">
      <h1 className="text-4xl font-bold text-center mb-2">My Certificates</h1>
      <p className="text-center text-emerald-200 mb-10">
        Sertifikat pelatihan, webinar, dan bootcamp yang pernah saya ikuti.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-md shadow-xl rounded-2xl border border-white/10 hover:shadow-emerald-400/20 transition overflow-hidden"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-40 object-cover object-center"
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
