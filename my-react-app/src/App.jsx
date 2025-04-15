import { useState } from 'react'
import './App.css'
import { Icongreen } from './components/Icongreen'

import { faBars, faSliders, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section >
      <Icongreen 
        icono={<FontAwesomeIcon icon={faBars} />}
      />
      <br />
      <Icongreen 
        icono={<FontAwesomeIcon icon={faSliders} />}
      />
      <br />
      <Icongreen 
        icono={<FontAwesomeIcon icon={faCartShopping} />}
      />
    </section>
  )
}

export default App
