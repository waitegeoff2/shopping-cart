import './DisplayCards.css'
import { useState } from 'react';

export default function DisplayCards({products, setProducts, cart, setCart}) {

    //do i need this???
    // const [productNum, setProductNum] = useState(1);

    function addToCart(index, quantity) {
        const addedProduct = products[index];
        console.log(addedProduct) 
        const newCart=[...cart]
        newCart.push(addedProduct)
        setCart(newCart)
    }

    function addOne() {
        //tie it to the index???
    }

    function minusOne() {

    }

    const handleChange = (e) => {
       e.target.value
    }


    console.log(cart)

    return (
       <>
        <div className="cards">
            {products.map((product, index) =>(
                <div className="productCard">
                    <div className="productInfo">
                        <img className="productImage" src={product.image} />
                        <h4>{product.title}</h4>
                        <p>${product.price}</p>
                    </div>
                    <div className="productCartControls">
                        <form className="addToCartInputs" onSubmit={e => e.preventDefault()}>
                            <button className='incrementBtn'>+</button>
                            <input type='number' min='1' max='10' value='1' onChange={handleChange} />
                            <button className='incrementBtn'>-</button>
                            <button type='submit' onClick={()=>addToCart(index, quantity)}>Add to Cart</button>
                        </form>
                        {/* this needs to be a FORM with a submit button */}
                    </div>
                </div>
            ))}
        </div>
       </> 
    )
}