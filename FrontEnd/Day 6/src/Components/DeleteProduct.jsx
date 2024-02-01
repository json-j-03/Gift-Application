import React, { useState, useEffect } from "react";
import "../css/DeleteProduct.css";
import axios from "axios";

const DeleteProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/products/getAllProducts");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/products/deleteProduct/${id}`);
      // Remove the deleted product from the state
      setProducts(products.filter((product) => product.id !== id));
      console.log("Product deleted successfully.");
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="products-list">
      <h1>Products List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="product-item">
            {product.productName} - {product.originalPrice} - {product.discountedPrice} - {product.quantity} - {product.shipping}
            <button onClick={() => handleDelete(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeleteProduct;
