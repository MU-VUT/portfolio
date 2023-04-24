import React from "react";

const mainProjects = [
  {
    name: "ESBP 2023",
    description: "PHP, MYSQL, FIGMA",
    image: "/img/esbp.JPG",
    link: "https://esbp2023.com/",
  },
  { name: "Hezký Boudy", description: "popis2", image: "url of image", link: "href" },
  { name: "VAM", description: "popis3", image: "url of image", link: "href" },
  { name: "VAM", description: "popis3", image: "url of image", link: "href" },
  { name: "VAM", description: "popis3", image: "url of image", link: "href" },
  { name: "VAM", description: "popis3", image: "url of image", link: "href" },
  { name: "VAM", description: "popis3", image: "url of image", link: "href" },
];
const sideProjects = [
  { name: "Board Game", description: "popis4", image: "url of image", link: "href" },
  { name: "Video Ad", description: "popis5", image: "url of image", link: "href" },
  { name: "R&D", description: "popis6", image: "url of image", link: "href" },
  { name: "R&D", description: "popis6", image: "url of image", link: "href" },
  { name: "R&D", description: "popis6", image: "url of image", link: "href" },
];

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
        }>
        <ProjectInner
          name={this.props.name}
          isOpen={this.props.isOpen}
          description={this.props.description}
          image={this.props.image}
          link={this.props.link}
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
      <a className="project-inner-button" href={props.link} target="_blank" rel="noreferrer">
        See more
      </a>
      <img className="project-inner-image" src={props.image} alt={props.name} />
    </div>
  );
}

export default Projects;
