import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Child from "./components/Child"
import State1 from './components/State1'

function App() {

  // const user = {
  //   name:"AJ",
  //   id: 27,
  //   hobbies: ["Reading"],
  //   ismem: true,
  // }

  return (
    <>
    <State1 />
    {/* <Child user={user}></Child>
      <Card name="Saksham Tyagi" roll="2200320230041" pic={reactLogo}/>
      <Card name="Saksham Tyagi" roll="2200320230041" pic={viteLogo}/> */}


    </>
  )
}

export default App