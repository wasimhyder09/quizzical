import {useState, useEffect} from 'react'
import Start from './components/Start'
import Question from './components/Question'
import './App.css';

function App() {
  const[questions, setQuestions] = useState([])
  const [hasQuestions, setHasQuestions] = useState(false)

  const fetchQuestions = async() => {
    const url = 'https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple&category=11'
    const res = await fetch(url)
    const result = await res.json()
    setQuestions(result.results)
    setHasQuestions(true)
  }

  let id = 0
  const answers = []
  let optionVals = []
  let questionText = []
  let text = ''
  let options = []

  questions.map(question => {
    answers[id] = question.correct_answer
    questionText[id] = question.question
    text = question.incorrect_answers.toString();
    text = text+','+question.correct_answer
    optionVals = text.split(',')
    shuffle_array(optionVals)
    options[id] = optionVals
    id++
  })

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

  const params = [questionText, options]

  const quizQuestions = <Question quizes = {params} />

  return (
    <div className="container">
      {(hasQuestions ? quizQuestions : <Start fetchQuestions={fetchQuestions} />)}
      {hasQuestions && <div class="results"><button className="check-answers">Check answers</button></div>}
    </div>
  );
}

export default App;
