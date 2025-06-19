import "./Shop.css"
import { useState, useEffect } from "react"

export default function Shop() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

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

  console.log(products)


  //ADD ERROR AND LOADING LOGIC
    if (loading) return <p>Loading...</p>;
    if (error) return <p>A network error was encountered</p>;

    return (
        <>
            <div>hello from shop</div>
        </>
    )
}