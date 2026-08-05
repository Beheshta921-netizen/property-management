import "../styles/ResourcesMenu.css";
import { Link } from "react-router-dom";

import {
  FaHeadset,
  FaPhoneAlt,
  FaComments,
  FaEnvelope,
  FaArrowRight
} from "react-icons/fa";

function SupportMenu() {

  return (

    <div className="resources-menu">

      {/* LEFT COLUMN */}

      <div className="resources-column">

        <Link to="/support-center" className="resource-link">

          <div className="resource-card">

            <div className="resource-icon">
              <FaHeadset />
            </div>

            <div>

              <h4>Support Center</h4>

              <p>Get help whenever you need it.</p>

            </div>

          </div>

        </Link>

        <Link to="/call-us" className="resource-link">

          <div className="resource-card">

            <div className="resource-icon">
              <FaPhoneAlt />
            </div>

            <div>

              <h4>Call Us</h4>

              <p>24/7 customer support.</p>

            </div>

          </div>

        </Link>

      </div>

      {/* MIDDLE COLUMN */}

      <div className="resources-column">

        <Link to="/live-chat" className="resource-link">

          <div className="resource-card">

            <div className="resource-icon">
              <FaComments />
            </div>

            <div>

              <h4>Live Chat</h4>

              <p>Talk directly with our experts.</p>

            </div>

          </div>

        </Link>

        <Link to="/email-support" className="resource-link">

          <div className="resource-card">

            <div className="resource-icon">
              <FaEnvelope />
            </div>

            <div>

              <h4>Email Support</h4>

              <p>Fast response from our team.</p>

            </div>

          </div>

        </Link>

      </div>

      {/* RIGHT PANEL */}

      <div className="resources-preview">

        <div className="resource-placeholder">

          <FaHeadset />

        </div>

        <h3>Need Help?</h3>

        <p>

          Contact our support specialists anytime.
          We're available 24/7 to answer your
          questions and help you get the most out
          of PropertyPro.

        </p>

        <Link to="/support-center">

          <button className="resources-btn">

            Contact Us

            <FaArrowRight />

          </button>

        </Link>

      </div>

    </div>

  );

}

export default SupportMenu;