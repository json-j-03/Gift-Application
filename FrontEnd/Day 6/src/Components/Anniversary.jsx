import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Anniversary.css';

const Birthday = () => {
  const products = [
    {
      id: 1,
      name: 'Romantic Rose Radiance Bouquet',
      image: 'https://www.fnp.com/images/pr/l/v20231117130901/romantic-rose-radiance-bouquet_1.jpg',
      price: '$5',
      rating: 6,
    },
    {
      id: 2,
      name: 'Decorated Chocolate Truffle Cake Half Kg',
      image: 'https://www.fnp.com/images/pr/l/v20221221115007/decorated-chocolate-truffle-cake-half-kg_1.jpg',
      price: '$9',
      rating: 7,
    },
    {
      id: 3,
      name: 'Verdant Pearl Combo',
      image: 'https://www.fnp.com/images/pr/l/v20231026055453/verdant-pearl-combo_1.jpg',
      price: '$20',
      rating: 8,
    },
    {
      id: 3,
      name: 'Jade Plant Winter Love Pot',
      image: 'https://www.fnp.com/images/pr/l/v20231212091452/jade-plant-winter-love-pot_1.jpg',
      price: '$7',
      rating: 8,
    },
    {
      id: 3,
      name: 'Mr. and Mrs. Forever Caricature Cushion',
      image: 'https://giftcart.com/cdn/shop/products/cp-cm06gbgt345718-g3_400x.webp?v=1680873727',
      price: '$10',
      rating: 8.8,
    },
    {
      id: 3,
      name: 'Real Preserved Forever Rose Lavender ',
      image: 'https://giftcart.com/cdn/shop/products/CO-CM05-GBGT4620-8-4_400x.jpg?v=1662984276',
      price: '$15',
      rating: 8,
    },
  ];

  const renderRatings = (rating) => {
    return rating.toFixed(1);
  };

  const handleAddToCart = (productId) => {
    // Handle adding the product to the cart
    console.log(`Product ${productId} added to cart`);
  };

  return (
    <div className="product-page-container">
      <h2 className="head">
       <Link to="/home"> <img className="homepage-icon" src="https://cdn.icon-icons.com/icons2/2248/PNG/512/home_circle_icon_137496.png" alt="Homepage Icon" /></Link>
      Anniversary Gifts
      </h2>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.name} className="product-image" />
            <p className="name">{product.name}</p>
            <p className="price">{product.price}</p>
            <p className="rating">Rating: {renderRatings(product.rating)}</p>
            <button className="add-to-cart-button" onClick={() => handleAddToCart(product.id)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Birthday
