import './DisplayCards.css'
import { useState } from 'react';

export default function DisplayCards({products, setProducts, cart, setCart}) {

    //overwrite this each time the input is changed
    const [productNum, setProductNum] = useState(1);

    function addToCart(index) {
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
                            <input type='text' />
                            <button className='incrementBtn'>-</button>
                            <button onClick={()=>addToCart(index)}>Add to Cart</button>
                        </form>
                        {/* this needs to be a FORM with a submit button */}
                    </div>
                </div>
            ))}
        </div>
       </> 
    )
}