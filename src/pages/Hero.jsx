import { useState } from "react";
import MyButton from "../components/UI/button/MyButton";
import Typed from "react-typed";

const Hero = () => {
  const [isType, setIsType] = useState(true);

  return (
    <section className="hero section" id="hero">
      <div className="hero__inner container">
        <div className="hero__body">
          {/*  Hello! My name is Aleksander Lamkov. I am a frontend developer. I can do some great things for you.  */}

          <Typed
            strings={[
              'Hello! <span class="intro"> My name is  Alex Bagin.</br> I can do some great things for you.</span>',
            ]}
            typeSpeed={100}
            className="hero__title"
            startDelay={2000}
            onComplete={(str) => setIsType(str.typingComplete)}
          />

          <MyButton
            buttonStyle={"btn--outline"}
            buttonSize={"btn--medium"}
            buttonVisibility={isType ? "hidden" : "visible"}
          >
            My Resume
          </MyButton>
        </div>
        <div className="hero__scene-wrapper">
          <div className="imgBx">
            <img src="./img/Alex Bagin-min.jpg" alt="Alex Bagin" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
