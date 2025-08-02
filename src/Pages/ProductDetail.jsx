import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { productID } = useParams(); // Gets dynamic ID from URL
  const [product, setProduct] = useState(null);

  const api = `https://dummyjson.com/products/${productID}`; // Fetch only 1 product

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const result = await fetch(api);
        const jsondata = await result.json();
        setProduct(jsondata); // API gives single product object
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProductData();
  }, [productID]);

  // Loading or error state
  if (!product) return <p>Loading product details...</p>;

  return (
    <div className="product-detail-page">
      <h3>Product Detail Page</h3>
      <div className="product-card">
        <p><strong>Product ID:</strong> {product.id}</p>
        <p><strong>Title:</strong> {product.title}</p>
        <p><strong>Price:</strong> ${product.price}</p>
        <p><strong>Description:</strong> {product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
