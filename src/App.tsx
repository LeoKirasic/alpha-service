import React from 'react';
import LoginScreen from './components/LoginScreen';
import Orders from './components/Orders';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewOrder from './components/NewOrder';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<LoginScreen />}></Route>
        <Route path="orders" element={<Orders />}></Route>
        <Route path="new-order" element={<NewOrder />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
