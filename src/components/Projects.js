import React from "react";

const mainProjects = [
  {
    name: "ESBP 2023",
    description: "PHP, MySQL, Figma",
    image: "/img/esbp.JPG",
    link: "https://esbp2023.com/",
  },
  {
    name: "Hezký Boudy",
    description: "Adobe xD, Tailwind, UCDC",
    image: "/img/hb.JPG",
    link: "https://hezkyboudy.cz/",
  },
  {
    name: "VAM",
    description: "Vogel's approximation method, JavaScript",
    image: "/img/vam.JPG",
    link: "https://mu-vut.github.io/",
  },
  {
    name: "Portfolio",
    description: "React, Sass, Framer-motion",
    image: "/img/portfolio.JPG",
    link: "#",
  },
  {
    name: "Potravinové alergie",
    description: "Wordpress, Elementor",
    image: "/img/pa.JPG",
    link: "https://potravinovealergie.cz/",
  },
  {
    name: "FCH & CESA BUT",
    description: "WebMaster, Templates",
    image: "/img/but.JPG",
    link: "https://www.fch.vut.cz/en/",
  },
];
const sideProjects = [
  {
    name: "Board Game",
    description: "Game design, Graphics, Testing",
    image: "/img/board.png",
    link: "href",
  },
  {
    name: "Video Ad",
    description: "Facebook Reel Ad, Adobe Premiere Pro",
    image: "/img/video.png",
    link: "https://drive.google.com/file/d/1ifvmMDmCAmtxKMiNhBonz0uBxbK-bOrY/view?usp=sharing",
  },
  {
    name: "Publications",
    description: "Smart technologies in freight transport",
    image: "/img/ig.png",
    link: "https://orcid.org/0000-0002-4125-0351",
  },
  {
    name: "Pedagogy",
    description: "Logistics, Transportation, Supporting structures",
    image: "/img/pedagogy.jpg",
    link: "https://www.vut.cz/en/people/michal-urbanek-161508/vyuka#navigace-vizitka",
  },
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
