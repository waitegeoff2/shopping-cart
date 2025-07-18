import "./Shop.css"
import { useState, useEffect } from "react"
import Card from "../../components/card/Card";
import { useOutletContext } from 'react-router-dom';


export default function Shop() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useOutletContext();

    useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=15", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setProducts(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
    }, []);

    if (loading) return <p className="loading">Loading...</p>;
    if (error) return <p>A network error was encountered</p>;

    return (
        <>
            <div className="cardGrid">
                {products.map((product, index) =>(
                    <Card 
                    product={product} 
                    key={product.id}
                    index={index}
                    cart={cart} 
                    setCart={setCart} 
                    />
                ))}
            </div>
        </>
    )
}