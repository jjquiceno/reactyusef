import { useState } from 'react'
import './App.css'
import { Icongreen } from './components/Icongreen'
import { Botonblanco } from './components/Botonblanco'
import { Botonverde } from './components/Botonverde'
import { Iconoborderradius } from './components/Iconoborderradius'
import { Iconoimg } from './components/Iconoimg'
import { Iconoopaco } from './components/Iconoopaco'

import { faBars, faSliders, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section >
      <h1>este es el template</h1>
    </section>
  )
}

export default App
