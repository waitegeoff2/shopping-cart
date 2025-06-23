import { useState } from "react"
import './Card.css'
//MAKE EACH CARD HERE????
//so that you are making new handleFunctions for EACH CARD, 
//in the current way, you are mapping them all but they all share the same states

export default function Card({ product, cart, setCart }) {
    
    const [productNum, setProductNum] = useState(1);


    function addToCart(product) {
        const addedProducts = [];
        //adds multiple products depending on selection
        for(let i=1; i<=productNum; i++) {
            addedProducts.push(product)
        }
        //adds products to cart
        const newCart=[...cart]
        const fullCart = newCart.concat(addedProducts)
        setCart(fullCart)
    }

    function addOne() {
        const newProductTotal = productNum + 1;
        setProductNum(newProductTotal)
    }

    function minusOne() {
        const newProductTotal = productNum - 1;
        setProductNum(newProductTotal)
    }

    const handleChange = (e) => {
       setProductNum(e.target.value)
    }


    return (
        <div className="productCard">
            <div className="productInfo">
                <img className="productImage" src={product.image} />
                <h4>{product.title}</h4>
                <p className="productPrice">Price: ${product.price}</p>
            </div>
            <div className="productCartControls">
                <form className="addToCartInputs" onSubmit={e => e.preventDefault()}>
                    <div className="quantityInputs">
                        <button className='increment' onClick={minusOne}>-</button>
                        <input className='quantitySelect' type='number' min='1' max='10' value={productNum} onChange={handleChange} />
                        <button className='increment' onClick={addOne}>+</button>
                    </div>
                    <button className="addToCartBtn" type='submit' onClick={()=>addToCart(product)}>Add to Cart</button>
                </form>
            </div>
        </div>
    )
}