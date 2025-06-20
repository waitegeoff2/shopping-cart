import { useState } from "react"
import './Card.css'
//MAKE EACH CARD HERE????
//so that you are making new handleFunctions for EACH CARD, 
//in the current way, you are mapping them all but they all share the same states

export default function Card({ product, cart, setCart }) {
    
    //takes the props and returns a card
    
    const [productNum, setProductNum] = useState(1);


    function addToCart(product) {
        //add quantity logic
        const addedProducts = [];
        for(let i=1; i<=productNum; i++) {
            addedProducts.push(product)
        }
        const newCart=[...cart]
        const fullCart = newCart.concat(addedProducts)
        setCart(fullCart)
    }

    console.log(cart)

    function addOne() {
        const newProductTotal = productNum + 1;
        setProductNum(newProductTotal)
        //tie it to the index???
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
                <p>${product.price}</p>
            </div>
            <div className="productCartControls">
                <form className="addToCartInputs" onSubmit={e => e.preventDefault()}>
                    <div className="quantityInputs">
                        <button className='increment' onClick={minusOne}>-</button>
                        <input className='quantitySelect' type='number' min='1' max='10' value={productNum} onChange={handleChange} />
                            {/* value='1' onChange={handleChange} */}
                        <button className='increment' onClick={addOne}>+</button>
                    </div>
                    <button type='submit' onClick={()=>addToCart(product)}>Add to Cart</button>
                </form>
                {/* this needs to be a FORM with a submit button */}
            </div>
        </div>
    )
}