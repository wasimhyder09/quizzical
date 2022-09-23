import {decode} from 'html-entities'
import {useState} from 'react'

export default function Question(props) {
  const[quizAnswers, setQuizAnswers] = useState([])

  function handleChange(event) {
    // const {name, value} = event.target
    // setQuizAnswers(prevAnswer =>({
    //   ...prevAnswer,
    //   [event.target.name]: event.target.value
    // }))
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
            name={`radion-name-${count-1}`}
            value={props.quizes[1][count-1][0]}
            id={props.quizes[1][count-1][0]}
            onChange={handleChange}
          /><label htmlFor={props.quizes[1][count-1][0]}>{decode(props.quizes[1][count-1][0])}</label>
          <input
            type="radio"
            name={`radion-name-${count-1}`}
            value={props.quizes[1][count-1][1]}
            id={props.quizes[1][count-1][1]}
            onChange={handleChange}
          /><label htmlFor={props.quizes[1][count-1][1]}>{decode(props.quizes[1][count-1][1])}</label>
          <input
            type="radio"
            name={`radion-name-${count-1}`}
            value={props.quizes[1][count-1][2]}
            id={props.quizes[1][count-1][2]}
            onChange={handleChange}
          /><label htmlFor={props.quizes[1][count-1][2]}>{decode(props.quizes[1][count-1][2])}</label>
          <input
            type="radio"
            name={`radion-name-${count-1}`}
            value={props.quizes[1][count-1][3]}
            id={props.quizes[1][count-1][3]}
            onChange={handleChange}
          /><label htmlFor={props.quizes[1][count-1][3]}>{decode(props.quizes[1][count-1][3])}</label>
        </div>
      </div>
    )

  })

  return (
      <div className="test-questions">
        {quizOptions}
      </div>
  )
}