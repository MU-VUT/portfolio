import React from "react";

const Start = ({ handleClick }) => {
  var logo = "{MU}";

  if (window.innerWidth < 800) {
    return (
      <div className="start">
        <h1> {logo} </h1> <h2> Welcome to my personal page! </h2>{" "}
        <p>Mobile version is limited. Please use dektop device for full experience!</p>
        <ul>
          <li>
            <button onClick={() => handleClick("About")}> Understand, get me to portfolio </button>{" "}
          </li>{" "}
        </ul>{" "}
      </div>
    );
  } else {
    return (
      <div className="start">
        <h1> {logo} </h1> <h2> Welcome to my personal page! </h2>{" "}
        <ul>
          <li>
            <button onClick={() => handleClick("Game")}> Start the Game! </button>{" "}
          </li>{" "}
          <li>
            <button onClick={() => handleClick("About")}> Skip to portfolio </button>{" "}
          </li>{" "}
        </ul>{" "}
      </div>
    );
  }
};

export default Start;
