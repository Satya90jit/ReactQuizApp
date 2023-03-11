import React from 'react'

function quizmultiple() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [correctAns, setCorrectAns] = useState(0);
    const [showResult, setShowResult] = useState(false);
  
    const handleNextOption = () => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowResult(true);
      }
    };
  
    const handleAnswerOption = (isCorrect) => {
      if (isCorrect) {
        setScore(score + 1);
        setCorrectAns(correctAns + 1);
      }
   
    };
    const handleSkipOption =()=>{
      // setScore(score+0)
      setCorrectAns(correctAns +0)
    }
  return (
    <>
    {" "}
    <div className="container">
      {showResult ? (
        <Result score={score} correctAns={correctAns} />
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <h2>Welcome</h2>
              <span>
                Question {currentQuestion + 1} of {questions.length}
              </span>
            </div>
            
            <div className="question-text">
              <h3>{questions[currentQuestion].questtionText}</h3>
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((ans, i) => {
              return (
                <button
              
               
                  key={i}
                  onClick={() => handleAnswerOption(ans.isCorrect)}
                >
                  {ans.answertext}{" "}
                </button>
              );
            })}

            <div className="action">
              <button onClick={handleSkipOption}>Skip</button>
              <button  onClick={handleNextOption}>Next</button>
            </div>
          </div>
        </>
      )}
    </div>
  </>
  )
}

export default quizmultiple