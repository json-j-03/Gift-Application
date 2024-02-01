import '../css/Entry.css'; 
import { Link } from 'react-router-dom';


function Entry() {
  return (
    <div className="app">
      <div className="container">
        <h2>FINANCIAL ENTREPRENEUR</h2>
        <p> Join our dynamic financial firm
          as a Financial Entrepreneur, 
          leading strategic financial initiatives 
          and fostering an entrepreneurial culture. 
          we invite you to be a part of our dynamic team.</p>
          <Link to="/Financial">
        <button className="apply-button">Apply Now</button></Link>
      </div>

      <div className="container">
        <h2>DIGITAL ENTREPRENEUR</h2>
        <p>Elevate your career as a Digital 
          Entrepreneur, driving innovation in
          the digital landscape with a focus
          on strategic initiatives and creative solutions.
          elevate your career as a Digital Entrepreneur.</p>
          <Link to="/Digital">
        <button className="apply-button">Apply Now</button></Link>
      </div>

      <div className="container">
        <h2>SOCIAL ENTREPRENEUR</h2>
        <p>Lead social change as a Social 
          Entrepreneur driving impactful 
          initiatives to societal challenges.  
          Elevate your as a Social Entrepreneur 
          by combining strategic
         vision,innovative thinking.</p>
         <Link to="/Social">
        <button className="apply-button">Apply Now</button></Link>
      </div>

      <div className="container">
        <h2>EVENT PLANNING</h2>
        <p>Passionate event planner with
          a proven track record of creating
          memorable experiences. Highly skilled
          in coordinating logistics,ensuring events.
          Elevate your career
         by innovative thinking 
          </p><Link to="/Event">
        <button className="apply-button">Apply Now</button></Link>
      </div>

      <div className="container">
        <h2>PODCASTER HOST</h2>
        <p>Uncover success stories and 
          insider tips from professionals,
          empowering audience with career guidance
          and inspiration.Stay informed about
          ethical in the podcasting 
          space</p><Link to="/Pod">
        <button className="apply-button">Apply Now</button></Link>
      </div>
    </div>
  );
}

export default Entry;