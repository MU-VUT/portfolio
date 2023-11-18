import React from "react";
import { mainProjects, sideProjects } from "./data.js";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: "",
    };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick(name) {
    this.setState((state) => {
      return { open: state.open === name ? "" : name };
    });
  }

  render() {
    return (
      <div className="projects">
        <h2 className="projects-headers"> Main projects </h2>{" "}
        <div className="projects-grid">
          {" "}
          {mainProjects.map((project) => (
            <Project
              key={project.name}
              name={project.name}
              isOpen={this.state.open}
              handleToggleClick={this.handleToggleClick}
              description={project.description}
              image={project.image}
              placeholder={project.placeholder}
              link={project.link}
            />
          ))}{" "}
        </div>{" "}
        <h2 className="projects-headers"> Side projects </h2>{" "}
        <div className="projects-grid">
          {" "}
          {sideProjects.map((project) => (
            <Project
              key={project.name}
              name={project.name}
              isOpen={this.state.open}
              handleToggleClick={this.handleToggleClick}
              description={project.description}
              image={project.image}
              placeholder={project.placeholder}
              link={project.link}
            />
          ))}{" "}
        </div>{" "}
      </div>
    );
  }
}

class Project extends React.Component {
  render() {
    return (
      <div
        onClick={() => this.props.handleToggleClick(this.props.name)}
        className={
          this.props.isOpen === this.props.name
            ? "projects-item projects-item-open"
            : "projects-item"
        }
      >
        <ProjectInner
          name={this.props.name}
          isOpen={this.props.isOpen}
          description={this.props.description}
          image={this.props.image}
          link={this.props.link}
          placeholder={this.props.placeholder}
        />{" "}
      </div>
    );
  }
}

function ProjectInner(props) {
  if (props.isOpen !== props.name) {
    return <h2 className="project-header"> {props.name} </h2>;
  }
  return (
    <div className="project-inner">
      <h2 className="project-inner-header"> {props.name} </h2>{" "}
      <p className="project-inner-description"> {props.description} </p>{" "}
      <a
        className="project-inner-button"
        href={props.link}
        target="_blank"
        rel="noreferrer"
      >
        See more
      </a>
      <LazyLoadImage
        className="project-inner-image"
        src={props.image}
        alt={props.name}
        effect="blur"
        placeholderSrc={props.placeholder}
        wrapperClassName="project-inner-image"
      />
    </div>
  );
}

export default Projects;
