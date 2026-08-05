import "../styles/DashboardSection.css";

function DashboardSection() {
  return (
    <section className="dashboard-section">

      <div className="dashboard-text">

        <span className="section-tag">
          Dashboard
        </span>

        <h2>
          Everything You Need
          <br />
          In One Dashboard
        </h2>

        <p>
          Track rent payments, monitor occupancy,
          manage maintenance requests, and generate
          detailed reports from one modern dashboard.
        </p>

        <ul className="feature-list">
          <li>✔ Real-time analytics</li>
          <li>✔ Tenant management</li>
          <li>✔ Automated rent collection</li>
          <li>✔ Maintenance tracking</li>
        </ul>

        <button className="learn-btn">
          Learn More
        </button>

      </div>

      <div className="dashboard-preview">

        <div className="preview-window">

          <div className="preview-header">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="preview-chart">

            <div className="chart-bars">
              <div className="bar h1"></div>
              <div className="bar h2"></div>
              <div className="bar h3"></div>
              <div className="bar h4"></div>
              <div className="bar h5"></div>
              <div className="bar h6"></div>
            </div>

          </div>

          <div className="preview-cards">

            <div className="mini-box">
              <h3>356</h3>
              <p>Properties</p>
            </div>

            <div className="mini-box">
              <h3>245</h3>
              <p>Tenants</p>
            </div>

            <div className="mini-box">
              <h3>$48K</h3>
              <p>Revenue</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default DashboardSection;