import { useContext, useState } from "react";
import { ThemeContext } from "../context";
import ThemeSwtich from "./UI/ThemeSwitch/ThemeSwitch";
import { NavLink } from "react-router-dom";
import MyButton from "./UI/button/MyButton";
import * as Scroll from "react-scroll";

const Header = () => {
  const Link = Scroll.Link;
  const $ = window;
  const { theme, setTheme } = useContext(ThemeContext);
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(false);
  const [mobile, setMobile] = useState(false);

  const clickHandler = () => {
    setMobile(!mobile);
    setClick(!click);
  };

  const closeMobile = () => setClick(false);

  const showButton = () => {
    if ($.innerWidth <= 1024) {
      setButton(true);
    } else {
      setButton(false);
      setClick(false);
      setMobile(false);
    }
  };

  $.addEventListener("resize", showButton);

  return (
    <>
      <div className="header__inner container">
        <Link
          to="hero"
          smooth={true}
          offset={-100}
          duration={500}
          style={{ textDecoration: "none" }}
        >
          <div className="logo">
            <h2>
              <span>alex</span>
              {"  "}
              <span>bagin</span>
            </h2>
          </div>
        </Link>
        {!button && (
          <>
            <nav className={mobile ? "header__menu hidden-mobile" : "header_menu"}>
              <ul className="header__menu-list">
                <li className="header__menu-item">
                  <Link
                    activeClass="active"
                    to="about"
                    onClick={closeMobile}
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    About
                  </Link>
                </li>
                <li className="header__menu-item">
                  <Link
                    activeClass="active"
                    to="courses"
                    onClick={closeMobile}
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    Courses
                  </Link>
                </li>
                <li className="header__menu-item">
                  <Link
                    activeClass="active"
                    to="skills"
                    onClick={closeMobile}
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    Skills
                  </Link>
                </li>
                <li className="header__menu-item">
                  <Link
                    activeClass="active"
                    to="projects"
                    onClick={closeMobile}
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    Projects
                  </Link>
                </li>
                <li className="header__menu-item">
                  <Link
                    activeClass="active"
                    to="cv"
                    onClick={closeMobile}
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    CV
                  </Link>
                </li>
                <li className="header__menu-item">
                  <Link
                    to="contact"
                    onClick={closeMobile}
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            <MyButton buttonStyle={"btn--outline"} onClick={closeMobile}>
              SIGN UP
            </MyButton>
          </>
        )}
        <span className="themeSwitch">
          <ThemeSwtich isDark={theme} setIsDark={setTheme} />
        </span>
        {button && (
          <span
            onClick={clickHandler}
            className={"header__burger-button visible-mobile burger-button toggle"}
          >
            {!click ? (
              <i className="fa fa-solid fa-bars" aria-hidden="true" />
            ) : (
              <i className="fa-solid fa-x" />
            )}
          </span>
        )}
      </div>
      {button && (
        <div className={!click ? "mobile-menu" : "mobile-menu visible-mobile"}>
          <div className="mobile-menu__inner container">
            <div className="mobile-menu__navigation">
              <ul className="mobile-menu__navigation_list">
                <li className="mobile-menu__navigation-item">
                  <Link
                    activeClass="active"
                    to="about"
                    onClick={closeMobile}
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    About
                  </Link>
                </li>
                <li className="mobile-menu__navigation-item">
                  <Link
                    activeClass="active"
                    to="courses"
                    onClick={closeMobile}
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    Courses
                  </Link>
                </li>
                <li className="mobile-menu__navigation-item">
                  <Link
                    activeClass="active"
                    to="skills"
                    onClick={closeMobile}
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    Skills
                  </Link>
                </li>
                <li className="mobile-menu__navigation-item">
                  <Link
                    activeClass="active"
                    to="projects"
                    onClick={closeMobile}
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    Projects
                  </Link>
                </li>
                <li className="mobile-menu__navigation-item">
                  <Link
                    activeClass="active"
                    to="cv"
                    onClick={closeMobile}
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    CV
                  </Link>
                </li>
                <li className="mobile-menu__navigation-item">
                  <Link
                    to="contact"
                    onClick={closeMobile}
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
