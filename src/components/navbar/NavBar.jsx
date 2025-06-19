import './NavBar.css'
import { Link } from 'react-router-dom'
import shoppingcart from '../../assets/cart-variant.svg'

export default function NavBar () {
    return (
        <>
            <div className="navBar">
                <div className="navLinks">
                    <Link to ="/">Home</Link>
                    <Link to ="shop">Shop</Link>
                </div>
                <div className="navCart">
                    <img className="icon" src={shoppingcart} />
                </div>
                {/* CART */}
                {/* CHECKOUT */}
            </div>
        </>
    )
}