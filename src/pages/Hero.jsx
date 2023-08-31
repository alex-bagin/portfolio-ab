import { useState } from "react";
import MyButton from "../components/UI/button/MyButton";
import Typed from "react-typed";
import * as Scroll from "react-scroll";
import { motion } from "framer-motion";

const Hero = () => {
  const $ = window;
  const [isType, setIsType] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const getScreen = () => {
    if ($.screenX <= 1024) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  $.addEventListener("resize", getScreen);

  return (
    <section className="hero section" id="hero">
      <div className="hero__inner container">
        <div className="hero__body">
          <Typed
            strings={[
              'Hallo! <span class="intro"> mein Name ist </br>Alex Bagin.',
              'Hallo! <span class="intro"> mein Name ist </br>Alex Bagin.</br><span class="intro">Ich interessiere mich </br> sehr für die Web-Entwicklung. </span>',
              'Hallo! <span class="intro"> mein Name ist </br>Alex Bagin.</br><span class="intro">Code schreiben.</span>',
              'Hallo! <span class="intro"> mein Name ist </br>Alex Bagin.</br><span class="intro">Digital gestalten.</span>',
              'Hallo! <span class="intro"> mein Name ist </br>Alex Bagin.</br><span class="intro">Online beeindrucken.</span>',
              'Hallo! <span class="intro"> mein Name ist </br>Alex Bagin.',
            ]}
            backSpeed={30}
            startDelay={2000}
            smartBackspace
            showCursor={true}
            cursorChar={"|"}
            typeSpeed={30}
            className="hero__title"
            onComplete={(str) => setIsType(str.typingComplete)}
          />
          <Scroll.Link to="footer" spy={true} smooth={true} duration={500}>
            <MyButton
              buttonStyle={"btn--outline"}
              buttonSize={"btn--medium"}
              buttonVisibility={isType ? "hidden" : "visible"}
            >
              Let´s check!
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
