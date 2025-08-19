import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopNav from './Components/TopNav'
import PortfolioLanding from './Components/PortfolioLanding'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TopNav /> 
      <PortfolioLanding />
    </>
  )
}

export default App
