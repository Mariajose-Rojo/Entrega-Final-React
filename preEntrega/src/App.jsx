import { useState } from 'react';
import Navbar from './components/Navbar';
import Promocion from './components/Promocion';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import Chekout from './components/Chekout';
//importaciones para rutas:
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartContextProvider from './components/context/CartContext';

function App() {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <Promocion />
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/chekout" element={<Chekout/>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App;
