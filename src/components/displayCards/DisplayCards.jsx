import './DisplayCards.css'

export default function DisplayCards({products, setProducts, cart, setCart}) {

    function addToCart(index) {
        const addedProduct = products[index];
        console.log(addedProduct) 
        const newCart=[...cart]
        newCart.push(addedProduct)
        setCart(newCart)
    }

    function handleInputChange(e){

    }

    console.log(cart)

    return (
       <>
        <div className="cards">
            {products.map((product, index) =>(
                <div className="productCard">
                    <div className="productInfo">
                        <img className="productImage" src={product.image} />
                        <p>{product.title}</p>
                    </div>
                    <div className="productCartControls">
                        <button onClick={()=>addToCart(index)}>Add To Cart</button>
                    </div>
                </div>
            ))}
        </div>
       </> 
    )
}