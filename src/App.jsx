import { useState } from 'react'
import Learner from './components/Learner'
import { learnersData } from './components/data'
import './App.css'


function App() {
  const [learners, setlearners] = useState(learnersData)
console.log(learners)
  return (
       <Learner learners = {learners} />
  )
}

export default App
