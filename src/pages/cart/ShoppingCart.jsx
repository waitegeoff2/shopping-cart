import './ShoppingCart.css'
import { useOutletContext } from 'react-router-dom';

//REPLACE THIS WITH SIDEBAR CART


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