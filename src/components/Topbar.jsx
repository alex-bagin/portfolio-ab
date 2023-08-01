import { useContext, useState } from "react";
import { ThemeContext } from "../context";
import ThemeSwtich from "./UI/ThemeSwitch/ThemeSwitch";
import { Link, NavLink } from "react-router-dom";
import { links } from "../../config";

const Topbar = () => {
  const { theme, setTheme } = useContext( ThemeContext );
  const [ click, setClick ] = useState( false );

  const clickHandler = () =>
  {
    setClick( !click )
  }

  return (
    <div className="topbar" >
      <Link to="home" className="logo">
        <img
          src="../img/logo.png"
          height="40"
          width="40"
        />
      </Link>

      <nav className="navbar">
        <ul>
          { links.map( ( link ) => (
            <li className="link" key={ link.path }>
              <NavLink
                to={ link.path }
                className={ ( { isActive, isPending } ) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                { link.name }
              </NavLink>
            </li>
          ) ) }
        </ul>
      </nav>
      <ThemeSwtich isDark={ theme } setIsDark={ setTheme } />
      <div onClick={ clickHandler } className="toggle">
        { !click
          ? <i className="fa fa-solid fa-bars" aria-hidden="true" />
          : <i className="fa-solid fa-x" />
        }
      </div>
    </div>
  );
};

export default Topbar;
