import React from "react";

const certificates = [
  {
    title: "Object Detection with Deep Learning",
    issuer: "Langing Academy",
    date: "March 2024",
    link: "https://example.com/certificate1.pdf",
  },
  {
    title: "Front-End Developer Bootcamp",
    issuer: "BuildWith Angga",
    date: "Feb 2024",
    link: "https://example.com/certificate2.pdf",
  },
  {
    title: "AI & Data Webinar",
    issuer: "Dicoding",
    date: "Jan 2024",
    link: "https://example.com/certificate3.pdf",
  },
];

const Certificates = () => {
  return (
    <div className="min-h-screen px-6 py-16 bg-white">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-2">
        My Certificates
      </h1>
      <p className="text-center text-gray-600 mb-10">
        Sertifikat pelatihan, webinar, dan bootcamp yang pernah saya ikuti.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-blue-50 shadow-md rounded-xl p-6 hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold text-blue-900 mb-1">
              {cert.title}
            </h3>
            <p className="text-sm text-gray-700 mb-2">{cert.issuer}</p>
            <p className="text-sm text-gray-500 mb-4">{cert.date}</p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white bg-blue-600 px-4 py-2 text-sm rounded hover:bg-blue-700 transition"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
