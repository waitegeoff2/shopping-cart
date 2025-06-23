import './Sidebar.css'

export default function Sidebar({isOpen, toggleSidebar, cart}) {

    return(
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <button className='close-cart' onClick={toggleSidebar}>Close</button>
            <div className="sidebar-contents">
                <h2 className="cart-title">Your Cart:</h2>
                <ul className="cartList">
                    {cart.map((cartItem) =>(
                        <li>{cartItem.title}</li>
                    ))}
                </ul>
            </div>
        </div>
        
    )
}