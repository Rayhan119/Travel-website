import React from "react";
import "./NextAdventure.css";
const NextAdventure = () => {
  return (
    <div>
      <div className="next-adventure text-center">
        <div className="next-adventaure-top">
          <h1>
            Chose a country for your next <br /> adventure
          </h1>
          <h4>we will inform you what is the best offer for you....</h4>
        </div>
        <div className="next-adventaure-down">
          <input type="text" placeholder="Travel type?" />
          <div className="button-advenature">
            <button>Find Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextAdventure;
