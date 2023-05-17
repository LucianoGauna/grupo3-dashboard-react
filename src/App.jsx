import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import '../src/App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SideBar from './components/SideBar';
import Sales from './pages/Sales';
import Clients from './pages/Clients';



function App() {
  return (
    <BrowserRouter>
        <div className='flex'>
          <SideBar />
          <div className="content">
            <Navbar />
            <Routes>
              <Route path='/' exact element={<Home />} />
              <Route path='/sales' element={<Sales />} />
              <Route path='/clients' element={<Clients />} />
            </Routes>
          </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
