import { useEffect, useState } from 'react'; 

const Product = () => { 
  const [product, setProduct] = useState([]);

  const api = `https://dummyjson.com/products`; // Fetch only 1 product

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const result = await fetch(api);
        const jsondata = await result.json();
        setProduct(jsondata.products); // jsondata.products is an array
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProductData();
  }, []);
  // Loading or error state
  if (!product) return <p>Loading product details...</p>;
  return (
    <div>
      <h2>All Products</h2> 
      <div className="product-grid">
        {product.map((product) => (
          <div key={product.id} className="product-card">
            <h4>{product.title}</h4>
            <img src={product.thumbnail} alt={product.title} width="150" />
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
