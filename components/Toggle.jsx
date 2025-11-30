import { useState, useEffect } from "react";
import { BsSun, BsMoon } from "react-icons/bs";
import "./toggle.css";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.body.classList.add("darkmode");
    }
  }, []);

  const toggleMode = () => {
    if (isDark) {
      document.body.classList.remove("darkmode");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.add("darkmode");
      localStorage.setItem("theme", "dark");
    }
    setIsDark(!isDark);
  };

  return (
    <div
      className={`toggle-container ${isDark ? "dark" : ""}`}
      onClick={toggleMode}
    >
      <div className={`toggle-slider ${isDark ? "dark" : ""}`}>
        {isDark ? <BsMoon /> : <BsSun />}
      </div>
    </div>
  );
}
