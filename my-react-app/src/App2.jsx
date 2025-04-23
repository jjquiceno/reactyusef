import { useState } from 'react'
import './App2.css'
import { Iconoopaco } from './components/Iconoopaco'
import { Botonverde } from './components/Botonverde'

import { faStar, faDroplet, faClock, faLessThan, faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section className='caja'>
        <div className='celular'>
          <div className="mitad-arriba">

          </div>
          <div className="mitad-abajo">

          </div>
        </div>
    </section>
  )
}

export default App
