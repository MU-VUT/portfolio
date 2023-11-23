import React, { useEffect, useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import Popup from "./Popup";

const Nav = () => {
  const logo = "{MU}";
  const about = window.innerWidth > 860 ? logo : "About";

  const [PopupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPopupVisible(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handler = () => {
    setPopupVisible(false);
  };

  return (
    <>
      <nav>
        <ul id="navList" className="nav-list">
          <li>
            {window.innerWidth > 860 ? (
              ""
            ) : (
              <span className="nav-logo-responsive">{logo}</span>
            )}
          </li>
          <li>
            <NavLink to={"/projects"}>
              {({ isActive }) => (
                <button className={isActive ? "nav-item active" : "nav-item"}>
                  Projects
                </button>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to={"/curriculum"}>
              {({ isActive }) => (
                <button className={isActive ? "nav-item active" : "nav-item"}>
                  Curriculum
                </button>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>
              {({ isActive }) => (
                <button
                  className={
                    isActive
                      ? "nav-item nav-logo active-logo"
                      : "nav-item nav-logo"
                  }
                >
                  {about}
                </button>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"https://github.com/MU-VUT"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="nav-item">GitHub</button>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"https://www.linkedin.com/in/web-michalurbanek/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="nav-item">LinkedIn</button>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="container">
        {PopupVisible && window.innerWidth > 860 ? (
          <Popup handler={handler} />
        ) : (
          ""
        )}
        <Outlet />
      </div>
    </>
  );
};

export default Nav;
