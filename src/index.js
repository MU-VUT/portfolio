import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./style.scss";
import Nav from "./components/Nav.js";
import About from "./components/About.js";
import Projects from "./components/Projects.js";
import Curriculum from "./components/Curriculum.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: "about",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(param) {
    switch (param) {
      case "Projects":
        this.setState({ activePage: "projects" });
        break;
      case "Curriculum":
        this.setState({ activePage: "curriculum" });
        break;
      case "About":
        this.setState({ activePage: "about" });
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

  render() {
    const activePage = this.state.activePage;
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
        <Nav activePage={this.state.activePage} handleClick={this.handleClick} />{" "}
        <div className="container"> {innerApp} </div>{" "}
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
