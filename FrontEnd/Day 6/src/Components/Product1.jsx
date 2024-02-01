import '../css/Product1.css';
import { FaLocationDot } from "react-icons/fa6";
import { IoBagHandle } from "react-icons/io5";
import { MdCurrencyRupee } from "react-icons/md";
import { LuFileSpreadsheet } from "react-icons/lu";
import { MdOutlineCastForEducation } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { MdDescription } from "react-icons/md";






const Financial = () => {
  return (
    <div className="fn">
      <div className="nb">
        <div className="ic">
          <h2 className="lg">CareerPath</h2>
        </div>

        <div className="mn">
          <ul>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Companies</a></li>
          
          </ul>
        </div>

    
      </div>

      <div className="ct">
        <h1 classname='head1'>Financial <br /><span classname="span1">Entrepreneur</span> <br /></h1>
        <p className="pc">
        <IoBagHandle /> Job Type : Full-time<br/>
        <FaLocationDot /> Chennai<br/>
        <MdCurrencyRupee />15-27.5 LPA<br/>
        <LuFileSpreadsheet /> Experience: 5+ years<br/></p>




        <button className="cj"><a href="#">Apply Now</a></button>

         <div className="fm">
          <h3>Job Description: <MdDescription />
</h3><br/>
          <p className='er'>We are seeking a dynamic and visionary Financial Entrepreneur to lead and drive financial ventures within our organization<br/>
          <h3>Education: <MdOutlineCastForEducation /></h3>

          UG: Any Graduate<br/>
PG: Any Postgraduate<br/>
<h3>Key Skills: <GiSkills />
</h3>

Data Analysis<br/>
Program Support<br/>
Billing and Planning<br/>
Supplier Relationship Management</p>

      
        </div>
      </div>
     </div>
  );
};

export default Financial;