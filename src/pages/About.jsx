import React from "react";
import { Link } from "react-router-dom";
import {
  FaBuilding,
  FaUsers,
  FaChartLine,
  FaShieldAlt,
  FaCheckCircle,
  FaArrowRight
} from "react-icons/fa";

import "../styles/About.css";

function About() {
  return (
    <div className="about-page">

      {/* =====================================
          HERO
      ===================================== */}

      <section className="about-hero">

        <div className="about-hero-content">

          <span className="about-badge">
            About PropertyPro
          </span>

          <h1>
            Smarter Property
            <br />
            Management Starts
            <br />
            <span>Here.</span>
          </h1>

          <p>
            PropertyPro is a modern property management platform designed
            to help property owners, managers, and teams simplify their
            daily operations and grow with confidence.
          </p>

          <div className="about-hero-buttons">

            <Link to="/request-demo" className="about-primary-btn">
              Request a Demo
              <FaArrowRight />
            </Link>

            <a href="#our-story" className="about-secondary-btn">
              Our Story
            </a>

          </div>

        </div>


        {/* HERO VISUAL */}

        <div className="about-hero-visual">

          <div className="visual-main-card">

            <div className="visual-card-header">

              <div>
                <span>Portfolio Overview</span>
                <h3>Property Performance</h3>
              </div>

              <FaChartLine />

            </div>


            <div className="visual-chart">

              <div className="chart-line line-one"></div>
              <div className="chart-line line-two"></div>
              <div className="chart-line line-three"></div>
              <div className="chart-line line-four"></div>
              <div className="chart-line line-five"></div>

            </div>


            <div className="visual-stats">

              <div>
                <strong>356</strong>
                <span>Properties</span>
              </div>

              <div>
                <strong>94%</strong>
                <span>Occupancy</span>
              </div>

              <div>
                <strong>$48K</strong>
                <span>Revenue</span>
              </div>

            </div>

          </div>


          <div className="floating-card floating-one">
            <FaBuilding />
            <div>
              <strong>356+</strong>
              <span>Properties Managed</span>
            </div>
          </div>


          <div className="floating-card floating-two">
            <FaUsers />
            <div>
              <strong>12K+</strong>
              <span>Active Tenants</span>
            </div>
          </div>

        </div>

      </section>


      {/* =====================================
          TRUST BAR
      ===================================== */}

      <section className="about-trust">

        <div>
          <strong>10K+</strong>
          <span>Property Professionals</span>
        </div>

        <div>
          <strong>50K+</strong>
          <span>Units Managed</span>
        </div>

        <div>
          <strong>98%</strong>
          <span>Customer Satisfaction</span>
        </div>

        <div>
          <strong>24/7</strong>
          <span>Support Available</span>
        </div>

      </section>


      {/* =====================================
          OUR STORY
      ===================================== */}

      <section className="about-story" id="our-story">

        <div className="story-image">

          <div className="story-image-main">

            <div className="building-shape">
              <FaBuilding />
            </div>

            <div className="building-windows">

              <span></span>
              <span></span>
              <span></span>
              <span></span>

              <span></span>
              <span></span>
              <span></span>
              <span></span>

              <span></span>
              <span></span>
              <span></span>
              <span></span>

            </div>

          </div>

          <div className="story-label">
            <FaCheckCircle />
            Built for modern property teams
          </div>

        </div>


        <div className="story-content">

          <span className="section-label">
            Our Story
          </span>

          <h2>
            Built to Make Property
            <span> Management Simpler.</span>
          </h2>

          <p>
            Managing properties should not mean managing endless
            spreadsheets, scattered messages, and repetitive tasks.
          </p>

          <p>
            PropertyPro was created to bring everything property
            professionals need into one simple, powerful platform.
            From rent collection and tenant communication to
            maintenance and reporting, we make everyday management
            easier.
          </p>

          <div className="story-points">

            <div>
              <FaCheckCircle />
              <span>Centralized property management</span>
            </div>

            <div>
              <FaCheckCircle />
              <span>Automated everyday tasks</span>
            </div>

            <div>
              <FaCheckCircle />
              <span>Clear and actionable insights</span>
            </div>

            <div>
              <FaCheckCircle />
              <span>Designed for teams of every size</span>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================
          MISSION
      ===================================== */}

      <section className="mission-section">

        <div className="mission-header">

          <span className="section-label">
            What Drives Us
          </span>

          <h2>
            Technology With a
            <span> Purpose.</span>
          </h2>

          <p>
            Our mission is to give property professionals the tools
            they need to work smarter, move faster, and build better
            experiences for their tenants.
          </p>

        </div>


        <div className="mission-grid">

          <div className="mission-card">

            <div className="mission-icon">
              <FaBuilding />
            </div>

            <h3>Our Mission</h3>

            <p>
              Simplify property management through intuitive technology
              that saves time and improves everyday operations.
            </p>

          </div>


          <div className="mission-card featured-mission">

            <div className="mission-icon">
              <FaChartLine />
            </div>

            <h3>Our Vision</h3>

            <p>
              Create a future where managing properties is effortless,
              transparent, and powered by intelligent technology.
            </p>

          </div>


          <div className="mission-card">

            <div className="mission-icon">
              <FaUsers />
            </div>

            <h3>Our Customers</h3>

            <p>
              Put property owners, managers, teams, and tenants at
              the center of everything we build.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================
          VALUES
      ===================================== */}

      <section className="values-section">

        <div className="values-header">

          <span className="section-label">
            Our Values
          </span>

          <h2>
            What We Believe In
          </h2>

          <p>
            The principles behind every product decision and customer
            experience at PropertyPro.
          </p>

        </div>


        <div className="values-grid">

          <div className="value-card">

            <div className="value-number">
              01
            </div>

            <FaShieldAlt />

            <h3>Trust & Transparency</h3>

            <p>
              We believe great property management starts with
              clear communication and reliable information.
            </p>

          </div>


          <div className="value-card">

            <div className="value-number">
              02
            </div>

            <FaChartLine />

            <h3>Continuous Improvement</h3>

            <p>
              We constantly improve our platform to help our customers
              operate more efficiently.
            </p>

          </div>


          <div className="value-card">

            <div className="value-number">
              03
            </div>

            <FaUsers />

            <h3>Customer First</h3>

            <p>
              We listen to our customers and build solutions around
              their real-world needs.
            </p>

          </div>


          <div className="value-card">

            <div className="value-number">
              04
            </div>

            <FaCheckCircle />

            <h3>Simple by Design</h3>

            <p>
              Powerful software should feel simple, intuitive, and
              easy to use.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================
          CTA
      ===================================== */}

      <section className="about-cta">

        <div>

          <span>
            Ready to simplify property management?
          </span>

          <h2>
            Build a Smarter Property
            <br />
            Management Experience.
          </h2>

          <p>
            See how PropertyPro can help your team save time,
            stay organized, and grow your portfolio.
          </p>

        </div>

        <Link to="/request-demo">

          Get Started

          <FaArrowRight />

        </Link>

      </section>

    </div>
  );
}

export default About;