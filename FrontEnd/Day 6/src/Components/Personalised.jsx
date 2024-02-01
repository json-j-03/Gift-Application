import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Personalised.css';

const Personalised = () => {
  const products = [
    {
      id: 1,
      name: 'Chocozone pack',
      image: 'https://www.fnp.com/images/pr/l/v20240119143521/personalised-love-story-gift-kit_1.jpg',
      price: '$5',
      rating: 6,
    },
    {
      id: 2,
      name: 'Epyz Solar sakura flower spring Light',
      image: 'https://www.fnp.com/images/pr/l/v20231003124637/babyrobe-personalised-quirky-baby-gift-box_1.jpg',
      price: '$4',
      rating: 7,
    },
    {
      id: 3,
      name: 'Tied Ribbon',
      image: 'https://www.fnp.com/images/pr/l/v20230704145910/personalised-gift-photo-frame_1.jpg',
      price: '$6',
      rating: 8,
    },
    {
      id: 3,
      name: 'Garden Figurines',
      image: 'https://www.fnp.com/images/pr/l/v20231124130226/personalised-couple-essentials-gift-box_2.jpg',
      price: '$8',
      rating: 8.5,
    },
    {
      id: 3,
      name: 'Decorshed Peacock',
      image: 'https://www.fnp.com/images/pr/l/v20240115101631/personalised-hearty-love-gift-box_1.jpg',
      price: '$9',
      rating: 8.8,
    },
    {
      id: 3,
      name: 'Ceramic Hanging Bird',
      image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcStxXbwGAC0uYvXlYbyGaZM-tTX3jS9Rl4dfgj6HXn8Z6TLvymiKS2R5NgjjkEpNOC6p7A3WB-vTsMSI1ZLh5BdvSx9RFEXXw&usqp=CAE',
      price: '$6',
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
      Personalised Gifts
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

export default Personalised
