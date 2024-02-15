import { useEffect , useState} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {Dropdown} from 'react-bootstrap';
import '../css/Personalised.css';
import { CiBoxList } from "react-icons/ci";
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';
  // const products = [
  //   {
  //     id: 1,
  //     name: 'Chocozone pack',
  //     image: 'https://www.fnp.com/images/pr/l/v20240119143521/personalised-love-story-gift-kit_1.jpg',
  //     price: '$5',
  //     rating: 6,
  //   },
  //   {
  //     id: 2,
  //     name: 'Epyz Solar sakura flower spring Light',
  //     image: 'https://www.fnp.com/images/pr/l/v20231003124637/babyrobe-personalised-quirky-baby-gift-box_1.jpg',
  //     price: '$4',
  //     rating: 7,
  //   },
  //   {
  //     id: 3,
  //     name: 'Tied Ribbon',
  //     image: 'https://www.fnp.com/images/pr/l/v20230704145910/personalised-gift-photo-frame_1.jpg',
  //     price: '$6',
  //     rating: 8,
  //   },
  //   {
  //     id: 3,
  //     name: 'Garden Figurines',
  //     image: 'https://www.fnp.com/images/pr/l/v20231124130226/personalised-couple-essentials-gift-box_2.jpg',
  //     price: '$8',
  //     rating: 8.5,
  //   },
  //   {
  //     id: 3,
  //     name: 'Decorshed Peacock',
  //     image: 'https://www.fnp.com/images/pr/l/v20240115101631/personalised-hearty-love-gift-box_1.jpg',
  //     price: '$9',
  //     rating: 8.8,
  //   },
  //   {
  //     id: 3,
  //     name: 'Ceramic Hanging Bird',
  //     image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcStxXbwGAC0uYvXlYbyGaZM-tTX3jS9Rl4dfgj6HXn8Z6TLvymiKS2R5NgjjkEpNOC6p7A3WB-vTsMSI1ZLh5BdvSx9RFEXXw&usqp=CAE',
  //     price: '$6',
  //     rating: 8,
  //   },
  // ];


  // const renderRatings = (rating) => {
  //   return rating.toFixed(1);
  // };
  const Personalised = () => {
    const navigate= useNavigate();
    const [products, setProducts] = useState([]); // State to hold products data
  
    useEffect(() => {
      // Fetch products data when the component mounts
      const fetchProducts = async () => {
        try {
          const response = await axios.get('http://localhost:8080/get'); // Replace 'YOUR_BACKEND_ENDPOINT' with your actual endpoint
          setProducts(response.data); // Set the fetched products data to state
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
  
      fetchProducts(); // Call the function to fetch products data
    }, []);
  const handleAddToCart = (product) => {
    // Handle adding the product to the cart
    // localStorage.setItem("purchaseId",product.productId);
    // localStorage.setItem("productId",product.productId);
    // localStorage.setItem("productName",product.productName);
    // localStorage.setItem("productPrice",product.productPrice);
    localStorage.setItem('products',JSON.stringify(product));
    console.log(`Product ${product.productId} added to cart`);
    navigate('/Order');
  };

  return (

    <div className="product-page-container">
      <div className="banner">
      <div className="navbar">
        
        <a href="/Home" className="logo">
          <img
            className="logo-image"
            src='https://pbs.twimg.com/profile_images/1217561906728357889/GN4SlxtY_400x400.jpg '
            alt="Logo"
          />     
        </a>

        <div className="search-bar-container">
        <input type="text" placeholder="Search Gifts" className="search-bar" />
        <i className="search-icon">
          <FaSearch size="1rem" color="black" />
        </i>
      </div>

        <ul>
        <li><Link to='/Home'>
            Home
            </Link> 
  </li>
          <li><Link to="/Personalised"><a href="#">Personalised</a></Link></li>
          <li><Link to="/Occasion"><a href="#">Occasions</a></Link></li>
          <li><a href="#">Recipients</a></li>
          <li><Link to="/Category"><a href="#">Categories</a></Link></li>
          <li><a href="#"><Dropdown>
    <Dropdown.Toggle variant="success" id="dropdown-basic">
    <CiBoxList />
    </Dropdown.Toggle>

    <Dropdown.Menu>
    <Link to="/ProfilePage"> <Dropdown.Item href="#/action-1">Profile</Dropdown.Item></Link>
      <Dropdown.Item href="#/action-2">Cart</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Track Order</Dropdown.Item>
    </Dropdown.Menu>  
  </Dropdown></a></li>
        </ul>
      </div>
       </div> 
      <div className="product-grid">
        {products.map((product) => (
          <div className="product" key={product.productId}>
            <img src={product.productImage} alt={product.productName} className="product-image" />
            <p className="name">{product.productName}</p>
            <p className="price">Price: {product.productPrice}</p>
            {/* <p className="rating">Rating: {renderRatings(product.rating)}</p> */}
            <button className="add-to-cart-button" onClick={()=> handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Personalised
