import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} exercises={props.exercises1} />
      <Part part={props.part2} exercises={props.exercises2} />
      <Part part={props.part3} exercises={props.exercises3} />

      {/* ex1
      <p>{props.part1} {props.exercises1} </p>
      <p>{props.part2} {props.exercises2} </p>
      <p>{props.part3} {props.exercises3} </p>
      */}

    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p> <i>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3} </i></p>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.part} {props.exercises}</p>
    </div>
  )
}

const App = () => {
  {/*
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  */}
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}  />
      <Content part1={course.parts[0].name} exercises1={course.parts[0].exercises} part2={course.parts[1].name} exercises2={course.parts[1].exercises} part3={course.parts[2].name} exercises3={course.parts[2].exercises} />
      <Total exercises1 = {course.parts[0].exercises} exercises2 = {course.parts[1].exercises} exercises3={course.parts[2].exercises} />
      {/* ex1
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
      */}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))