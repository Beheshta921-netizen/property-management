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

  // Close mobile menu
  const closeMobileMenu = () => {
    setMobileMenu(false);

    setShowCompany(false);
    setShowPlatform(false);
    setShowResources(false);
    setShowSupport(false);
    setShowPricing(false);
  };

  // Close all dropdowns before opening another one
  const toggleMobileDropdown = (menu) => {

    if (menu === "company") {
      setShowCompany(!showCompany);
      setShowPlatform(false);
      setShowResources(false);
      setShowSupport(false);
      setShowPricing(false);
    }

    if (menu === "platform") {
      setShowPlatform(!showPlatform);
      setShowCompany(false);
      setShowResources(false);
      setShowSupport(false);
      setShowPricing(false);
    }

    if (menu === "resources") {
      setShowResources(!showResources);
      setShowCompany(false);
      setShowPlatform(false);
      setShowSupport(false);
      setShowPricing(false);
    }

    if (menu === "support") {
      setShowSupport(!showSupport);
      setShowCompany(false);
      setShowPlatform(false);
      setShowResources(false);
      setShowPricing(false);
    }

    if (menu === "pricing") {
      setShowPricing(!showPricing);
      setShowCompany(false);
      setShowPlatform(false);
      setShowResources(false);
      setShowSupport(false);
    }
  };

  return (

    <header className="navbar">

      {/* =========================
          LOGO
      ========================= */}

      <Link
        to="/"
        className="logo"
        onClick={closeMobileMenu}
      >
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

          <a href="#!">
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

          <a href="#!">
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

          <a href="#!">
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

          <a href="#!">
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
  className="platform-menu"
  onMouseEnter={() => setShowPricing(true)}
  onMouseLeave={() => setShowPricing(false)}
>

  <a href="#!">
    Pricing
    <span className="arrow">▼</span>
  </a>

  {showPricing && (
    <div className="dropdown-panel">
      <PricingMenu />
    </div>
  )}

</div>

      </nav>


      {/* =========================
          DESKTOP GET STARTED
      ========================= */}

      <Link
        to="/signup"
        className="desktop-get-started"
      >
        Get Started
      </Link>


      {/* =========================
          MOBILE MENU BUTTON
      ========================= */}

      <button
        className="mobile-menu-button"
        onClick={() => {
          setMobileMenu(!mobileMenu);

          if (mobileMenu) {
            setShowCompany(false);
            setShowPlatform(false);
            setShowResources(false);
            setShowSupport(false);
            setShowPricing(false);
          }
        }}
        aria-label="Open navigation menu"
        aria-expanded={mobileMenu}
      >
        {mobileMenu ? "✕" : "☰"}
      </button>


      {/* =========================
          MOBILE MENU
      ========================= */}

      {mobileMenu && (

        <div className="mobile-navigation">

          {/* COMPANY */}

          <button
            className="mobile-nav-item"
            onClick={() => toggleMobileDropdown("company")}
          >
            <span>Company</span>

            <span className={showCompany ? "rotate-arrow" : ""}>
             ⌄
            </span>
          </button>

          {showCompany && (
            <div className="mobile-dropdown">
              <CompanyMenu />
            </div>
          )}

        {/* PLATFORM */}

<div
  className="platform-menu"
  onMouseEnter={() => setShowPlatform(true)}
  onMouseLeave={() => setShowPlatform(false)}
>
  <a href="#!">
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

          <button
            className="mobile-nav-item"
            onClick={() => toggleMobileDropdown("resources")}
          >
            <span>Resources</span>

            <span className={showResources ? "rotate-arrow" : ""}>
              ⌄
            </span>
          </button>

          {showResources && (
            <div className="mobile-dropdown">
              <ResourcesMenu />
            </div>
          )}


          {/* PLANS & SUPPORT */}

          <button
            className="mobile-nav-item"
            onClick={() => toggleMobileDropdown("support")}
          >
            <span>Plans & Support</span>

            <span className={showSupport ? "rotate-arrow" : ""}>
              ⌄
            </span>
          </button>

          {showSupport && (
            <div className="mobile-dropdown">
              <SupportMenu />
            </div>
          )}



{/* PRICING */}

<div
  className="platform-menu"
  onMouseEnter={() => setShowPricing(true)}
  onMouseLeave={() => setShowPricing(false)}
>
  <a href="#!">
    Pricing
    <span className="arrow">▼</span>
  </a>

  {showPricing && (
    <div className="dropdown-panel">
      <PricingMenu />
    </div>
  )}
</div>

          {/* GET STARTED */}

          <Link
            to="/signup"
            className="mobile-get-started"
            onClick={closeMobileMenu}
          >
            Get Started
          </Link>

        </div>

      )}

    </header>
  );
}

export default Navbar;