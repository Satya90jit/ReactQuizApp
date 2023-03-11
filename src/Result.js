import React from "react";
import { Link } from "react-router-dom";

function Result(props) {
  console.log("props",props)
  const name = localStorage.getItem("name");
  return (
    <>
      <div className="score-section">
        <h2 className="congrats">congrats</h2>
        <div className="namebx">
          <h4>Dear :{name}</h4>
          <h3 className="name"> </h3>
        </div>
        <h4 className="totalScore">/10</h4>

        <h4>Your correct answer is 0 out of 10</h4>
        <Link to="/start"
          className="playAgain"  >
          Take another Test
        </Link>
      </div>
    </>
  );
}

export default Result;
