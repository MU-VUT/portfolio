import React, { useState } from "react";
import { motion } from "framer-motion";

// Numbers of animated elements
const numbers = [];
for (let i = 0; i < Math.floor(Math.random() * (7 - 5 + 1)) + 5; i++) {
  numbers.push(i);
}

function About() {
  if (window.innerWidth > 1440) {
    return (
      <div className="about">
        {numbers.map((number) => (
          <Ellipse key={number} number={number} />
        ))}
        <Inner />
      </div>
    );
  }
  return (
    <div className="about">
      <Inner />
    </div>
  );
}

function Inner() {
  return (
    <div className="inner" style={{ zIndex: 10 }}>
      <h2> Hi, my name is Michal. </h2>
      <p>
        I am Frontend Developer from Brno, currently part of the FrontEnd
        chapter development team in Papirfly. Working on Angular based Digital
        Asset Management app.
      </p>
      <p>
        I am interested in modern web technologies, web applications and games.
        I like to push things and boundaries of knowledge forward.
      </p>
    </div>
  );
}

// Setting random color & size to every element
var colors = ["#dcc48e", "#2ebfa5", "#c6c6c6"];
var s = 200; //number of slices
var speeds = [],
  width = [],
  height = [],
  radius = [],
  color = [],
  zIndex = [],
  a = [],
  b = [],
  slicedY1 = [],
  slicedY2 = [],
  slicedY = [],
  slicedX1 = [],
  slicedX2 = [],
  slicedX = [],
  randomS = [];

for (let i = 0; i < numbers.length; i++) {
  speeds.push(Math.floor(Math.random() * (40 - 2 + 1)) + 40);
  width.push(Math.floor(Math.random() * (200 - 50 + 1)) + 50);
  height.push(width[i] / 2);
  radius.push(width[i] / 20);
  let colorIndex = Math.floor(Math.random() * colors.length);
  color.push(colors[colorIndex]);
  zIndex.push(Math.floor(Math.random() * (20 - (1 + 1)) + 1));
  a.push(Math.floor(Math.random() * (450 - 350 + 1)) + 350); //Size of major axis
  b.push(Math.floor(Math.random() * (450 - 150 + 1)) + 150); //Size of minor axis
  randomS.push(Math.floor(Math.random() * (s - 0 + 1)) + 0);
}
// Elipse array of coordinates

// creating two-dimensional array for x-pos
var positionX = [];
for (let i = 0; i < numbers.length; i++) {
  positionX[i] = [];
  slicedX1[i] = [];
  slicedX2[i] = [];
  slicedX[i] = [];
  for (let j = 1; j < s + 1; j++) {
    positionX[i].push(a[i] * Math.cos(((2 * Math.PI) / s) * j));
  }
  slicedX1[i] = positionX[i].slice(0, randomS[i]);
  slicedX2[i] = positionX[i].slice(randomS[i], s);
  slicedX[i] = slicedX2[i].concat(slicedX1[i]);
}

// creating two-dimensional array for y-pos
var positionY = [];
for (let i = 0; i < numbers.length; i++) {
  positionY[i] = [];
  slicedY1[i] = [];
  slicedY2[i] = [];
  slicedY[i] = [];

  for (let j = 1; j < s + 1; j++) {
    positionY[i].push(b[i] * Math.sin(((2 * Math.PI) / s) * j));
  }
  slicedY1[i] = positionY[i].slice(0, randomS[i]);
  slicedY2[i] = positionY[i].slice(randomS[i], s);
  slicedY[i] = slicedY2[i].concat(slicedY1[i]);
}

const Ellipse = ({ number }) => {
  const [active, setActive] = useState(false);

  function handleHover() {
    setActive(true);
    setTimeout(() => {
      setActive(false);
    }, 1500);
  }

  return (
    <motion.div
      onMouseEnter={handleHover}
      initial={{ opacity: 0 }}
      animate={{ opacity: active ? 0 : 1 }}
      transition={{ type: "spring", stiffness: 50 }}
    >
      <motion.div
        style={{
          width: width[number],
          height: height[number],
          borderRadius: radius[number],
          backgroundColor: color[number],
          // zIndex: zIndex[number],
        }}
        animate={{ x: slicedX[number], y: slicedY[number] }}
        transition={{
          ease: "linear",
          repeat: Infinity,
          duration: speeds[number],
        }}
        className={"big"}
      ></motion.div>
    </motion.div>
  );
};

export default About;
