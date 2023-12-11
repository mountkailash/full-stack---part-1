import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Header.jsx'
import Content from './Content.jsx'
import Total from './Total.jsx'
import Part from './Part.jsx'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
    {
    name: 'fundamentals of react',
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
    <>
      <div>
        <Header course = {course}/>
        <Content parts = {course.parts} />
        <Total parts = {course.parts} />
        
      </div>
    </>
  )
}

export default App
