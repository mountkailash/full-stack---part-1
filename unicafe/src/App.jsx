import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Header.jsx'
import Button from './Button.jsx'
import Statistics from './Statistics.jsx'

function App() {
  const header = 'give feedback';
  const stats = 'statistics';
  // save click of each button to its own state
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
    <>
      <Header header = {header}/>
      <Button handleGood = {handleGood} handleNeutral = {handleNeutral} handleBad = {handleBad}/>
      <Statistics stats = {stats} good = {good} neutral = {neutral} bad = {bad}/>
    </>
  )
}

export default App
