import { useState } from "react";
import MyButton from "../components/UI/button/MyButton";
import Typed from "react-typed";
import * as Scroll from "react-scroll";
import { motion } from "framer-motion";

const Hero = () => {
  const [isType, setIsType] = useState(true);
  return (
    <section className="hero section" id="hero">
      <div className="hero__inner container">
        <div className="hero__body">
          <Typed
            strings={[
              //   'Hallo! <span class="intro"> mein Name ist </br>Alex Bagin.',
              //   'Hallo! <span class="intro"> mein Name ist </br>Alex Bagin.</br><span class="intro">Ich interessiere mich </br> sehr für die Web-Entwicklung. </span>',
              //   'Hallo! <span class="intro"> mein Name ist </br>Alex Bagin.</br><span class="intro">Code schreiben.</span>',
              //   'Hallo! <span class="intro"> mein Name ist </br>Alex Bagin.</br><span class="intro">Digital gestalten.</span>',
              //   'Hallo! <span class="intro"> mein Name ist </br>Alex Bagin.</br><span class="intro">Online beeindrucken.</span>',
              'Hallo! <span class="intro"> mein Name ist </br>Alex Bagin.',
            ]}
            backSpeed={10}
            startDelay={2000}
            typeSpeed={30}
            className="hero__title"
            onComplete={(str) => setIsType(str.typingComplete)}
          />
          <Scroll.Link to="portfolio" spy={true} smooth={true} duration={500} offset={-50}>
            <MyButton
              buttonStyle={"btn--outline"}
              buttonSize={"btn--medium"}
              buttonVisibility={isType ? "hidden" : "visible"}
            >
              Portfolio
            </MyButton>
          </Scroll.Link>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="hero__scene-wrapper"
        >
          <div className="imgBx">
            <img src="../../img/AB_hero_section1.png" alt="Alex Bagin" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
