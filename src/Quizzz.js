import React, { useState, useEffect } from "react";
import axios from "axios";
import Result from "./Result";
const Quizzz = () => {
  const [score, setScore] = useState(0);
  const [index, setIndex] = useState(0);

  const [currQuiestion, setCurrQuestion] = useState([]);
  const [optionChosen, setOptionChosen] = useState("");
  const hoursMinSecs = { hours: 0, minutes: 0, seconds: 30 };

  const changeOption = (e) => {
    setOptionChosen(e.target.value.trim());
  };

  useEffect(() => {
    //console.log(score);
    axios
      .get(
        "https://raw.githubusercontent.com/attainu/attainu-eagle/master/assignments/week-4/day-4/quiz.json"
      )
      .then((res) => setCurrQuestion(res.data));
  }, [score]);
  const name = localStorage.getItem("name");

  return (
    <div className="Quiz">
      {currQuiestion.map((values, id) => {
        const { question, answer } = values;

        const nextQuestion = () => {
          if (answer.toLowerCase() === optionChosen.toLowerCase()) {
            setScore(score + 1);
          }
          setIndex(index + 1);
        };
        const skipQuestion = () => {
          setIndex(index + 1);
        };
        const finishQuiz = () => {
          if (answer === optionChosen) {
            setScore(score + 1);
          }
          
        };

        if (id === index) {
          return (
            <div key={values.id}>
              <h3 className="h3-tag"> {index + 1}/10 </h3>
              <Timer hoursMinSecs={hoursMinSecs} />
              <h3>{question}</h3>

              <center>
                <input
                  type="text"
                  placeholder="Answer:"
                  onChange={changeOption}
                ></input>
              </center>

              {index === currQuiestion.length - 1 ? (
                <center>
                  <Link onClick={finishQuiz}>Submit</Link>
                </center>
              ) : (
                <center>
                  <button className="nxt-btn" onClick={nextQuestion}>
                    Next
                  </button>
                </center>
              )}
              {index === currQuiestion.length - 1 ? null : (
                <button className="skip-btn" onClick={skipQuestion}>
                  skip
                </button>
              )}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};
export default Quizzz;
