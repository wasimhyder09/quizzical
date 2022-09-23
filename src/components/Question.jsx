import {decode} from 'html-entities'
import {useState} from 'react'

export default function Question(props) {
  const[quizAnswers, setQuizAnswers] = useState([])
  // }

  let options = []
  props.quiz.incorrect_answers.map(option => {
    options.push(option)
  })
  options.push(props.quiz.correct_answer)


  function shuffle_array(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  shuffle_array(options)


  function handleChange(event) {
    // const {name, value} = event.target
    // setQuizAnswers(prevAnswer =>({
    //   ...prevAnswer,
    //   [event.target.name]: event.target.value
    // }))
    // console.log(event.target.name)
    // console.log(event.target.value)
    // const data = quizAnswers
    const dataCopy = (quizAnswers.length > 0 ? quizAnswers : [...quizAnswers])

    // dataCopy.splice(event.target.name, 1, event.target.value)
    dataCopy[event.target.name] = event.target.value
    console.log(dataCopy)

    setQuizAnswers(dataCopy)

  }
    console.log(quizAnswers)


  const quizOptions = options.map(option => {
    // console.log(quizAnswers[props.id])
    return(
      <div className="quiz-options">
        <input type="radio" value={option} name={props.id} id={option} onChange={handleChange} /><label htmlFor={option}>{decode(option)}</label>
      </div>
    )
  })

  return (
    <div className="questions">
      <h2 className="question">{decode(props.quiz.question)}</h2>
      <div className="radio-buttons">
        {quizOptions}
      </div>
    </div>
  )
}