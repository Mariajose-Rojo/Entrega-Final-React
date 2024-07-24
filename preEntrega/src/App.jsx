import { useState } from 'react'

// import './App.css'
import Navbar from './components/Navbar'
import Promocion from './components/Promocion'
import Banner from './components/Banner'
import ItemCount from './components/ItemCount'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
//importaciones para rutas:
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Promocion/>
        <Navbar/>
        <Routes>
          <Route path={"/"} element={<ItemListContainer/>}/>
          <Route path={"/categoria/:id"} element={<ItemListContainer/>}/>
          <Route path={"/item/:id"} element={<ItemDetailContainer/>}/>
        </Routes>
        {/* <ItemCount stock={20}/> */}
        {/* <ItemListContainer/> */}
        {/* <ItemDetailContainer/> */}
      </BrowserRouter>
    </>
  )
}

export default App
