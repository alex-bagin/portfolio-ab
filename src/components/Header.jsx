import { useContext, useState } from "react";
import { ThemeContext } from "../context";
import ThemeSwtich from "./UI/ThemeSwitch/ThemeSwitch";
import { Link, NavLink } from "react-router-dom";
import { links } from "../../config";
import MyButton from "./UI/button/MyButton";
import Switch from "./UI/Switch/Switch";

const Header = () => {
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
        <Link to="hero" style={{ textDecoration: "none" }}>
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
                {links.map((link) => (
                  <li className="header__menu-item" key={link.path}>
                    <NavLink
                      to={link.path}
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                      }
                      onClick={closeMobile}
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
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
                {links.map((link) => (
                  <li className="mobile-menu__navigation-item" key={link.path}>
                    <NavLink
                      to={link.path}
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                      }
                      onClick={closeMobile}
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
