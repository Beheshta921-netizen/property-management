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

  const [mobileMenu, setMobileMenu] = useState(false);

  return (

    <header className="navbar">

      {/* LOGO */}

      <Link to="/" className="logo">
        🏢 <span>PropertyPro</span>
      </Link>


      {/* =========================
          DESKTOP NAVIGATION
      ========================= */}

      <nav className="nav-links">

        {/* COMPANY */}

        <div
          className="platform-menu"
          onMouseEnter={() => setShowCompany(true)}
          onMouseLeave={() => setShowCompany(false)}
        >

          <a href="#">
            Company
            <span className="arrow">▼</span>
          </a>

          {showCompany && (
            <div className="dropdown-panel">
              <CompanyMenu />
            </div>
          )}

        </div>


        {/* PLATFORM */}

        <div
          className="platform-menu"
          onMouseEnter={() => setShowPlatform(true)}
          onMouseLeave={() => setShowPlatform(false)}
        >

          <a href="#">
            Platform
            <span className="arrow">▼</span>
          </a>

          {showPlatform && (
            <div className="dropdown-panel">
              <MegaMenu />
            </div>
          )}

        </div>


        {/* RESOURCES */}

        <div
          className="platform-menu"
          onMouseEnter={() => setShowResources(true)}
          onMouseLeave={() => setShowResources(false)}
        >

          <a href="#">
            Resources
            <span className="arrow">▼</span>
          </a>

          {showResources && (
            <div className="dropdown-panel">
              <ResourcesMenu />
            </div>
          )}

        </div>


        {/* PLANS & SUPPORT */}

        <div
          className="platform-menu"
          onMouseEnter={() => setShowSupport(true)}
          onMouseLeave={() => setShowSupport(false)}
        >

          <a href="#">
            Plans & Support
            <span className="arrow">▼</span>
          </a>

          {showSupport && (
            <div className="dropdown-panel">
              <SupportMenu />
            </div>
          )}

        </div>


        {/* PRICING */}

        <div
          className="platform-menu pricing-wrapper"
          onMouseEnter={() => setShowPricing(true)}
          onMouseLeave={() => setShowPricing(false)}
        >

          <a href="#">
            Pricing
            <span className="arrow">▼</span>
          </a>

          {showPricing && (
            <div className="dropdown-panel pricing-panel">
              <PricingMenu />
            </div>
          )}

        </div>

      </nav>


      {/* DESKTOP GET STARTED */}

      <Link
        to="/signup"
        className="desktop-get-started"
      >
        Get Started
      </Link>


      {/* MOBILE MENU BUTTON */}

      <button
        className="mobile-menu-button"
        onClick={() => setMobileMenu(!mobileMenu)}
        aria-label="Open navigation menu"
      >
        {mobileMenu ? "✕" : "☰"}
      </button>


      {/* =========================
          MOBILE MENU
      ========================= */}

      {mobileMenu && (

        <div className="mobile-navigation">

          <div
            className="mobile-nav-item"
            onClick={() => setShowCompany(!showCompany)}
          >
            <span>Company</span>
            <span>⌄</span>
          </div>

          {showCompany && (
            <div className="mobile-dropdown">
              <CompanyMenu />
            </div>
          )}


          <div
            className="mobile-nav-item"
            onClick={() => setShowPlatform(!showPlatform)}
          >
            <span>Platform</span>
            <span>⌄</span>
          </div>

          {showPlatform && (
            <div className="mobile-dropdown">
              <MegaMenu />
            </div>
          )}


          <div
            className="mobile-nav-item"
            onClick={() => setShowResources(!showResources)}
          >
            <span>Resources</span>
            <span>⌄</span>
          </div>

          {showResources && (
            <div className="mobile-dropdown">
              <ResourcesMenu />
            </div>
          )}


          <div
            className="mobile-nav-item"
            onClick={() => setShowSupport(!showSupport)}
          >
            <span>Plans & Support</span>
            <span>⌄</span>
          </div>

          {showSupport && (
            <div className="mobile-dropdown">
              <SupportMenu />
            </div>
          )}


          <div
            className="mobile-nav-item"
            onClick={() => setShowPricing(!showPricing)}
          >
            <span>Pricing</span>
            <span>⌄</span>
          </div>

          {showPricing && (
            <div className="mobile-dropdown">
              <PricingMenu />
            </div>
          )}


          <Link
            to="/signup"
            className="mobile-get-started"
            onClick={() => setMobileMenu(false)}
          >
            Get Started
          </Link>

        </div>

      )}

    </header>

  );
}

export default Navbar;