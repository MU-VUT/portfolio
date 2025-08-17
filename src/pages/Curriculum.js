import React from "react";
import { motion } from "framer-motion";
import { cvItems, skillsItems } from "../components/data.js";

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
        className="cv-flex-header"
      >
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
              duration: cvItems.length / 2,
              delay: 0.3 * i,
            }}
          >
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
      className="line"
    >
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
        className="skills-flex-header"
      >
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
              duration: cvItems.length / 2,
              delay: 0.3 * i,
            }}
          >
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
