import React from "react";

const Start = ({ handleClick }) => {
  var logo = "{MU}";
  return (
    <div className="start">
      <h1>{logo}</h1>
      <h2>Welcome to my personal page!</h2>
      <ul>
        <li>
          <button onClick={() => handleClick("Game")}>Start the Game!</button>
        </li>
        <li>
          <button onClick={() => handleClick("About")}>Skip to portfolio</button>
        </li>
      </ul>
    </div>
  );
};

export default Start;
