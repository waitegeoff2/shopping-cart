import './App.css'
import NavBar from './components/navbar/NavBar'
import { Outlet } from 'react-router-dom'
import { useState } from 'react';

function App() {
  //CART STATE NEEDS TO BE HERE (needs to be read by the navbar and stay across changes)
  const [cart, setCart] = useState([]);

  return (
    <>
      <NavBar cart={cart} />
      <Outlet context={[cart, setCart]} />
    </>
  )
}

export default App
