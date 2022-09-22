import {decode} from 'html-entities'

export default function Question(props) {
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

  const quizOptions = options.map(option => {
    return(
      <div className="quiz-options">
        <input type="radio" value={option} name={props.id} id={option} /><label htmlFor={option}>{decode(option)}</label>
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