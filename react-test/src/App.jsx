import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <Card name="Saksham Tyagi" roll="2200320230041" pic={reactLogo}/>
      <Card name="Saksham Tyagi" roll="2200320230041" pic={viteLogo}/>
    </>
  )
}

export default App
