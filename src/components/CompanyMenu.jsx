import "../styles/MegaMenu.css";
import house from "../assets/house.png";
import { Link } from "react-router-dom";

import {
  FaBuilding,
  FaGlobe,
  FaUsers,
  FaHandshake,
  FaAward,
  FaNewspaper,
  FaArrowRight,
} from "react-icons/fa";


function CompanyMenu() {
  return (
    <div className="mega-menu">


      {/* Left Column */}
      <div className="mega-column">

        <Link to="/about" className="menu-link">
          <div className="mega-card">

            <div className="mega-icon">
              <FaBuilding />
            </div>

            <div>
              <h4>About Us</h4>
              <p>Learn about our mission and vision.</p>
            </div>

          </div>
        </Link>



        <Link to="/team" className="menu-link">
          <div className="mega-card">

            <div className="mega-icon">
              <FaUsers />
            </div>

            <div>
              <h4>Our Team</h4>
              <p>Meet the people behind PropertyPro.</p>
            </div>

          </div>
        </Link>



        <Link to="/partners" className="menu-link">
          <div className="mega-card">

            <div className="mega-icon">
              <FaHandshake />
            </div>

            <div>
              <h4>Partners</h4>
              <p>Trusted by leading real estate companies.</p>
            </div>

          </div>
        </Link>


      </div>



      {/* Middle Column */}
      <div className="mega-column">


        <Link to="/careers" className="menu-link">
          <div className="mega-card">

            <div className="mega-icon">
              <FaAward />
            </div>

            <div>
              <h4>Careers</h4>
              <p>Join our growing global team.</p>
            </div>

          </div>
        </Link>




        <Link to="/news" className="menu-link">
          <div className="mega-card">

            <div className="mega-icon">
              <FaNewspaper />
            </div>

            <div>
              <h4>News</h4>
              <p>Latest announcements and company updates.</p>
            </div>

          </div>
        </Link>





        <Link to="/global-offices" className="menu-link">
          <div className="mega-card">

            <div className="mega-icon">
              <FaGlobe />
            </div>

            <div>
              <h4>Global Offices</h4>
              <p>Serving customers worldwide.</p>
            </div>

          </div>
        </Link>


      </div>





      {/* Right Column */}
      <div className="mega-preview">


        <img src={house} alt="Company" />


        <h3>
          About PropertyPro
        </h3>


        <p>
          Discover our journey, our people,
          and how we're transforming property management.
        </p>



        <Link to="/about">

          <button className="overview-btn">

            Learn More <FaArrowRight />

          </button>

        </Link>


      </div>


    </div>
  );
}


export default CompanyMenu;