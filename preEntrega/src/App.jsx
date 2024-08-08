import { useState } from 'react';
import Navbar from './components/Navbar';
import Promocion from './components/Promocion';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
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
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App;
