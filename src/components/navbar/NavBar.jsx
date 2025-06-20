import './NavBar.css'
import { Link } from 'react-router-dom'
import shoppingcart from '../../assets/cart-variant.svg'

export default function NavBar ({ cart, isSidebarOpen, setIsSidebarOpen, toggleSidebar }) {

    const numItems = cart.length;

    return (
        <>
            <div className="navBar">
                <div className="navLinks">
                    <Link to ="/">Home</Link>
                    <Link to ="shop">Shop</Link>
                </div>
                <div className="navCart">
                    <div className="cartIcon">
                        <Link to='cart'><img className="icon" onClick={toggleSidebar} src={shoppingcart} /></Link>
                        <div className="cartNumbers">
                            <div className="cartNumber">{numItems}</div>
                        </div>
                    </div>
                </div>
                {/* CART */}
                {/* CHECKOUT */}
            </div>
        </>
    )
}