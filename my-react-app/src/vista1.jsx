import { useState } from 'react'
import './App.css'
import { Icongreen } from './components/Icongreen'

function Vista1() {
  const [count, setCount] = useState(0)

  return (
    <section >
      <h1>esta es la vista 1</h1>  
      <Icongreen 
        symbl="☰"
      />
      <Icongreen 
        symbl=""
      />
    </section>
  )
}

export default Vista1