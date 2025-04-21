import { useState } from 'react'
import './App.css'
import { Icononormal } from './components/Icononormal'
import { faMagnifyingGlass, faLocationDot, faBell, faHouse, faMessage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function App() {
  const [count, setCount] = useState(0)

  return (
    <section >
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
    </section>
  )
}

export default App
