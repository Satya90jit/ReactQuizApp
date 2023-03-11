import React, { useState, useEffect } from "react";
import axios from "axios";
// import Result from "./Result";
import Timer from "./Timer";
import { Link } from "react-router-dom";
import Result from "./Result";
// import { useNavigate } from "react-router-dom";
const Quizzz = () => {
  const [score, setScore] = useState(0);
  const [index, setIndex] = useState(0);
  const [currQuiestion, setCurrQuestion] = useState([]);
  const [optionChosen, setOptionChosen] = useState("");
  const hoursMinSecs = { hours: 0, minutes: 0, seconds: 30 };
  const [showResult , setShowReslt]=useState(false)

  const changeOption = (e) => {
    setOptionChosen(e.target.value.trim());
  };

  // const navigate = useNavigate();

  useEffect(() => {
    //console.log(score);
    axios
      .get(
        "https://raw.githubusercontent.com/attainu/attainu-eagle/master/assignments/week-4/day-4/quiz.json"
      )
      .then((res) => setCurrQuestion(res.data));
  }, [score]);

 

  return (
    <div className="Quiz">
      {
        showResult?(<Result score={score} />):(
      <>
      {currQuiestion.map((values, id) => {
        const { question, answer } = values;
        console.log("values" ,values)
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
          setShowReslt(true)
          // navigate("./Result");
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
                <Link 
                to={"/Result"} 
                onClick={finishQuiz}>
                  Submit
                </Link>
              ) : (
                <button className="nxt-btn" onClick={nextQuestion}>
                  Next
                </button>
              )}
              {index === currQuiestion.length - 1 ? null : (
                <button className="skip-btn" onClick={skipQuestion}>
                  skip
                </button>
              )}
            </div>
          );
        }
      })}
      </>
        )
      }


    </div>
  );
};
export default Quizzz;
