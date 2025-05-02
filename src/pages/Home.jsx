import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact"; // ✅ Tambahkan import Contact

const Home = () => {
  return (
    <div>
      <section>
        <Navbar />
      </section>

      <section>
        <Hero />
      </section>

      <section>
        <About />
      </section>

      <section>
        <Projects />
      </section>

      <section>
        <Contact /> {/* ✅ Tambahkan section contact di sini */}
      </section>
    </div>
  );
};

export default Home;
