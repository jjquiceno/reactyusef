import { useState } from 'react'
import './App.css'
import { Icongreen } from './components/Icongreen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section >
      <Icongreen 
        symbl="☰"
      />
      <Icongreen 
        symbl=""
      />
    </section>
  )
}

export default App
