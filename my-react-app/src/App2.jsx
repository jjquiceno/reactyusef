import { useState } from 'react'
import './App2.css'
import { Iconoopaco } from './components/Iconoopaco'
import { Botonverde } from './components/Botonverde'
import { Icongreen } from './components/Icongreen'
import { Icononormal } from './components/Icononormal'
import { Iconoimg } from './components/Iconoimg'
import { Searchbar } from './components/Searchbar'

import { faBars, faSliders, faCartShopping, faMagnifyingGlass, faLocationDot, faBell, faHouse, faMessage } from '@fortawesome/free-solid-svg-icons'
import { faStar, faDroplet, faClock, faLessThan, faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section className='caja'>
        <div className='celular'>
          <div className="mitad-arriba">
            <div className="header_arriba">
              <Icongreen icono={<FontAwesomeIcon icon={faBars} />}/>
              <div className="location">
                <Icononormal iconon={<FontAwesomeIcon icon={faLocationDot} style={{ color: '#41a02a' }} />}/>
                <span className='nombre_ciudad'>Magura, BD</span>
              </div>
              <Iconoimg/>
            </div>
            <div className="saludo_titulo">
              <p className="hi-text">Hi Rinku</p>
              <h2 className="title">Find your food</h2>
            </div>
            <div className="search_bar searchbar-small">
              <Searchbar/>
            </div>
            <div className="categorias">
              <span className="category_active">Food</span>
              <span className="category">Fruits</span>
              <span className="category">Vegetables</span>
              <span className="category">Grocery</span>
            </div>
          </div>
          <div className="mitad-abajo">

          </div>
        </div>
    </section>
  )
}

export default App
