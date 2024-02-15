import { Component } from 'react'
import '../css/HomePage.css'
// import { Link, Navigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/Gifster-logos/Gifster-logos.jpeg";
class HomePage extends Component {
    state={clicked:false};
  handleClick =() =>{
    this.setState({clicked:!this.state.clicked})
  }
  render() {
    return (
      <>
        <div className="bodyyy">
        <Navbar className="navbar-expand-lg 
        navbar-light bg-light fixed-top py-lg-0">
        <Container>
          <Navbar.Brand href="/" className='me-auto'>
            <img
              alt=""
              src={logo}
              width="50"
              height="50"
              />
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="/Login">User Login</Nav.Link>
            <Nav.Link eventKey={2} href="/Admin">
              Admin Login
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        <main>
            <div className="intro">
            <h1>Giftster</h1>
            <p>Gifts are amazing.</p><p>A thoughtful gift has the effect on the one you love that they realize their value to you.</p>
            {/* <button>Learn More</button> */}
            </div>
            <div className="achievements">
            <div className="work">
                <div className="img1"></div>
                <p className="work-heading">Gift</p>
                <p className="work-text">The gifts are crafted with experience in multiple designs suited for your needs</p>
            </div>
            <div className="work">
            <div className="img2">
                </div>
                <p className="work-heading">On your Doorstep</p>
                <p className="work-text">The gifts will arrive at your location, on your doorstep if need be.</p>
            </div>
            <div className="work">
            <div className="img3"></div>
                <p className="work-heading">Orders</p>
                <p className="work-text">As a designer you no longer have to wait eternally for an order. The application will get you multiple orders in no time.</p>
            </div>
            </div>
            <div className="about-me">
            <div className="about-me-text">
                <h2>ABOUT US</h2>
                <p>Our service is very effecient. Support for screening of the gifts, choosing your gifts, arranging and scheduling of the order will be all handled gracefully.
                </p>
            </div>
            <div className="about-me-img">
            <img src="https://royceindia.com/cdn/shop/files/RedRosetteBox-SignatureRedGiftCollection.webp?v=1695899528" alt="me"/>
            </div>
            </div>
        </main>
        <footer className="footer">
            <div className="copy">© 2023 Developer</div>
            <div className="bottom-links">
            {/* <div className="links">
                <span>More Info</span>
                <br></br><br></br>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </div>
            <br></br> */}
            <div className="links">
                <span>Social Links</span>
                <a href="/Feedback"> Feedback</a>
            </div>
            </div>
        </footer>
        </div>
      </>
    )
  }
}

export default HomePage;