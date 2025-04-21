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
      <div>
        <h1>componenetes de los botones verdes</h1>
        <a href="../index2.html">segundo index</a>
        <br />
        <a href="../index3.html">tercer index</a>
        <br />
        <Icongreen icono={<FontAwesomeIcon icon={faBars} />}/>
        <br />
        <Icongreen icono={<FontAwesomeIcon icon={faSliders} />}/>
        <br />
        <Icongreen icono={<FontAwesomeIcon icon={faCartShopping} />}/>
      </div>
      <br />
      <div className="separador"></div>
      <div>
        <h1>componentes de santa</h1>
        <Botonblanco/>
        <br /><br />  
        <Botonverde/>
        <br /><br />
        <Iconoborderradius/>
        <br /><br />
        <Iconoimg/>
        <br /><br />
        <Iconoopaco/>
      </div>
    </section>
  )
}

export default App
