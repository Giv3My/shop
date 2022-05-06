import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Header, ModalCheckout } from './components';
import { Goods, Orders } from './pages';

import './App.css';

function App() {
  const { cartItems } = useSelector(({ cart }) => cart);

  return (
    <>
      <Header cartItems={cartItems} />
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Goods />} />
          <Route exact path='/orders' element={<Orders />} />
        </Routes>
      </div>
      <ModalCheckout cartItems={cartItems} />
    </>
  );
};

export default App;