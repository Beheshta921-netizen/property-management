import "../styles/ResourcesMenu.css";

import { Link } from "react-router-dom";

import {
  FaBook,
  FaBlog,
  FaVideo,
  FaQuestionCircle,
  FaGraduationCap,
  FaArrowRight
} from "react-icons/fa";


function ResourcesMenu(){

  return (

    <div className="resources-menu">


      {/* LEFT COLUMN */}

      <div className="resources-column">


        <Link to="/documentation" className="resource-link">

          <div className="resource-card">

            <div className="resource-icon">
              <FaBook />
            </div>

            <div>

              <h4>
                Documentation
              </h4>

              <p>
                Complete platform documentation.
              </p>

            </div>

          </div>

        </Link>





        <Link to="/blog" className="resource-link">

          <div className="resource-card">

            <div className="resource-icon">
              <FaBlog />
            </div>

            <div>

              <h4>
                Blog
              </h4>

              <p>
                Latest property management articles.
              </p>

            </div>

          </div>

        </Link>





        <Link to="/tutorials" className="resource-link">

          <div className="resource-card">

            <div className="resource-icon">
              <FaVideo />
            </div>

            <div>

              <h4>
                Video Tutorials
              </h4>

              <p>
                Learn with step-by-step videos.
              </p>

            </div>

          </div>

        </Link>


      </div>






      {/* MIDDLE COLUMN */}


      <div className="resources-column">


        <Link to="/help-center" className="resource-link">

          <div className="resource-card">

            <div className="resource-icon">
              <FaQuestionCircle />
            </div>

            <div>

              <h4>
                Help Center
              </h4>

              <p>
                Frequently asked questions.
              </p>

            </div>

          </div>

        </Link>






        <Link to="/learning" className="resource-link">

          <div className="resource-card">

            <div className="resource-icon">
              <FaGraduationCap />
            </div>

            <div>

              <h4>
                Learning Resources
              </h4>

              <p>
                Explore guides, tutorials and documentation.
              </p>

            </div>

          </div>

        </Link>


      </div>







      {/* RIGHT PREVIEW */}


      <div className="resources-preview">


        <div className="resource-placeholder">

          📚

        </div>



        <h3>
          PropertyPro Resources
        </h3>



        <p>
          Explore guides, tutorials,
          and documentation to help
          you manage your property business.
        </p>




        <Link to="/resources">


          <button className="resources-btn">

            View Resources <FaArrowRight />

          </button>


        </Link>


      </div>



    </div>

  );

}


export default ResourcesMenu;
