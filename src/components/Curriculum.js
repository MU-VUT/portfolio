import React from "react";

//hlavni component
//3 pod nim
// CV component
//  header
//  itemy
//   header
//   desc
//   grafika
// Line component
// Skills component
//  header
//  itemy
//   header
//   desc
//   grafika

const cvItems = [
  {
    name: "2023",
    desc: "Diplom za plavání1Diplom za plavání1Diplom za plavání1",
  },
  { name: "2021", desc: "Diplom za plavání2" },
  { name: "2020", desc: "Diplom za plavání3" },
];

const skillsItems = [
  { name: "Front", desc: "popis1" },
  { name: "Back", desc: "popis2popis2popis2popis2popis2" },
  { name: "UI/UX", desc: "popis3popis3popis3popis3popis3 popis3popis3popis3popis3popis3popis3" },
];

class Curriculum extends React.Component {
  render() {
    return (
      <div className="cv">
        <CVItems />
        <Line />
        <Skills />
      </div>
    );
  }
}

class CVItems extends React.Component {
  render() {
    return (
      <div className="cv-flex">
        <h2 className="cv-flex-header">Curriculum</h2>
        <div className="cv-flex-items">
          {cvItems.map((item) => (
            <CVItem key={item.name} name={item.name} desc={item.desc} />
          ))}
        </div>
      </div>
    );
  }
}

function CVItem(props) {
  return (
    <div className="cv-item">
      <h3 className="cv-item-header">{props.name}</h3>
      <p className="cv-item-desc">{props.desc}</p>
      <div className="cv-item-line"></div>
      <div className="cv-item-circle"></div>
    </div>
  );
}

class Line extends React.Component {
  render() {
    return (
      <div className="line">
        <div className="line-circle"></div>
      </div>
    );
  }
}

class Skills extends React.Component {
  render() {
    return (
      <div className="skills-flex">
        <h2 className="skills-flex-header">Skills</h2>
        <div className="skills-flex-items">
          {skillsItems.map((item) => (
            <SkillsItem key={item.name} name={item.name} desc={item.desc} />
          ))}
        </div>
      </div>
    );
  }
}

function SkillsItem(props) {
  return (
    <div className="skills-item">
      <h3 className="skills-item-header">{props.name}</h3>
      <p className="skills-item-desc">{props.desc}</p>
      <div className="skills-item-line"></div>
      <div className="skills-item-circle"></div>
    </div>
  );
}

export default Curriculum;
