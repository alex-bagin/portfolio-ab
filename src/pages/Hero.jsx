import { useState } from "react";
import MyButton from "../components/UI/button/MyButton";
import Typed from "react-typed";
import { Link } from "react-router-dom";

const Hero = () => {
  const [isType, setIsType] = useState(true);

  return (
    <section className="hero section" id="hero">
      <div className="hero__inner container">
        <div className="hero__body">
          <Typed
            strings={[`Hallo! <span class="intro"> mein Name ist  Alex Bagin.`]}
            showCursor={false}
            typeSpeed={70}
            className="hero__title"
          />
          <Typed
            strings={[
              `<span class="intro">Ich interessiere mich sehr für </br> die Web-Entwicklung.</span>`,
            ]}
            showCursor={true}
            typeSpeed={70}
            className="hero__title"
            startDelay={4000}
            onComplete={(str) => setIsType(str.typingComplete)}
          />

          <MyButton
            buttonStyle={"btn--outline"}
            buttonSize={"btn--medium"}
            buttonVisibility={isType ? "hidden" : "visible"}
            onClick={<Link to="footer" />}
          >
            Let´s check!
          </MyButton>
        </div>
        <div className="hero__scene-wrapper">
          <div className="imgBx">
            <img src="../../img/AB_hero_section1.png" alt="Alex Bagin" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
