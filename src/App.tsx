import React from 'react';
import LoginScreen from './components/LoginScreen';
import Orders from './components/Orders';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<LoginScreen />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
