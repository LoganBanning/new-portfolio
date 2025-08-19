import { useState } from 'react'
import './App.css'
import PortfolioLanding from './Components/PortfolioLanding'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PortfolioLanding />
    </>
  )
}

export default App
