import { useState } from 'react'
import './App.css'
import Countries from './Componnts/Countries/countries'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Welocme to React world tour</h2>
      <Countries></Countries>
    </>
  )
}

export default App
