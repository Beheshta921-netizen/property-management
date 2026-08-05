import React, { useState } from "react";
import "../styles/RequestDemo.css";

function RequestDemo() {

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="demo-page">

      {/* =========================
          HERO
      ========================= */}

      <section className="demo-hero">

        <div className="demo-hero-content">

          <span className="demo-label">
            PROPERTYPRO DEMO
          </span>

          <h1>
            See PropertyPro
            <span> in Action.</span>
          </h1>

          <p>
            Discover how PropertyPro can simplify your property
            management, automate daily operations, and help you
            grow your rental business.
          </p>

          <div className="demo-points">

            <div>
              <strong>✓</strong>
              Manage properties effortlessly
            </div>

            <div>
              <strong>✓</strong>
              Automate rent collection
            </div>

            <div>
              <strong>✓</strong>
              Track tenants and maintenance
            </div>

          </div>

        </div>


        {/* =========================
            FORM
        ========================= */}

        <div className="demo-form-card">

          {!submitted ? (

            <>
              <div className="form-heading">

                <h2>
                  Request a Demo
                </h2>

                <p>
                  Fill out the form and our team will
                  get in touch with you.
                </p>

              </div>


              <form onSubmit={handleSubmit}>

                <div className="form-row">

                  <div className="form-group">

                    <label>
                      First Name
                    </label>

                    <input
                      type="text"
                      placeholder="Enter your first name"
                      required
                    />

                  </div>


                  <div className="form-group">

                    <label>
                      Last Name
                    </label>

                    <input
                      type="text"
                      placeholder="Enter your last name"
                      required
                    />

                  </div>

                </div>


                <div className="form-group">

                  <label>
                    Work Email
                  </label>

                  <input
                    type="email"
                    placeholder="you@company.com"
                    required
                  />

                </div>


                <div className="form-group">

                  <label>
                    Company
                  </label>

                  <input
                    type="text"
                    placeholder="Your company name"
                    required
                  />

                </div>


                <div className="form-group">

                  <label>
                    Number of Properties
                  </label>

                  <select required>

                    <option value="">
                      Select number of properties
                    </option>

                    <option>
                      1 - 10
                    </option>

                    <option>
                      11 - 50
                    </option>

                    <option>
                      51 - 200
                    </option>

                    <option>
                      201 - 500
                    </option>

                    <option>
                      500+
                    </option>

                  </select>

                </div>


                <div className="form-group">

                  <label>
                    How can we help?
                  </label>

                  <textarea
                    placeholder="Tell us a little about your property management needs..."
                    rows="4"
                  ></textarea>

                </div>


                <button
                  type="submit"
                  className="demo-submit-btn"
                >
                  Request My Demo
                  <span>→</span>
                </button>

              </form>
            </>

          ) : (

            <div className="success-message">

              <div className="success-icon">
                ✓
              </div>

              <h2>
                Thank You!
              </h2>

              <p>
                Your demo request has been received.
                Our team will contact you shortly.
              </p>

              <button
                onClick={() => setSubmitted(false)}
                className="demo-again-btn"
              >
                Submit Another Request
              </button>

            </div>

          )}

        </div>

      </section>


      {/* =========================
          BENEFITS
      ========================= */}

      <section className="demo-benefits">

        <div className="demo-benefits-heading">

          <span>
            WHY PROPERTYPRO
          </span>

          <h2>
            Everything You Need to
            Manage Properties Better
          </h2>

        </div>


        <div className="demo-benefit-grid">

          <div className="demo-benefit-card">

            <div className="benefit-icon">
              🏢
            </div>

            <h3>
              Property Management
            </h3>

            <p>
              Keep properties, tenants, leases and
              important information organized in one place.
            </p>

          </div>


          <div className="demo-benefit-card">

            <div className="benefit-icon">
              💳
            </div>

            <h3>
              Automated Payments
            </h3>

            <p>
              Simplify rent collection and keep track
              of your financial activity.
            </p>

          </div>


          <div className="demo-benefit-card">

            <div className="benefit-icon">
              📊
            </div>

            <h3>
              Powerful Analytics
            </h3>

            <p>
              Get clear insights into occupancy,
              revenue and overall performance.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}

export default RequestDemo;