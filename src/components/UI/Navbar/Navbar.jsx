import { NavLink } from "react-router-dom";
import { links } from "../../../../config";


const Navbar = () => {

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
    </nav>
  );
};

export default Navbar;
