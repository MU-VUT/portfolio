import React, { useState } from "react";
import { motion } from "framer-motion";

const Nav = ({ activePage, handleClick }) => {
  const [resNavActive, setResNavActive] = useState(true);
  const about = window.innerWidth > 1440 ? "{MU}" : "About";
  const responsiveButton = "{MU}";
  let aboutLogo;
  if (activePage === "about" && about === "{MU}") {
    aboutLogo = "nav-item nav-logo active-logo";
  } else if (activePage !== "about" && about === "{MU}") {
    aboutLogo = "nav-item nav-logo";
  } else if (activePage === "about" && about === "About") {
    aboutLogo = "nav-item active-item";
  } else if (activePage !== "about" && about === "About") {
    aboutLogo = "nav-item ";
  }

  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: -500,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <nav>
      <button
        className="responsive-button"
        onClick={() => setResNavActive((resNavActive) => !resNavActive)}>
        {responsiveButton}
      </button>
      <motion.ul
        initial={{ opacity: 0, y: "-100%" }}
        animate={resNavActive ? "open" : "closed"}
        variants={variants}
        id="navList"
        className="nav-list">
        <li>
          <button
            className={activePage === "projects" ? "nav-item active-item" : "nav-item"}
            onClick={() => handleClick("Projects")}>
            Projects
          </button>
        </li>
        <li>
          <button
            className={activePage === "curriculum" ? "nav-item active-item" : "nav-item"}
            onClick={() => handleClick("Curriculum")}>
            Curriculum
          </button>
        </li>
        <li>
          <button className={aboutLogo} onClick={() => handleClick("About")}>
            {about}
          </button>
        </li>
        <li>
          <button className="nav-item" onClick={() => handleClick("GitHub")}>
            GitHub
          </button>
        </li>
        <li>
          <button className="nav-item" onClick={() => handleClick("LinkedIn")}>
            LinkedIn
          </button>
        </li>
      </motion.ul>
    </nav>
  );
};

export default Nav;
