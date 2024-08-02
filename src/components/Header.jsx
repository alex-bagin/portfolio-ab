/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context";
import * as Scroll from "react-scroll";
import Switch from "./UI/Switch/Switch";

const Header = () => {
  const Link = Scroll.Link;
  const $ = window;
  const { isDark, setIsDark } = useContext(ThemeContext);
  const [icon, setIcon] = useState(false);
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(false);
  const [mobile, setMobile] = useState(false);

  const clickHandler = () => {
    setMobile(!mobile);
    setClick(!click);
  };

  const showIcon = () => {
    if ($.innerWidth <= 786) {
      setIcon(true);
    } else {
      setIcon(false);
    }
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

  useEffect(() => {
    showButton();
    $.addEventListener("resize", showButton);
    return () => {
      $.removeEventListener("resize", showButton);
    };
  }, []);
  useEffect(() => {
    showIcon();
    $.addEventListener("resize", showIcon);
    return () => {
      $.removeEventListener("resize", showIcon);
    };
  }, []);

  return (
    <>
      <div className="header__inner container">
        <Link
          to="hero"
          smooth={true}
          offset={-120}
          duration={500}
          style={{ textDecoration: "none" }}
          onClick={closeMobile}
        >
          <div className="logo">
            {!icon ? (
              <>
                <span>alex</span> <span>bagin</span>
              </>
            ) : (
              <img src="./icons/logo.png" alt="Logo" width="40" height="40" />
            )}
          </div>
        </Link>
        {!button && (
          <>
            <nav className={mobile ? "header__menu is-hidden" : "header_menu"}>
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
                    Über mich
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
                    to="courses"
                    onClick={closeMobile}
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    Kurse
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
                    Portfolio
                  </Link>
                </li>
              </ul>
            </nav>
          </>
        )}
        <div>
          <Switch isDark={isDark} setIsDark={setIsDark} />
        </div>
        {button && (
          <span
            onClick={clickHandler}
            className={"header__burger-button is-visible burger-button toggle"}
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
        <div
          className={
            !click ? "mobile-menu is-hidden" : "mobile-menu is-visible"
          }
        >
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
                    duration={3000}
                  >
                    Über mich
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
                    to="courses"
                    onClick={closeMobile}
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    Kurse
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
                    Portfolio
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
