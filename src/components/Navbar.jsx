import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/Navbar.css";

import MegaMenu from "./MegaMenu";
import CompanyMenu from "./CompanyMenu";
import ResourcesMenu from "./ResourcesMenu";
import SupportMenu from "./SupportMenu";
import PricingMenu from "./PricingMenu";


function Navbar() {

  const [showCompany, setShowCompany] = useState(false);
  const [showPlatform, setShowPlatform] = useState(false);
  const [showResources, setShowResources] = useState(false);
  const [showSupport, setShowSupport] = useState(false);
  const [showPricing, setShowPricing] = useState(false);

  return (

    <header className="navbar">

      {/* Logo */}

      <div className="logo">
        🏢 <span>PropertyPro</span>
      </div>


      {/* Navigation */}

      <nav className="nav-links">

        {/* Company */}

        <div
          className="platform-menu"
          onMouseEnter={() => setShowCompany(true)}
          onMouseLeave={() => setShowCompany(false)}
        >

          <a href="#">
            Company <span className="arrow">▼</span>
          </a>

          {showCompany && (
            <div>
              <CompanyMenu />
            </div>
          )}

        </div>


        {/* Platform */}

        <div
          className="platform-menu"
          onMouseEnter={() => setShowPlatform(true)}
          onMouseLeave={() => setShowPlatform(false)}
        >

          <a href="#">
            Platform <span className="arrow">▼</span>
          </a>

          {showPlatform && (
            <MegaMenu />
          )}

        </div>


        {/* Resources */}

        <div
          className="platform-menu"
          onMouseEnter={() => setShowResources(true)}
          onMouseLeave={() => setShowResources(false)}
        >

          <a href="#">
            Resources <span className="arrow">▼</span>
          </a>

          {showResources && (
            <div className="dropdown-panel">
              <ResourcesMenu />
            </div>
          )}

        </div>


        {/* Plans & Support */}

        <div
          className="platform-menu"
          onMouseEnter={() => setShowSupport(true)}
          onMouseLeave={() => setShowSupport(false)}
        >

          <a href="#">
            Plans & Support <span className="arrow">▼</span>
          </a>

          {showSupport && (
            <div className="dropdown-panel">
              <SupportMenu />
            </div>
          )}

        </div>


        {/* Pricing */}

        <div
          className="platform-menu pricing-wrapper"
          onMouseEnter={() => setShowPricing(true)}
          onMouseLeave={() => setShowPricing(false)}
        >

          <a href="#">
            Pricing <span className="arrow">▼</span>
          </a>

          {showPricing && (
            <div
              className="dropdown-panel pricing-panel"
              onMouseEnter={() => setShowPricing(true)}
              onMouseLeave={() => setShowPricing(false)}
            >
              <PricingMenu />
            </div>
          )}

        </div>

      </nav>


      {/* RIGHT BUTTONS */}

      <div className="nav-actions">

        {/* Get Started */}

        <Link to="/signup">
          <button className="nav-btn">
            Get Started
          </button>
        </Link>

      </div>

    </header>

  );

}


export default Navbar;