import { toggleMenu } from "../../utils";

const Topbar = () => {
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
        <i className="fa fa-solid fa-bars" aria-hidden="true"></i>
      </div>
    </div>
  );
};

export default Topbar;
