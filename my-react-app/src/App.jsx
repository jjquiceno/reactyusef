import { useState } from 'react'
import './App.css'
import { Icongreen } from './components/Icongreen'
import { Botonblanco } from './components/Botonblanco'
import { Botonverde } from './components/Botonverde'
import { Iconoborderradius } from './components/Iconoborderradius'
import { Iconoimg } from './components/Iconoimg'
import { Iconoopaco } from './components/Iconoopaco'
import { Icononormal } from './components/Icononormal'
import { Searchbar } from './components/Searchbar'
//import { Tarjeta } from './components/Tarjeta'

import { faBars, faSliders, faCartShopping, faMagnifyingGlass, faLocationDot, faBell, faHouse, faMessage } from '@fortawesome/free-solid-svg-icons'
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
        <a href="../template1.html">ir al template</a>
        <div className='botonesverdes-container'>
          <Icongreen icono={<FontAwesomeIcon icon={faBars} />}/>
          <br />
          <Icongreen icono={<FontAwesomeIcon icon={faSliders} />}/>
          <br />
          <Icongreen icono={<FontAwesomeIcon icon={faCartShopping} />}/>
        </div>
      </div>
      <br />
      <Searchbar/>
      <br />
      <div>
        <h1>componentes de iconos normales</h1>
        <a href="../index.html">ir al primero</a>
        <br />
        <a href="../index2.html">ir al segundo</a>
        <br/>
        <div className='iconos-container'>
            <Icononormal iconon={<FontAwesomeIcon icon={faMagnifyingGlass}/>}/>
            <Icononormal iconon={<FontAwesomeIcon icon={faLocationDot}/>}/>
            <Icononormal iconon={<FontAwesomeIcon icon={faBell}/>}/>
            <Icononormal iconon={<FontAwesomeIcon icon={faHouse}/>}/>
            <Icononormal iconon={<FontAwesomeIcon icon={faMessage}/>}/>
        </div>
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
      <div className="separador"></div>
      <h1>tarjeta</h1>
      {/* <Tarjeta/> */}
    </section>
  )
}

export default App
