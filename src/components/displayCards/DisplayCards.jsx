import './DisplayCards.css'

export default function DisplayCards({products, setProducts}) {

    

    return (
       <>
        <div className="cards">
            {products.map((product, index) =>(
                <div className="productCard">
                    <img className="productImage" src={product.image} />
                    <p>{product.title}</p>
                </div>
            ))}
        </div>
       </> 
    )
}