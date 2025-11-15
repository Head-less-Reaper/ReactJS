import { useState } from 'react'
import React from "react"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'

let arr = [1,2,3,4,5]

function App(props) {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-1 rounded-md'>Vite with {props.name} </h1>
      <Card array={arr}/>
    </>
  )
}

export default App
