import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Sidebar from './components/SideBar';
import Navbar from './components/Navbar';
import ProductDetail from './pages/ProductDetail';
import Home from './pages/Home';
import React from 'react';
import { UserProvider } from './UserContext';

const App = () => {
  return (
    <UserProvider>
    <BrowserRouter>
      <Sidebar />
      <Navbar />
      <Routes>
      <Route path="/" exact element={<Home />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/products" element={<Products />} />
        <Route path="/products/productDetail/:id" element={<ProductDetail />} />
        <Route path="/users/:id" element={<Profile />} /> 
      </Routes>
    </BrowserRouter>
    </UserProvider>
  );
};

export default App;




