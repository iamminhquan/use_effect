import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((result) => result.json())
      .then((json) => setProducts(json.products))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <ul
        className="list-group"
        style={{
          padding: 30,
        }}
      >
        {products.map((product) => {
          return (
            <li key={product.id} className="list-group-item">
              {product.title} - ${product.price}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
