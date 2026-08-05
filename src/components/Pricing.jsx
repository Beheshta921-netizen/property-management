import "../styles/Pricing.css";

function Pricing() {
  return (
    <section id="pricing" className="pricing-section fade-up">

      <div className="pricing-header">

        <span className="pricing-tag">
          Pricing
        </span>

        <h2>
          Simple Pricing For
          <br />
          Every Business
        </h2>

        <p>
          Choose the perfect plan for your property portfolio.
          Upgrade anytime as your business grows.
        </p>

        {/* Billing Toggle */}
        <div className="billing-toggle">
          <button className="active">
            Monthly
          </button>

          <button>
            Yearly
            <span className="save-badge">
              Save 20%
            </span>
          </button>
        </div>

      </div>

      <div className="pricing-cards">

        {/* Starter */}

        <div className="pricing-card">

          <h3>Starter</h3>

          <h1>
            $19
            <span>/month</span>
          </h1>

          <p>
            Perfect for individual landlords.
          </p>

          <ul>
            <li>✔ Up to 10 Properties</li>
            <li>✔ Tenant Management</li>
            <li>✔ Rent Collection</li>
            <li>✔ Email Support</li>
          </ul>

          <button>
            Choose Plan
          </button>

        </div>

        {/* Professional */}

        <div className="pricing-card featured">

          <div className="badge">
            MOST POPULAR
          </div>

          <h3>Professional</h3>

          <h1>
            $49
            <span>/month</span>
          </h1>

          <p>
            Best for growing property businesses.
          </p>

          <ul>
            <li>✔ Unlimited Properties</li>
            <li>✔ Tenant Management</li>
            <li>✔ Online Payments</li>
            <li>✔ Maintenance Requests</li>
            <li>✔ Reports & Analytics</li>
            <li>✔ Priority Support</li>
          </ul>

          <button>
            Get Started
          </button>

        </div>

        {/* Enterprise */}

        <div className="pricing-card">

          <h3>Enterprise</h3>

          <h1>
            $99
            <span>/month</span>
          </h1>

          <p>
            Designed for agencies and enterprise teams.
          </p>

          <ul>
            <li>✔ Everything in Professional</li>
            <li>✔ API Access</li>
            <li>✔ Dedicated Manager</li>
            <li>✔ Custom Integrations</li>
            <li>✔ Premium 24/7 Support</li>
          </ul>

          <button>
            Contact Sales
          </button>

        </div>

      </div>

    </section>
  );
}

export default Pricing;