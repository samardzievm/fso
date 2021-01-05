import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom'

const Header = ({title}) => <div><h1>{title}</h1></div>

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const Statistics = (props) => {
  return (
    <div>
      <h1>Statistics</h1>
      <ul>
        <li>good {props.good}</li>
        <li>neutral {props.neutral} </li>
        <li>bad {props.bad}</li>
      </ul>
    </div>
  )
}

const App = () => {
  const title = "give feedback";

  const [good, setGood] = useState(0)
  const handleGood = () => {
    setGood(good + 1)
  }

  const [neutral, setNeutral] = useState(0)
  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }
  
  const [bad, setBad] = useState(0)
  const handleBad = () => {
    setBad(bad + 1)
  }
  
  return (
    <div>
      <Header title={title} />
      <Button onClick={handleGood} text="good" />
      <Button onClick={handleNeutral} text="neutral" />
      <Button onClick={handleBad} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

