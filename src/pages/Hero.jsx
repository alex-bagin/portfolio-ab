import { useEffect, useState } from "react";
import MyButton from "../components/UI/button/MyButton";
import Typed from "react-typed";
import * as Scroll from "react-scroll";

const Hero = () => {
  const $ = window;
  const [isType, setIsType] = useState(true);
  const [btnSize, setBtnSize] = useState("");

  const getScreenSize = () => {
    if ($.innerWidth >= 1024) {
      setBtnSize("btn--medium");
    } else if ($.innerWidth >= 767) {
      setBtnSize("btn--small");
    }
  };

  useEffect(() => {
    getScreenSize();
    $.addEventListener("resize", getScreenSize);
    return () => {
      $.removeEventListener("resize", getScreenSize);
    };
  }, [btnSize]);

  return (
    <section className="hero section" id="hero">
      <div className="hero__inner container">
        <div className="hero__scene-wrapper">
          <div className="imgBx">
            <img src="../../Scripts/static-website-animate.svg" alt="Static Website" />
          </div>
        </div>
        <div className="hero__body">
          <Typed
            strings={[
              '<span class="intro-1">Hallo!</span> <span class="intro-2"> Mein Name ist </br>Alex Bagin.</span>',
              '<span class="intro-1">Hallo!</span> <span class="intro-2"> Mein Name ist </br>Alex Bagin.</br><span class="intro-2">Ich interessiere mich sehr für die Web-Entwicklung. </span>',
              '<span class="intro-1">Hallo!</span> <span class="intro-2"> Mein Name ist </br>Alex Bagin.</br><span class="intro-2">Code schreiben.</span>',
              '<span class="intro-1">Hallo!</span> <span class="intro-2"> Mein Name ist </br>Alex Bagin.</br><span class="intro-2">Digital gestalten.</span>',
              '<span class="intro-1">Hallo!</span> <span class="intro-2"> Mein Name ist </br>Alex Bagin.</br><span class="intro-2">Online beeindrucken.</span>',
              '<span class="intro-1">Hallo!</span> <span class="intro-2"> Mein Name ist </br>Alex Bagin.</span>',
            ]}
            backSpeed={10}
            startDelay={1000}
            typeSpeed={30}
            className="hero__title"
            onComplete={(str) => setIsType(str.typingComplete)}
          />
          <Scroll.Link to="portfolio" spy={true} smooth={true} duration={500} offset={-50}>
            <MyButton
              buttonStyle={"btn--outline"}
              buttonSize={btnSize}
              buttonVisibility={isType ? "hidden" : "visible"}
            >
              Portfolio
            </MyButton>
          </Scroll.Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
