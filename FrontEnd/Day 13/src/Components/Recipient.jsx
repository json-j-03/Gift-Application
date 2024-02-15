import '../css/Category.css';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { CiBoxList } from 'react-icons/ci';


const Category = () => {
  return (
    <div className="background-container">
 
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
          <li><a href="/Home"> Home</a>
  </li>
          <li><Link to="/Personalised"><a href="#">Personalised</a></Link></li>
          <li><Link to="/Occasion"><a href="#">Occasions</a></Link></li>
          <li><Link to="/Recipient"><a href="#">Recipients</a></Link></li>
          <li><Link to="/Category"><a href="#">Categories</a></Link></li>
          <li><a href="#"><Dropdown>
    <Dropdown.Toggle variant="success" id="dropdown-basic">
    <CiBoxList />
    </Dropdown.Toggle>

    <Dropdown.Menu>
    <Link to="/ProfilePage"> <Dropdown.Item href="#/action-1">Profile</Dropdown.Item></Link>
      <Dropdown.Item href="#/action-2">View Order</Dropdown.Item>
      {/* <Dropdown.Item href="#/action-3">Track Order</Dropdown.Item> */}
    </Dropdown.Menu>  
  </Dropdown></a></li>
        </ul>
      </div>
       </div> 

      <div className="cards-list">
        <div className="card 1">
          <div className="card_image">
            <img src="https://www.fnp.com/assets/images/custom/anniversary_24/hero/Personalised.jpg" alt="Card 1" />
          </div>
          <div className="card_title title-white">
           <Link to='/Anniversary'> <p>Anniversary Gifts</p></Link>
          </div>
        </div>

        <div className="card 2">
          <div className="card_image">
            <img src="https://www.fnp.com/images/pr/l/v20221205145945/fudge-brownie-cake-half-kg_1.jpg" alt="Card 2" />
          </div>
          <div className="card_title title-white">
           <Link to="/Birthday"><p>Birthday Gifts</p></Link>
          </div>
        </div>

        <div className="card 3">
          <div className="card_image">
            <img src="https://www.fnp.com/assets/images/custom/misc/valentine_24/Valentines-Gifts/v3/Candles-31124.jpg" alt="Card 3" />
          </div>
          <div className="card_title">
          <Link to="/Valentine">  <p>Valentine Gifts</p></Link>
          </div>
        </div>

        <div className="card 4">
          <div className="card_image">
            <img src="https://www.fnp.com/images/pr/l/v20231206055814/christmas-jade-ensemble_1.jpg" alt="Card 4" />
          </div>
          <div className="card_title title-black">
           <Link to="/ChrismasGift"> <p>Christmas Gifts</p></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;