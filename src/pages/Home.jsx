const Home = () => {
  return (
    <div className="overflow-x-hidden">
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
        <Contact />
      </section>
    </div>
  );
};

export default Home;
