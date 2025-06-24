import './Sidebar.css'

export default function Sidebar({isOpen, toggleSidebar, cart, setCart}) {

    const totalPrice = cart.reduce((total, product)=> total + product.price, 0)
    
    function handleDeleteItem(index) {
        //delete item from cart state at that index
        const newCartArr = [...cart]
        newCartArr.splice(index, 1)
        setCart(newCartArr)
    }

    console.log(cart)

    return(
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <button className='close-cart' onClick={toggleSidebar}>Close</button>
            <div className="sidebar-contents">
                <h2 className="cart-title">Your Cart:</h2>
                <ul className="cartList">
                    {cart.map((cartItem, index) =>(
                        <div className='cart-list'>
                            <li>{cartItem.title}: ${cartItem.price}</li>
                            <button onClick={()=>handleDeleteItem(index)} className='delete-btn'>X</button>
                        </div>
                    ))}
                </ul>
                <h2>Your total: ${totalPrice}</h2>
            </div>
        </div>
        
    )
}