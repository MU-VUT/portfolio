import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./style.scss";
import Nav from "./components/Nav.js";
import About from "./components/About.js";
import Projects from "./components/Projects.js";
import Curriculum from "./components/Curriculum.js";

const App = () => {
  const [activePage, setActivePage] = useState("about");

  function handleClick(param) {
    switch (param) {
      case "Projects":
        setActivePage("projects");
        break;
      case "Curriculum":
        setActivePage("curriculum");
        break;
      case "About":
        setActivePage("about");
        break;
      case "GitHub":
        window.open("https://github.com/MU-VUT", "_blank");
        break;
      case "LinkedIn":
        window.open("https://www.linkedin.com/in/web-michalurbanek/", "_blank");
        break;

      default:
        break;
    }
  }

  let innerApp;
  switch (activePage) {
    case "about":
      innerApp = <About />;
      break;

    case "projects":
      innerApp = <Projects />;
      break;

    case "curriculum":
      innerApp = <Curriculum />;
      break;

    default:
      break;
  }

  return (
    <div className="main">
      <Nav activePage={activePage} handleClick={handleClick} />
      <div className="container"> {innerApp} </div>{" "}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
