import '../css/Category.css';
import { Link } from 'react-router-dom';
import { BiSolidCategory } from "react-icons/bi";
import { IoGiftSharp } from "react-icons/io5";
import { FaGlassCheers } from "react-icons/fa";
import { IoWomanSharp } from "react-icons/io5";
// import {fa-solid fa-house} from "react-icons";
import { GrPersonalComputer } from "react-icons/gr";


const Category = () => {
  return (
    <div className="background-container">
 
    <div>
      {/* <nav className="navbar"> */}
      <h2 className="category-head" ><Link to="/Home"><BiSolidCategory /></Link>Collections 
</h2>
{/* 
        <h2 className="navbar-item">Birthday Gifts <IoGiftSharp />
</h2>
        <h2 className="navbar-item">Occasions <FaGlassCheers />
</h2>
        <h2 className="navbar-item">Recipients <IoWomanSharp />
</h2>
        <h2 className="navbar-item">Anniversary Gifts  <IoGiftSharp /></h2>
        <h2 className="navbar-item">Personalised <GrPersonalComputer />
</h2> */}
      {/* </nav> */}
      {/* <h1 className="collections-title">Collections</h1> */}
      
      <div className="cards-list">
        {/* Add birthday cards here */}
      </div>

      <div className="cards-list">
        {/* Add anniversary gift cards here */}
      </div>

      <div className="cards-list">
        {/* Add occasion cards here */}
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
    </div>
  );
};

export default Category;