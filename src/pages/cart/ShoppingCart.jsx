import './ShoppingCart.css'
import { useOutletContext } from 'react-router-dom';

// Use DISPLAYCARDS code to display the content in the shopping cart array
//ADD THIS AS A SIDEBAR?????
// // src/App.js
    // import React, { useState } from 'react';
    // import Sidebar from './components/Sidebar';
    // import './App.css'; // Add global styling if needed

    // function App() {
    //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    //   const toggleSidebar = () => {
    //     setIsSidebarOpen(!isSidebarOpen);
    //   };

    //   return (
    //     <div className="App">
    //       <button onClick={toggleSidebar}>Open Sidebar</button>
    //       <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    //       <div className="main-content">
    //         {/* Your main application content */}
    //         <h1>Welcome to my App!</h1>
    //         <p>This is the main content area.</p>
    //       </div>
    //     </div>
    //   );
    // }

    // export default App;

export default function ShoppingCart() {

    const [cart, setCart] = useOutletContext();

    return (
        <>
            <h3>Here's what's in your cart:</h3>
            <ul className="cartList">
                {cart.map((cartItem) =>(
                    <li>{cartItem.title}</li>
                ))}
            </ul>
        </>
    )
}