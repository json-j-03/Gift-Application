import React, { useState } from "react";

const AddProductForm = () => {
  const [product, setProduct] = useState({
    productName: "",
    originalPrice: 0,
    discountedPrice: 0,
    quantity: 0,
    shipping: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform the POST request
    fetch("http://localhost:8080/products/addDetails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Product added successfully:", data);
        // Perform any additional actions after a successful POST request
        // For example, update the product list or show a success message
      })
      .catch((error) => {
        console.error("Error adding product:", error);
        // Handle the error, show an error message, or perform any other actions
      });
  };

  return (
    <div>
      <center><h2>Add Product</h2></center>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Product Name:</label>
          <input
            type="text"
            name="productName"
            value={product.productName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Original Price:</label>
          <input
            type="number"
            name="originalPrice"
            value={product.originalPrice}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Discounted Price:</label>
          <input
            type="number"
            name="discountedPrice"
            value={product.discountedPrice}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Quantity:</label>
          <input
            type="number"
            name="quantity"
            value={product.quantity}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Shipping:</label>
          <input
            type="text"
            name="shipping"
            value={product.shipping}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button type="submit">Add Product</button>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
