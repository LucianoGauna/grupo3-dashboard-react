import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SideBar from './components/SideBar';
import Sales from './pages/Sales';
import Clients from './pages/Clients';



function App() {
  return (
    <Home />
  );
}

export default App;
