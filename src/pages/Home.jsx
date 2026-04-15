import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToSection } from "../utils/scrollToSection";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import ParallaxSection from "../components/ParallaxSection";

const Divider = () => (
  <div className="max-w-6xl mx-auto px-6">
    <div className="h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent" />
  </div>
);

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
    <div className="overflow-clip">
      <ParallaxSection strength={28}>
        <Hero />
      </ParallaxSection>

      <ParallaxSection strength={8}>
        <Divider />
      </ParallaxSection>
      <ParallaxSection strength={-30}>
        <About />
      </ParallaxSection>

      <ParallaxSection strength={8}>
        <Divider />
      </ParallaxSection>
      <ParallaxSection strength={32}>
        <Projects />
      </ParallaxSection>

      <ParallaxSection strength={8}>
        <Divider />
      </ParallaxSection>
      <ParallaxSection strength={-28}>
        <Contact />
      </ParallaxSection>
    </div>
  );
};

export default Home;
