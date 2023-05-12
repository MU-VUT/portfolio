import React from "react";

const Start = () => {
  var logo = "{MU}";
  return (
    <div className="start">
      <h1>{logo}</h1>
      <h2>Welcome to my personal page!</h2>
      <ul>
        <li>
          <button>Start the Game!</button>
        </li>
        <li>
          <button>Skip to portfolio</button>
        </li>
      </ul>
    </div>
  );
};

export default Start;
