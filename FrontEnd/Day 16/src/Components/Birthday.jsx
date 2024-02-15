
import { Link } from 'react-router-dom';
import '../css/Birthday.css';

const Birthday = () => {
  const products = [
    {
      id: 1,
      name: 'Perfect Picture Photo Frame',  
      image: 'https://www.fnp.com/images/pr/l/v20231031114724/perfect-picture-personalised-frame_1.jpg',
      price: '$10',
      rating: 6,
    },
    {
      id: 2,
      name: 'Sip of Love Birthday Mug- Hand Delivery',
      image: 'https://www.fnp.com/images/pr/l/v20230321114904/sip-of-love-birthday-mug-hand-delivery_2.jpg',
      price: '$7',
      rating: 7,
    },
    {
      id: 3,
      name: 'Forever Love Red Rose Standing Bouque',
      image: 'https://www.fnp.com/images/pr/l/v20230816105931/love-forever-red-rose-bouquet_1.jpg',
      price: '$10',
      rating: 8,
    },
    {
      id: 3,
      name: 'Personalised LED Oval Shaped Keychain',
      image: 'https://www.fnp.com/images/pr/l/v20230227070124/personalised-led-oval-shaped-keychain_1.jpg',
      price: '$8',
      rating: 8.5,
    },
    {
      id: 3,
      name: 'Red Velvet Fresh Cream Cake Half kg',
      image: 'https://www.fnp.com/images/pr/l/v20221205144829/red-velvet-fresh-cream-cake-half-kg_1.jpg',
      price: '$15',
      rating: 8.8,
    },
    {
      id: 3,
      name: 'Personalised Happy Birthday Assorted Hamper',
      image: 'https://www.fnp.com/images/pr/l/v20231124130231/personalised-happy-birthday-assorted-hamper_1.jpg',
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
      Birthday Gifts
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
