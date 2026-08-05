import "../styles/MegaMenu.css";
import house from "../assets/house.png";
import { Link } from "react-router-dom";

import {
  FaBuilding,
  FaChartLine,
  FaMobileAlt,
  FaUsers,
  FaShieldAlt,
  FaCloud,
  FaArrowRight,
} from "react-icons/fa";


function MegaMenu() {

  return (

    <div className="mega-menu">


      {/* LEFT COLUMN */}

      <div className="mega-column">


        <Link to="/property-management" className="menu-link">

          <div className="mega-card">

            <div className="mega-icon">
              <FaBuilding />
            </div>

            <div>

              <h4>
                Property Management
              </h4>

              <p>
                Manage properties efficiently from one platform.
              </p>

            </div>

          </div>

        </Link>




        <Link to="/analytics" className="menu-link">

          <div className="mega-card">

            <div className="mega-icon">
              <FaChartLine />
            </div>


            <div>

              <h4>
                Analytics
              </h4>

              <p>
                Get insights with powerful property data.
              </p>

            </div>

          </div>

        </Link>





        <Link to="/mobile-app" className="menu-link">

          <div className="mega-card">

            <div className="mega-icon">
              <FaMobileAlt />
            </div>


            <div>

              <h4>
                Mobile App
              </h4>

              <p>
                Access your properties anywhere.
              </p>

            </div>

          </div>

        </Link>


      </div>






      {/* MIDDLE COLUMN */}


      <div className="mega-column">


        <Link to="/team-management" className="menu-link">

          <div className="mega-card">

            <div className="mega-icon">
              <FaUsers />
            </div>


            <div>

              <h4>
                Team Management
              </h4>

              <p>
                Collaborate with your entire team.
              </p>

            </div>

          </div>

        </Link>






        <Link to="/security" className="menu-link">

          <div className="mega-card">

            <div className="mega-icon">
              <FaShieldAlt />
            </div>


            <div>

              <h4>
                Security
              </h4>

              <p>
                Keep your property data protected.
              </p>

            </div>

          </div>

        </Link>






        <Link to="/cloud" className="menu-link">

          <div className="mega-card">

            <div className="mega-icon">
              <FaCloud />
            </div>


            <div>

              <h4>
                Cloud Platform
              </h4>

              <p>
                Reliable and scalable infrastructure.
              </p>

            </div>

          </div>

        </Link>


      </div>








      {/* RIGHT PREVIEW */}


      <div className="mega-preview">


        <img
          src={house}
          alt="PropertyPro Platform"
        />



        <h3>
          PropertyPro Platform
        </h3>



        <p>
          A complete solution for managing,
          analyzing and growing your real estate business.
        </p>





        <Link to="/platform">

          <button className="overview-btn">

            Explore Platform <FaArrowRight />

          </button>

        </Link>


      </div>





    </div>

  );

}


export default MegaMenu;
