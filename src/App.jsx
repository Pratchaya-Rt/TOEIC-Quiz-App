import { createContext, useState } from 'react'
import './App.css'
import Menu from './components/Menu'
import Quiz from './components/Quiz'
import Score from './components/Score'

export const DataContext = createContext()

function App() {
  const [appState,setAppState] = useState('menu')
  const [score,setScore] = useState(0)
  return (
    <DataContext.Provider value={{appState,setAppState,score,setScore}}>
      <div className='flex justify-center items-center flex-col'>
        <h1 className='text-2xl my-10'>TOEIC Quiz</h1>
        {appState === 'menu' && <Menu/>}
        {appState === 'quiz' && <Quiz/>}
        {appState === 'score' && <Score/>}
      </div>
    </DataContext.Provider>
  )
}

export default App
