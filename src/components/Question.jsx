import {decode} from 'html-entities'
import {useState} from 'react'

export default function Question(props) {
  const[quizAnswers, setQuizAnswers] = useState([])
  const [calcResult, setCalcResult] = useState(false)
  const[marks, setMarks] = useState(0)

  function handleChange(event) {
    const {name, value} = event.target
    setQuizAnswers(prevAnswer =>({
      ...prevAnswer,
      [name]: value
    }))
  }

  let count = 0
  const quizOptions = props.quizes[0].map(quiz => {
    count++
    return(
      <div className="questions">
        <h2 className="question">{decode(quiz)}</h2>
        <div className="quiz-options">
          <input
            type="radio"
            name={count-1}
            className=
              {`${(calcResult && (props.quizes[1][count-1][0] == quizAnswers[count-1]) && (props.quizes[1][count-1][0] != props.quizes[2][count-1]) ? "wrong-answer" : "")}
              ${(calcResult && (props.quizes[1][count-1][0] == props.quizes[2][count-1]) ? "correct-answer" : "")}`}
            value={props.quizes[1][count-1][0]}
            id={props.quizes[1][count-1][0]}
            onChange={handleChange}
          /><label htmlFor={props.quizes[1][count-1][0]}>{decode(props.quizes[1][count-1][0])}</label>
          <input
            type="radio"
            name={count-1}
            className=
              {`${(calcResult && (props.quizes[1][count-1][1] == quizAnswers[count-1]) && (props.quizes[1][count-1][1] != props.quizes[2][count-1]) ? "wrong-answer" : "")}
              ${(calcResult && (props.quizes[1][count-1][1] == props.quizes[2][count-1]) ? "correct-answer" : "")}`}
            value={props.quizes[1][count-1][1]}
            id={props.quizes[1][count-1][1]}
            onChange={handleChange}
          /><label htmlFor={props.quizes[1][count-1][1]}>{decode(props.quizes[1][count-1][1])}</label>
          <input
            type="radio"
            name={count-1}
            className=
              {`${(calcResult && (props.quizes[1][count-1][2] == quizAnswers[count-1]) && (props.quizes[1][count-1][2] != props.quizes[2][count-1]) ? "wrong-answer" : "")}
              ${(calcResult && (props.quizes[1][count-1][2] == props.quizes[2][count-1]) ? "correct-answer" : "")}`}
            value={props.quizes[1][count-1][2]}
            id={props.quizes[1][count-1][2]}
            onChange={handleChange}
          /><label htmlFor={props.quizes[1][count-1][2]}>{decode(props.quizes[1][count-1][2])}</label>
          <input
            type="radio"
            name={count-1}
            className=
              {`${(calcResult && (props.quizes[1][count-1][3] == quizAnswers[count-1]) && (props.quizes[1][count-1][3] != props.quizes[2][count-1]) ? "wrong-answer" : "")}
              ${(calcResult && (props.quizes[1][count-1][3] == props.quizes[2][count-1]) ? "correct-answer" : "")}`}
            value={props.quizes[1][count-1][3]}
            id={props.quizes[1][count-1][3]}
            onChange={handleChange}
          /><label htmlFor={props.quizes[1][count-1][3]}>{decode(props.quizes[1][count-1][3])}</label>
        </div>
      </div>
    )

  })

  let obtainedMarks = 0
  function calculateResult() {
    const rightAnswers = Object.assign({}, props.quizes[2])
    for (let key in rightAnswers) {
      if(rightAnswers[key] == quizAnswers[key]) {
        obtainedMarks++
      }
    }
    setMarks(obtainedMarks)
    setCalcResult(true)
  }

  return (
    <div>
      <div className="test-questions">
        {quizOptions}
      </div>
      {!calcResult && <div className="results"><button className="check-answers" onClick={calculateResult}>Check answers</button></div>}
      {calcResult && <div className="final-results">Your score is <span className="score">{marks}/{props.quizes[2].length}</span>. <button className="check-answers" onClick={() => props.retakeQuiz()}>Play again</button></div>}
    </div>
  )
}