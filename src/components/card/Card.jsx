//MAKE EACH CARD HERE????
//so that you are making new handleFunctions for EACH CARD, 
//in the current way, you are mapping them all but they all share the same states

export default function Card() {
    //takes the props and returns a card

    return (
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
                    <button type='submit' onClick={()=>addToCart(index, input.value)}>Add to Cart</button>
                </form>
                {/* this needs to be a FORM with a submit button */}
            </div>
        </div>
    )
}