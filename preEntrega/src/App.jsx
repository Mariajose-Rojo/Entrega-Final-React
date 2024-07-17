import { useState } from 'react'

// import './App.css'
import Navbar from './components/Navbar'
import Promocion from './components/Promocion'
import Banner from './components/Banner'
import ItemCount from './components/ItemCount'

function App() {
  return (
    <>
      <Promocion/>
      <Navbar/>
      <Banner/>
      <ItemCount stock={20}/>
    </>
  )
}

export default App
