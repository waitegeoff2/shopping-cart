import './App.css'
import NavBar from './components/navbar/NavBar'
import { Outlet } from 'react-router-dom'
import { useState } from 'react';
import Sidebar from './pages/sidebar/Sidebar';

function App() {
  //storing cart state here so entire app can access
  const [cart, setCart] = useState([]);
  const[isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} cart={cart} setCart={setCart} />
      <NavBar cart={cart} toggleSidebar={toggleSidebar} />
      <Outlet context={[cart, setCart]} />
    </>
  )
}

export default App
