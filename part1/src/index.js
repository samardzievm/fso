import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom'

const Header = ({title}) => <div><h1>{title}</h1></div>

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const Statistic = ({type, count}) => <li>{type} {count}</li>

const Statistics = ({good, neutral, bad}) => { 
  const total = good + neutral + bad
  const average = (good - bad)/total; {/*(good: 1, neutral: 0, bad: -1) */}
  const positive = good/total*100
  
  if(total == 0) {
    return (
      <div><p>No feedback given</p></div>
    )
  }
  return (
    <div>
      <h1>Statistics</h1>

      <ul>
        <Statistic type="good" count={good}/>
        <Statistic type="neutral" count={neutral}/>
        <Statistic type="bad" count={bad}/>
      </ul>
      
      <p>Total feedbacks: {total} </p>
      <p>Average: {average} </p>
      <p>Positive: {positive} </p>
    </div>
  )
}

const App = () => {
  const title = "give feedback";

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }
  const handleBad = () => {
    setBad(bad + 1)
  }
  
  return (
    <div>
      <Header title={title} />
      <Button onClick={handleGood} text="good" />
      <Button onClick={handleNeutral} text="neutral" />
      <Button onClick={handleBad} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} /> {/* ex. 1.8 */}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

