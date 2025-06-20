import './App.css'
import NavBar from './components/navbar/NavBar'
import { Outlet } from 'react-router-dom'

function App() {
  //CART STATE NEEDS TO BE HERE (needs to be read by the navbar and stay across changes)

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default App
