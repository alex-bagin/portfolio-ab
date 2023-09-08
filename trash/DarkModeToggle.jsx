import { useEffect } from "react";
import Toggle from "react-toggle";

export const DarkModeToggle = ({isDark, setIsDark}) => {
  useEffect(() => {   
      document.body.classList.toggle("dark") 
  }, [isDark])   

  return (
    <Toggle
      checked={isDark}
      onChange={({ target }) => setIsDark(target.checked)}
      icons={{ checked: "🌙", unchecked: "🔆" }}
      aria-label="Dark mode toggle"
    />
  );
}

export default DarkModeToggle;
