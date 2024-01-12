import { useEffect, useState, useRef } from "react";
import * as Scroll from "react-scroll";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ThemeContext } from "./context";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Hero from "./pages/Hero";
import Portfolio from "./pages/Portfolio";
import SkillsDev from "./pages/SkillsDev";
import { motion, useScroll, useInView } from "framer-motion";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
}

function App() {
  const { scrollYProgress } = useScroll();
  const Element = Scroll.Element;
  const [isDark, setIsDark] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY >= 1) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        setIsDark,
      }}
    >
      <div className="flow-container">
        <header className={!isScrolled ? "header" : "header is-scrolled"}>
          <Header />
        </header>
        <main className="content">
          <div className="content__sections">
            <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
            <Section>
              <Element name="hero">
                <Hero />
              </Element>
            </Section>
            <Section>
              <Element name="about">
                <About />
              </Element>
            </Section>
            <Section>
              <Element name="skills">
                <SkillsDev />
              </Element>
            </Section>
            <Section>
              <Element name="courses">
                <Courses />
              </Element>
            </Section>
            <Section>
              <Element name="portfolio">
                <Portfolio />
              </Element>
            </Section>
          </div>
        </main>
        <footer className="footer">
          <Element name="footer">
            <Footer />
          </Element>
        </footer>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
