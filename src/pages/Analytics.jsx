import "../styles/Analytics.css";

function Analytics() {
  return (
    <div className="analytics-page">

      {/* Hero */}

      <section className="analytics-hero">

        <div className="analytics-left">

          <span className="analytics-badge">
            PROPERTY ANALYTICS
          </span>

          <h1>
            Powerful Analytics
            <br />
            For Better Decisions
          </h1>

          <p>
            Transform your property data into actionable insights.
            Track occupancy, revenue, expenses, maintenance,
            and tenant performance with beautiful dashboards.
          </p>

          <div className="analytics-buttons">
            <button className="primary-btn">
              Start Free Trial
            </button>

            <button className="secondary-btn">
              View Demo
            </button>
          </div>

        </div>

        {/* Dashboard */}

        <div className="analytics-dashboard">

          <div className="dashboard-card revenue">
            <span>Total Revenue</span>
            <h2>$284,500</h2>
            <small>+18% this month</small>
          </div>

          <div className="dashboard-card occupancy">
            <span>Occupancy</span>
            <h2>97%</h2>
            <small>Highest this year</small>
          </div>

          <div className="dashboard-card expenses">
            <span>Expenses</span>
            <h2>$18,200</h2>
            <small>Maintenance Included</small>
          </div>

          <div className="dashboard-card tenants">
            <span>Active Tenants</span>
            <h2>1,286</h2>
            <small>+45 New</small>
          </div>

        </div>

      </section>

      {/* Features */}

      <section className="analytics-features">

        <h2>Everything You Need To Analyze Your Business</h2>

        <div className="feature-grid">

          <div className="feature-box">
            <h3>Financial Reports</h3>
            <p>
              Generate income statements, balance sheets,
              revenue reports and expense analysis instantly.
            </p>
          </div>

          <div className="feature-box">
            <h3>Occupancy Insights</h3>
            <p>
              Identify vacancies, monitor occupancy trends,
              and maximize rental income.
            </p>
          </div>

          <div className="feature-box">
            <h3>Maintenance Analytics</h3>
            <p>
              Track repair costs, request completion time,
              and contractor performance.
            </p>
          </div>

          <div className="feature-box">
            <h3>Tenant Performance</h3>
            <p>
              Analyze payment history, lease renewals,
              and tenant satisfaction scores.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="analytics-cta">

        <h2>
          Ready to Grow Your Portfolio?
        </h2>

        <p>
          Join thousands of property managers making smarter
          decisions with real-time analytics.
        </p>

        <button>
          Get Started
        </button>

      </section>

    </div>
  );
}

export default Analytics;