import { useEffect, useState } from "react";
import * as Scroll from "react-scroll";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ThemeContext } from "./context";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Hero from "./pages/Hero";
import Portfolio from "./pages/Portfolio";
import SkillsDev from "./pages/SkillsDev";
import { motion, useScroll } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();

  const Element = Scroll.Element;
  const [theme, setTheme] = useState(true);
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
        theme,
        setTheme,
      }}
    >
      <div className="flow-container">
        <header className={!isScrolled ? "header" : "header is-scrolled"}>
          <Header />
        </header>
        <main className="content">
          <div className="content__sections">
            <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
            <Element name="hero">
              <Hero />
            </Element>
            <Element name="about">
              <About />
            </Element>
            <Element name="skills">
              <SkillsDev />
            </Element>
            <Element name="courses">
              <Courses />
            </Element>
            <Element name="portfolio">
              <Portfolio />
            </Element>
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
