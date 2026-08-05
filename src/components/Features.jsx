import React from "react";
import "../styles/Features.css";
import building from "../assets/download (15).jpg";


import {
  FaBuilding,
  FaUsers,
  FaDollarSign,
  FaTools
} from "react-icons/fa";

function Features() {

  return (

    <section className="features-section">

      <div className="features-header">

        <span className="features-badge">
          Features
        </span>

        <h2>
          Robust Tools to Enhance Your
          Property Management Business
        </h2>

        <p>
          Manage properties, tenants, payments and maintenance
          from one powerful dashboard.
        </p>

      </div>

      <div className="features-layout">

        {/* Left Image */}

        <div className="building-container">

          <img
            src={building}
            alt="Modern Building"
          />

        </div>

        {/* Right Dashboard */}

        <div className="dashboard-panel">

          <div className="dashboard-card">

            <div className="card-top">

              <span>Properties</span>

              <FaBuilding />

            </div>

            <h2>120</h2>

            <p>Managed Buildings</p>

          </div>

          <div className="dashboard-card">

            <div className="card-top">

              <span>Occupancy</span>

              <FaUsers />

            </div>

            <h2>96%</h2>

            <p>Tenant Satisfaction</p>

          </div>

          <div className="dashboard-card">

            <div className="card-top">

              <span>Revenue</span>

              <FaDollarSign />

            </div>

            <h2>$28K</h2>

            <p>Monthly Collection</p>

          </div>

          <div className="dashboard-card">

            <div className="card-top">

              <span>Maintenance</span>

              <FaTools />

            </div>

            <h2>18</h2>

            <p>Open Requests</p>

          </div>

        </div>

      </div>

    </section>

  );

}

export default Features;