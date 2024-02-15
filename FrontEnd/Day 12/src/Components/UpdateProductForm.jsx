import React, { useState } from "react";
// import axios from "axios";
import "../css/UpdateProductForm.css";

const UpdateProductForm = () => {
  const [id, setId] = useState("");
  const [productName, setProductName] = useState("");
  const [originalPrice, setOriginalPrice] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [shipping, setShipping] = useState("");

  const handleUpdate = async () => {
    try {
      const updatedProduct = {
        productName,
        originalPrice,
        discountedPrice,
        quantity,
        shipping,
      };

    //   const response = await axios.put(`http://localhost:8080/products/updateProduct/${id}`, updatedProduct);
    //   console.log("Product updated successfully:", response.data);
      // Perform any additional actions after a successful update
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div>
      <center><h2>Update Product</h2></center>
      <form>
        <div>
          <label>Product ID:</label>
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Product Name:</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Original Price:</label>
          <input
            type="number"
            value={originalPrice}
            onChange={(e) => setOriginalPrice(Number(e.target.value))}
            required
          />
        </div>
        <div>
          <label>Discounted Price:</label>
          <input
            type="number"
            value={discountedPrice}
            onChange={(e) => setDiscountedPrice(Number(e.target.value))}
            required
          />
        </div>
        <div>
          <label>Quantity:</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            required
          />
        </div>
        <div>
          <label>Shipping:</label>
          <input
            type="text"
            value={shipping}
            onChange={(e) => setShipping(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="button" onClick={handleUpdate}>Update Product</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProductForm;
