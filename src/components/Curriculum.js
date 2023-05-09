import React from "react";
import { motion } from "framer-motion";

const cvItems = [
  {
    name: "2022 - now",
    desc: "Freelance Front-end Web Developer",
  },
  {
    name: "2020 - now",
    desc: "PhD in Smart Logistic Technology",
    misc: "Brno University of Technology",
  },
  {
    name: "2019 - now",
    desc: "Scientific Researcher",
    misc: "Brno University of Technology",
  },
  {
    name: "2016 - 2018",
    desc: "Master Degree in Automotive and Material Handling Engineering",
    misc: "Brno University of Technology",
  },
];

const skillsItems = [
  {
    name: "front",
    desc: "HTML5, CSS, Sass, Tailwind, Bootstrap, Javascript, React, Framer-Motion, React-Spring, jQuery, Functional programming, SEO, SVG animation",
  },
  { name: "back", desc: "Node.js, npm, MongoDB, PHP, SQL, Wordpress, RapidAPI" },
  { name: "build", desc: "Babel, Webpack, OOP" },
  { name: "devops", desc: "Docker, Kubernetes" },
  { name: "methodology", desc: "BEM, Atomic Design, Systematic approach" },
  { name: "science", desc: "MatLab, Simulink, SciLab, Python, LaTeX, R, FEM analysis" },
  {
    name: "softwares",
    desc: "Photoshop, GIMP, Illustrator, Inkscape, Figma, xD, VSCode, Premiere Pro",
  },
  { name: "languages", desc: "Czech, English" },
];

class Curriculum extends React.Component {
  render() {
    if (window.innerWidth > 1440) {
      return (
        <div className="cv">
          <CVItems />
          <Line />
          <Skills />
        </div>
      );
    }
    return (
      <div className="cv">
        <CVItems />
        <Skills />
      </div>
    );
  }
}

const CVItems = () => {
  return (
    <div className="cv-flex">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        className="cv-flex-header">
        Curriculum
      </motion.h2>
      <div className="cv-flex-items">
        {cvItems.map((item, i) => (
          <motion.div
            key={i}
            className="cv-item"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: cvItems.length,
              delay: window.innerWidth < 1440 ? 0.3 * i : 2 + 0.3 * i,
            }}>
            <h3 className="cv-item-header">{item.name}</h3>
            <p className="cv-item-desc">{item.desc}</p>
            <p className="cv-item-misc">{item.misc}</p>
            <div className="cv-item-line"></div>
            <div className="cv-item-circle"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Line = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scaleY: 0, originX: "100%", originY: "0%" }}
      animate={{ opacity: 1, scaleY: 1, originX: "100%", originY: "0%" }}
      transition={{ ease: "easeInOut", duration: 2 }}
      className="line">
      <div className="line-circle"></div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div className="skills-flex">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        className="skills-flex-header">
        Skills
      </motion.h2>
      <div className="skills-flex-items">
        {skillsItems.map((item, i) => (
          <motion.div
            key={i}
            className="skills-item"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: cvItems.length,
              delay: window.innerWidth < 1440 ? 0.3 * i : 2 + 0.3 * i,
            }}>
            <h3 className="skills-item-header">{item.name}</h3>
            <p className="skills-item-desc">{item.desc}</p>
            <p className="skills-item-misc">{item.misc}</p>
            <div className="skills-item-line"></div>
            <div className="skills-item-circle"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Curriculum;
