import { useContext } from "react";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import { DarkContext } from "../../../context";
import { NavLink } from "react-router-dom";

const links = [
  { name: "Home", path: "/home" },
  { name: "Über mich", path: "/about" },
  { name: "Dienstleistungen", path: "/services" },
  { name: "Projekte", path: "/projects" },
  { name: "Referenzen", path: "/testimonials" },
  { name: "Lebenslauf", path: "/cv" },
  { name: "Kontakt", path: "/contact" },
];

const Navbar = () => {
  const { setIsDark } = useContext(DarkContext);

  function themeSwitchDark() {
    setIsDark(document.body.classList.toggle("dark"));
  }

  // const scrollToSection = (elementRef) => {
  //   window.scrollTo({
  //     top: elementRef.current.offsetTop,
  //     behavior: "smooth",
  //   });
  // };

  return (
    <nav className="navigation">
      <ul>
        {links.map((link) => (
          <li className="link" key={link.path}>
            <NavLink
              to={link.path}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <ThemeSwitch onClick={themeSwitchDark} />
    </nav>
  );
};

export default Navbar;
