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

  let id = 0
  const quizOptions = options.map(option => {
    return(
      <div className="quiz-options">
        <input type="radio" value={option} name={id} /> {option}
      </div>
    )
    id++
  })

  return (
    <div className="questions">
      <h2 className="question">{props.quiz.question}</h2>
      {quizOptions}
    </div>
  )
}