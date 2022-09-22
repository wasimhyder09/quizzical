export default function Start(props) {
  return(
    <div className="front-page">
      <h1 className="title">Quizzical</h1>
      <p className="description">Take this quiz to measure your intelligence!</p>
      <button className="start-quiz" onClick={() => props.fetchQuestions()}>Start quiz</button>
    </div>
  )
}