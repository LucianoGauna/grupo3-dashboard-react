import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/SideBar';
import Navbar from './components/Navbar';
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
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;
