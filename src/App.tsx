import { useState } from 'react'
import { Characters } from './components/characters'
import './App.css'

function App() {

  const [count, setCount] = useState(0)

  return (
    <div className="App">


      <h1>PERSONAGENS</h1>

      <div className="card">

        <Characters />


      </div>
    </div>
  )
}

export default App
