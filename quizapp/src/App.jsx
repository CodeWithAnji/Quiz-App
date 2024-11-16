import { useState } from "react";

function App() {

  const [currentquestion, setCurrentQuestion] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const question = [
    {
      questionText: "What is the capital of France?",
      answeroptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "Landon", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Bublin", isCorrect: false },
      ],
    },
    {
      questionText: "Who is the CEO of Tesla?",
      answeroptions: [
        { answerText: "JeffBazos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "What is the Capital of India?",
      answeroptions: [
        { answerText: "Dhaka", isCorrect: false },
        { answerText: "Landon", isCorrect: false },
        { answerText: "Paris", isCorrect: false },
        { answerText: "New Delhi", isCorrect: true },
      ],
    },
    {
      questionText: "What is the Capital of Afghanistan?",
      answeroptions: [
        { answerText: "Colombo", isCorrect: false },
        { answerText: "Landon", isCorrect: false },
        { answerText: "Kabul", isCorrect: true },
        { answerText: "New Delhi", isCorrect: false },
      ],
    },
    {
      questionText: "What is the Capital of Pakistan?",
      answeroptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "Islamabad", isCorrect: true },
        { answerText: "Paris", isCorrect: false },
        { answerText: "Peshawar", isCorrect: false },
      ],
    },
  ];

  const handleAnsweroption = (index, isCorrect) => {
    setAnswered(true)
    setSelectedAnswer(index)
    if (isCorrect) {
      setScore(score + 1)
    }
  }
  const NextQuestion = () => {
    setAnswered(false)
    setSelectedAnswer(null)
    const NextQuestion = currentquestion + 1;
    if (NextQuestion < question.length) {
      setCurrentQuestion(NextQuestion)
    } else {
      setShowScore(true)
    }
  }
  return (
    <>
      <div className="flex justify-center items-center h-screen ">
        <div className="w-full max-w-lg bg-white p-5 rounded shadow-lg ">
          <div className="p-2 border text-center font-bold mb-2 text-xl bg-blue-200  border-blue-400">Quiz App</div>
          {showScore ? <div> 
            You scored {score} of {question.length}
          </div> :
            <div >
              <div className="font-bold">{ question[currentquestion].questionText}</div>
              {question[currentquestion].answeroptions.map((option, index) => (
                <button
                  onClick={() => handleAnsweroption(index, option.isCorrect)}
                  className={`block w-full p-2 mt-2 rounded border ${answered ?
                      option.isCorrect ?
                        "bg-green-200"
                        : selectedAnswer === index ?
                          "bg-red-200"
                          : " "
                      : " "
                    }`}
                >
                  {option.answerText}</button>
              ))}
              <button className={`${answered ? "bg-green-500" : "bg-green-300"} block w-full mt-2 text-white p-2 rounded cursor-pointer`}
                disabled={answered ? "" : "disabled"}
                onClick={NextQuestion}
              >Next Question</button>
              <p className="block  text-center text-gray-400 text-sm mt-2">Question  {currentquestion + 1} of {question.length}</p>
            </div>
            }
        </div>
      </div>
    </>
  )
}

export default App
