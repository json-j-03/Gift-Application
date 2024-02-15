import React, { useEffect, useState } from "react";
import "../css/ProductsList.css";
// import axios from "axios";

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the backend API
    // axios.get("http://localhost:8080/products/getAllProducts").then((response) => {
    //   setProducts(response.data);
    // });
  }, []);

  return (
    <div className="products-list-container">
      <h2 className="products-list-title">Products List</h2>
      <table className="products-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Original Price</th>
            <th>Discounted Price</th>
            <th>Quantity</th>
            <th>Shipping</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="product-row">
              <td>{product.id}</td>
              <td>{product.productName}</td>
              <td>{product.originalPrice}</td>
              <td>{product.discountedPrice}</td>
              <td>{product.quantity}</td>
              <td>{product.shipping}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsList;
