
import "../styles/MegaMenu.css";
import house from "../assets/house.png";
import { FaArrowRight, FaRocket, FaCrown, FaBuilding } from "react-icons/fa";
import { Link } from "react-router-dom";

function PricingMenu() {
  return (
    <div className="mega-menu pricing-menu">

      <div className="mega-column">

        <Link to="/starter" className="mega-card">

          <div className="mega-icon">
            <FaRocket />
          </div>

          <div>
            <h4>Starter</h4>
            <p>Perfect for individual landlords.</p>
          </div>

        </Link>


     <Link to="/professional">

          <div className="mega-icon">
            <FaCrown />
          </div>

          <div>
            <h4>Professional</h4>
            <p>Best for growing businesses.</p>
          </div>

        </Link>

      </div>


      <div className="mega-column">

        <Link to="/enterprise">

          <div className="mega-icon">
            <FaBuilding />
          </div>

          <div>
            <h4>Enterprise</h4>
            <p>Built for large property agencies.</p>
          </div>

        </Link>

      </div>


      <div className="mega-preview">

        <img src={house} alt="Pricing" />

        <h3>
          Flexible Pricing
        </h3>

        <p>
          Choose the perfect plan for your business and upgrade anytime.
        </p>


        <Link to="/pricing" className="overview-btn">

          View Pricing <FaArrowRight />

        </Link>

      </div>


    </div>
  );
}

export default PricingMenu;