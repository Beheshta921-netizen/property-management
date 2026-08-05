import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">

      <div className="hero-container">

        {/* =========================
            LEFT - HOUSE
        ========================= */}

        <div className="hero-image-wrapper">

          <img
            src="/src/assets/house.png"
            alt="Modern Property"
            className="hero-house"
          />

        </div>


        {/* =========================
            RIGHT - CONTENT
        ========================= */}

        <div className="hero-content">

          <div className="hero-badge">
            Smart Property Management Software
          </div>

          <h1>
            Simplify Property
            <br />
            Management.
            <br />
            <span>Boost Occupancy.</span>
          </h1>

          <p>
            An all-in-one platform to manage tenants, automate rent
            collection, streamline maintenance, and grow your rental
            business.
          </p>

          <div className="hero-buttons">

            <Link
              to="/request-demo"
              className="hero-primary-btn"
            >
              Request a Demo
              <span>→</span>
            </Link>

            <Link
              to="/platform"
              className="hero-secondary-btn"
            >
              Explore Platform
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;