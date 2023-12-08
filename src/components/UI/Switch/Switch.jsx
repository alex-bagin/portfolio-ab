import { useEffect } from "react";
import "./Switch.css";
import Sun from "../../../../img/sun.svg";
import Moon from "../../../../img/moon.svg";

const Switch = ({ isDark, setIsDark, ...props }) => {
  useEffect(() => {
    document.body.classList.toggle("light");
  }, [isDark]);

  return (
    <div className="switch-box">
      <input
        type="checkbox"
        name="theme-switch"
        id="switch__input"
        {...props}
        value={isDark}
        onClick={() => setIsDark(!isDark)}
      />
      <label htmlFor="switch__input">
        <img className="sun" src={Sun} alt="sun.svg" />
        <img className="moon" src={Moon} alt="moon.svg" />
      </label>
    </div>
  );
};

export default Switch;

// {isDark ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}
