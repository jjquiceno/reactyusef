import { useState } from 'react'
import './App.css'
import { Searchbar } from './components/Searchbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section >
        <h1>componente de la barra de busqueda</h1>
        <a href="../index.html">ir al primero</a>
        <br />
        <a href="../index3.html">ir al tercero</a>
        <br />
        <Searchbar/>
        <br/>
      
    </section>
  )
}

export default App
