import { useState } from 'react'
import './App1.css'
import { Botonblanco } from './components/Botonblanco'


function App() {
  const [count, setCount] = useState(0)

  return (
    <section className='caja'>
        <div className='celular'>
        <img src="../public/ensalada1.png" alt="" className='Imgensalada'/>
        <h1 className='titulo'>Fast delivery at <br />your doorstep</h1>
        <p className='descripcion'>
          Home delivery and online reservation <br />system for restaurants & café
        </p>
        <Botonblanco/>
        </div>
    </section>
  )
}

export default App