import './App.css'
import NavBar from './components/navbar/NavBar'
import { Outlet } from 'react-router-dom'
import { useState } from 'react';
import ShoppingCart from './pages/cart/ShoppingCart';
import Sidebar from './pages/sidebar/Sidebar';

function App() {
  //CART STATE NEEDS TO BE HERE (needs to be read by the navbar and stay across changes)
  const [cart, setCart] = useState([]);
  const[isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <NavBar cart={cart} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} toggleSidebar={toggleSidebar} />
      <Outlet context={[cart, setCart]} />
    </>
  )
}

export default App
