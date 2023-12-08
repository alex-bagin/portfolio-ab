import { useEffect } from "react";

const ThemeSwtich = ({ isDark, setIsDark, ...props }) => {
  useEffect(() => {
    document.body.classList.toggle("light");
  }, [isDark]);

  return (
    <div {...props} value={isDark} onClick={() => setIsDark(!isDark)}>
      {isDark ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}
    </div>
  );
};

export default ThemeSwtich;
