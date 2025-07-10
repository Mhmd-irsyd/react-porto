import { useEffect } from "react";
import { useLocation } from "react-router-dom"; // ✅ Tambahkan ini
import { scrollToSection } from "../utils/scrollToSection";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Home = () => {
  const location = useLocation(); // ✅ Hook untuk deteksi perubahan route

  useEffect(() => {
    const target = localStorage.getItem("scrollTo");
    if (target) {
      setTimeout(() => scrollToSection(target), 300); // beri delay biar komponen sempat render
      localStorage.removeItem("scrollTo");
    }
  }, [location]); // ✅ Tambahkan dependency agar useEffect jalan setiap path berubah

  return (
    <div className="overflow-x-hidden">
      {/* Navbar tetap di atas tanpa section karena tidak perlu scroll */}
      <Navbar />

      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
