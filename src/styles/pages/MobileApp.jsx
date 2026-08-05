import "../styles/MobileApp.css";

function MobileApp() {
  return (
    <div className="mobile-page">

      {/* ================= HERO ================= */}

      <section className="mobile-hero">

        <div className="mobile-left">

          <span className="mobile-badge">
            MOBILE EXPERIENCE
          </span>

          <h1>
            Manage Your
            <br />
            Properties
            <br />
            Anywhere
          </h1>

          <p>
            Stay connected with your business wherever you are.
            PropertyPro Mobile lets you manage properties,
            communicate with tenants, receive instant notifications,
            and monitor your portfolio from your smartphone.
          </p>

          <div className="mobile-buttons">

            <button className="primary-btn">
              Download App
            </button>

            <button className="secondary-btn">
              Watch Demo
            </button>

          </div>

          <div className="mobile-stats">

            <div className="mobile-stat">
              <h3>50K+</h3>
              <p>Downloads</p>
            </div>

            <div className="mobile-stat">
              <h3>4.9★</h3>
              <p>User Rating</p>
            </div>

            <div className="mobile-stat">
              <h3>99.9%</h3>
              <p>Cloud Sync</p>
            </div>

          </div>

        </div>

        <div className="mobile-right">

          <div className="phone-mockup">

            <div className="phone-top"></div>

            <div className="phone-screen">

              <div className="screen-header">
                <h4>PropertyPro</h4>
                <span>Online</span>
              </div>

              <div className="dashboard-card">
                <h3>128</h3>
                <p>Active Properties</p>
              </div>

              <div className="dashboard-card">
                <h3>$84K</h3>
                <p>Monthly Revenue</p>
              </div>

              <div className="dashboard-card">
                <h3>24</h3>
                <p>Pending Requests</p>
              </div>

            </div>

          </div>

          <div className="floating-card notification-card">
            🔔 New Maintenance Request
          </div>

          <div className="floating-card sync-card">
            ☁ Cloud Sync Complete
          </div>

        </div>

      </section>

      {/* ================= FEATURES ================= */}

      <section className="mobile-features">

        <div className="section-title">

          <span>WHY PROPERTYPRO MOBILE</span>

          <h2>
            Everything You Need
            <br />
            On The Go
          </h2>

          <p>
            Access all the tools you use every day directly from
            your mobile device.
          </p>

        </div>

        <div className="mobile-grid">

          <div className="mobile-feature-card">

            <div className="feature-icon">📲</div>

            <h3>Real-Time Updates</h3>

            <p>
              Instantly receive updates whenever tenants submit
              requests, payments are received, or leases change.
            </p>

          </div>

          <div className="mobile-feature-card">

            <div className="feature-icon">🔔</div>

            <h3>Push Notifications</h3>

            <p>
              Stay informed with smart alerts for maintenance,
              payments, inspections, and important events.
            </p>

          </div>

          <div className="mobile-feature-card">

            <div className="feature-icon">📶</div>

            <h3>Offline Access</h3>

            <p>
              Continue viewing important property information
              even when you're offline.
            </p>

          </div>

          <div className="mobile-feature-card">

            <div className="feature-icon">🔄</div>

            <h3>Automatic Sync</h3>

            <p>
              All changes are securely synchronized across
              every device in real time.
            </p>

          </div>

          <div className="mobile-feature-card">

            <div className="feature-icon">🔐</div>

            <h3>Biometric Login</h3>

            <p>
              Quickly access your account using Face ID
              or fingerprint authentication.
            </p>

          </div>

          <div className="mobile-feature-card">

            <div className="feature-icon">📷</div>

            <h3>QR Code Scanner</h3>

            <p>
              Scan property labels, maintenance tags,
              and tenant documents instantly.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}

export default MobileApp;
      {/* ================= PLATFORM ================= */}

      <section className="platform-section">

        <div className="platform-left">

          <span className="section-badge">
            AVAILABLE EVERYWHERE
          </span>

          <h2>
            Built For Every
            <br />
            Device You Use
          </h2>

          <p>
            Whether you're in the office, visiting a property, or
            traveling, PropertyPro Mobile keeps your portfolio within
            reach. Your data stays synchronized across every device
            automatically.
          </p>

          <div className="platform-list">

            <div className="platform-item">
              <div className="platform-icon">🍎</div>

              <div>
                <h4>iPhone & iPad</h4>
                <p>Optimized for every iOS device.</p>
              </div>
            </div>

            <div className="platform-item">
              <div className="platform-icon">🤖</div>

              <div>
                <h4>Android Devices</h4>
                <p>Works perfectly on phones and tablets.</p>
              </div>
            </div>

            <div className="platform-item">
              <div className="platform-icon">☁</div>

              <div>
                <h4>Instant Cloud Sync</h4>
                <p>Your data updates across every device instantly.</p>
              </div>
            </div>

            <div className="platform-item">
              <div className="platform-icon">🔒</div>

              <div>
                <h4>Secure Access</h4>
                <p>Enterprise-grade encryption keeps your data protected.</p>
              </div>
            </div>

          </div>

        </div>

        <div className="platform-right">

          <div className="showcase-phone">

            <div className="showcase-screen">

              <div className="mini-card">
                <h3>Revenue</h3>
                <h2>$84,230</h2>
              </div>

              <div className="mini-card">
                <h3>Occupancy</h3>
                <h2>97%</h2>
              </div>

              <div className="mini-card">
                <h3>Maintenance</h3>
                <h2>12 Open</h2>
              </div>

            </div>

          </div>

          <div className="floating-widget widget-left">
            ✅ Payment Received
          </div>

          <div className="floating-widget widget-right">
            🚀 Sync Successful
          </div>

        </div>

      </section>

      {/* ================= DOWNLOAD ================= */}

      <section className="download-section">

        <span className="section-badge">
          DOWNLOAD NOW
        </span>

        <h2>
          Get PropertyPro
          <br />
          On Your Phone Today
        </h2>

        <p>
          Download the PropertyPro mobile app and manage your
          properties from anywhere with real-time updates,
          secure cloud synchronization, and powerful tools
          designed for busy property managers.
        </p>

        <div className="store-buttons">

          <button className="store-btn">
            🍎 Download on the
            <strong> App Store</strong>
          </button>

          <button className="store-btn">
            ▶ Get it on
            <strong> Google Play</strong>
          </button>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="mobile-cta">

        <h2>
          Manage Properties
          <br />
          Wherever Business Takes You
        </h2>

        <p>
          Join thousands of property managers using PropertyPro
          Mobile to stay connected, productive, and in control.
        </p>

        <div className="cta-buttons">

          <button className="primary-btn">
            Start Free Trial
          </button>

          <button className="secondary-btn">
            Contact Sales
          </button>

        </div>

      </section>
