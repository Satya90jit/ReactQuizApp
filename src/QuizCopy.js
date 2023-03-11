import axios from "axios";
import React, { useEffect, useState } from "react";
import Result from "./Result";
import Timer from "./Timer";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [ans, setAns] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [qst, setQst] = useState(0);
  const [counter, setCounter] = useState(1);
  const [count, setCount] = useState(30);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/attainu/attainu-eagle/master/assignments/week-4/day-4/quiz.json"
      )
      .then((res) => setCurrentQuestion(res.data[qst]));
  }, [qst]);
console.log(currentQuestion)
  const handleNextOption = () => {
    if (qst > 9) {
      setShowResult(true);
    } else {
      setQst(qst + 1);
      setCounter(counter + 1);
      setCount(30);
    }
  };
  const handleSkipOption = () => {
    if (qst >= 9) {
      setShowResult(true);
    } else {
      setQst(qst + 1);
      setCounter(counter + 1);
      setCount(30);
    }
  };
  const changeOption = (e) => {
    setCurrentAnswer(e.target.value);
  };

  useEffect(() => {
    setTimeout(() => {
      setCount( count - 1);
    }, 1000);
    if (count === 0) {
      setCount(30);
      setQst(qst + 1);
      setCounter(counter + 1);
    }
    console.log(counter)
  },[count]);

  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://raw.githubusercontent.com/attainu/attainu-eagle/master/assignments/week-4/day-4/quiz.json"
  //     )
  //     .then((res) => setCorrectAnswer(res.data[ans]));
  // }, [ans]);
  // console.log(correctAnswer.answer)
  {
    if(correctAnswer.answer === currentAnswer){
   setScore(score+1)
    }
  }
  return (
    <>
      <div className="container">
        {showResult ? (
          <Result/>
        ) : (
          <>
            <div className="question-section">
              <div className="header">
                <div className="question-count">
                  <span>Question {counter} of 10</span>
                </div>
                <h1>00: {count}</h1>
                <div className="timer">

                </div>
              </div>

              <h3 className="question">{currentQuestion.question}</h3>
            </div>
            <div className="answer-section">
              <input
                type="text"
                placeholder="enter your answer"
                value={currentAnswer}
                onChange={changeOption}
              />
              
            </div>
            <div className="action">
              <button onClick={handleSkipOption}>Skip</button>
              <button onClick={handleNextOption}>Next</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Quiz;
