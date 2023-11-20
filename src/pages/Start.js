import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  var logo = "{MU}";

  if (window.innerWidth < 800) {
    return (
      <div className="start">
        <h1> {logo} </h1> <h2> Welcome to my personal page! </h2>
        <p>
          Mobile version is limited. Please use dektop device for full
          experience!
        </p>
        <ul>
          <li>
            <Link className="btn-start" to="/about">
              <button>Understand, get me to portfolio</button>
            </Link>
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="start">
        <h1> {logo} </h1> <h2> Welcome to my personal page! </h2>
        <ul>
          <li>
            <Link className="btn-start" to="/game">
              <button>Start the Game!</button>
            </Link>
          </li>
          <li>
            <Link className="btn-start" to="/about">
              <button>Skip to portfolio</button>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
};

export default Start;
