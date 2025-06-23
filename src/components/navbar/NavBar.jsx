import './NavBar.css'
import { Link } from 'react-router-dom'
import shoppingcart from '../../assets/cart-variant.svg'

export default function NavBar ({ cart, toggleSidebar }) {

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
                        <img className="icon" onClick={toggleSidebar} src={shoppingcart} />
                        <div className="cartNumbers">
                            <div className="cartNumber">{numItems}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}