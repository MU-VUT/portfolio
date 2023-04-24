import React from "react";

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <ul id="navList" className="nav-list">
          <NavButton
            value="Projects"
            activePage={this.props.activePage}
            onClick={() => this.props.handleClick("Projects")}
          />{" "}
          <NavButton
            value="Curriculum"
            activePage={this.props.activePage}
            onClick={() => this.props.handleClick("Curriculum")}
          />{" "}
          <NavLogo
            value="{MU}"
            activePage={this.props.activePage}
            onClick={() => this.props.handleClick("About")}
          />{" "}
          <NavButton value="GitHub" onClick={() => this.props.handleClick("GitHub")} />{" "}
          <NavButton value="LinkedIn" onClick={() => this.props.handleClick("LinkedIn")} />{" "}
        </ul>{" "}
      </nav>
    );
  }
}

function NavButton(props) {
  let activeClass = "nav-item";
  if (props.value === "Projects" && props.activePage === "projects") {
    activeClass = "nav-item active-item";
  } else if (props.value === "Curriculum" && props.activePage === "curriculum") {
    activeClass = "nav-item active-item";
  }
  return (
    <li>
      <button onClick={props.onClick} value={props.value} className={activeClass}>
        {" "}
        {props.value}{" "}
      </button>{" "}
    </li>
  );
}

function NavLogo(props) {
  return (
    <li>
      <button
        onClick={props.onClick}
        value={props.value}
        className={
          props.activePage === "about" ? "nav-item nav-logo active-logo" : "nav-item nav-logo"
        }>
        {" "}
        {props.value}{" "}
      </button>{" "}
    </li>
  );
}
export default Nav;
