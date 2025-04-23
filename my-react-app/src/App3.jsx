import { useState } from 'react'
import './App3.css'
import { Iconoopaco } from './components/Iconoopaco'
import { Botonverde } from './components/Botonverde'

import { faStar, faDroplet, faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section className='caja'>
        <div className='celular'>
          <div className="verde">
            <div className="componentes-arriba">
              <div className="componentes-int">
                <Iconoopaco/>
              </div>
              <div className="componentes-int">
                <p className='white'>Food details</p>
              </div>
              <div className="componentes-int">
                <Iconoopaco/>
              </div>
            </div>
            <div className="blanco">
              <div className="circulo">

              </div>
              <div className="info">
                <div className="info-int">
                  <div className='info-int-texts'>
                    <div className='text-container'>
                      <h3>Avocado salad</h3>
                      <p>$15.00</p>
                    </div>
                    <div className='contador-container'>
                      <div className='contador'>
                        <p>- 1 +</p>
                      </div>
                    </div>
                  </div>
                  <div className='info-int-iconos'>
                    <div className='flexs'>
                      <FontAwesomeIcon className='iconoA' icon={faStar}/>
                      <p>4.5</p>
                    </div>
                    <div className='flexs'>
                      <FontAwesomeIcon className='iconoR' icon={faDroplet}/>
                      <p>100 kcal</p>
                    </div>
                    <div className='flexs'>
                      <FontAwesomeIcon className='iconoA' icon={faClock}/>
                      <p>20 min</p>
                    </div>
                  </div>
                </div>
                <div className="info-int">
                  <h3>About food</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, natus!</p>
                </div>
                <div className="info-int btn">
                  <Botonverde/>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default App
