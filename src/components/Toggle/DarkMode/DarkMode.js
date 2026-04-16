import React, { useEffect } from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";

const DarkMode = () => {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  };

  const toggleTheme = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    const toggle = document.getElementById("darkmode-toggle");

    if (savedTheme === "light") {
      setLightMode();
      toggle.checked = false;
    } else {
      setDarkMode();
      toggle.checked = true;
    }
  }, []);

  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <Sun className="sun" />
        <Moon className="moon" />
      </label>
    </div>
  );
};

export default DarkMode;
