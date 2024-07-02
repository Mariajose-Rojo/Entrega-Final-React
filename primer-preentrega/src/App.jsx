import { useState } from 'react'

// import './App.css'
import Navbar from './components/Navbar'
import Promocion from './components/Promocion'
import Banner from './components/Banner'

function App() {
  return (
    <>
      <Promocion/>
      <Navbar/>
      <Banner/>
    </>
  )
}

export default App
