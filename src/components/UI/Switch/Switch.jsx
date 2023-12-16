import { useEffect } from "react";
import "./Switch.css";
import Sun from "/img/sun.svg";
import Moon from "/img/moon.svg";

const Switch = ({ isDark, setIsDark, ...props }) => {
  useEffect(() => {
    if (!isDark) {
      document.body.className = "light";
    } else {
      document.body.className = "";
    }
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
