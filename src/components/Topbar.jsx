import { useState } from "react";
import { toggleMenu } from "../../utils";

const Topbar = () => {
  const [isMenu, setMenu] = useState(false);

  return (
    <div className="topbar">
      <img
        onClick={() => {
          <a href="#" className="logo" />;
        }}
        src="../img/logo.png"
        height="40"
        width="40"
      />
      <a href="#" className="logo">
        <strong>Portfolio</strong>
      </a>
      <div onClick={toggleMenu} className="toggle">
        {!isMenu ? (
          <i className="fa-solid fa-x" />
        ) : (
          <i className="fa fa-solid fa-bars" aria-hidden="true" />
        )}
      </div>
    </div>
  );
};

export default Topbar;
