import { Link } from "react-router-dom";
import React from "react";

const Popup = ({ handler }) => {
  return (
    <div className="popup">
      <p>
        Do you wanna play <br /> a game?
        <Link to="/game">
          <button>Click here!</button>
        </Link>
      </p>
      <button className="btn-close" onClick={handler}>
        x
      </button>
    </div>
  );
};

export default Popup;
