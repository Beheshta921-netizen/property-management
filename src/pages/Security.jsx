import "../styles/Security.css";

function Security() {
  return (
    <div className="security-page">

      {/* Hero */}

      <section className="security-hero">

        <div className="security-left">

          <span className="security-badge">
            ENTERPRISE SECURITY
          </span>

          <h1>
            Protect Your Properties
            <br />
            With Enterprise-Level
            <br />
            Security
          </h1>

          <p>
            Keep your property portfolio safe with bank-level encryption,
            secure cloud infrastructure, advanced authentication, and
            continuous monitoring.
          </p>

          <div className="security-buttons">

            <button className="primary-btn">
              Explore Security
            </button>

            <button className="secondary-btn">
              Documentation
            </button>

          </div>

        </div>

        <div className="security-dashboard">

          <div className="security-card">
            <h4>Encrypted Data</h4>
            <h2>99.99%</h2>
            <p>Protected with AES-256 Encryption</p>
          </div>

          <div className="security-card">
            <h4>Threats Blocked</h4>
            <h2>14,289</h2>
            <p>Last 30 Days</p>
          </div>

          <div className="security-card">
            <h4>Cloud Backup</h4>
            <h2>Daily</h2>
            <p>Automatic Secure Backups</p>
          </div>

          <div className="security-card">
            <h4>System Status</h4>
            <h2>99.98%</h2>
            <p>Guaranteed Uptime</p>
          </div>

        </div>

      </section>

      {/* Features */}

      <section className="security-features">

        <h2>Security Features</h2>

        <div className="security-grid">

          <div className="feature-card">
            <h3>End-to-End Encryption</h3>
            <p>
              Every property record is encrypted before being stored.
            </p>
          </div>

          <div className="feature-card">
            <h3>Two-Factor Authentication</h3>
            <p>
              Secure logins using SMS, email, or authenticator apps.
            </p>
          </div>

          <div className="feature-card">
            <h3>Role Permissions</h3>
            <p>
              Control what owners, managers, and staff can access.
            </p>
          </div>

          <div className="feature-card">
            <h3>Audit Logs</h3>
            <p>
              Track every action taken across your organization.
            </p>
          </div>

          <div className="feature-card">
            <h3>Automatic Backup</h3>
            <p>
              Daily encrypted cloud backups keep your data safe.
            </p>
          </div>

          <div className="feature-card">
            <h3>GDPR Ready</h3>
            <p>
              Built with international privacy and compliance standards.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="security-cta">

        <h2>
          Security Trusted By
          <br />
          Thousands Of Property Managers
        </h2>

        <p>
          Your business deserves enterprise-grade protection.
        </p>

        <button>
          Start Free Trial
        </button>

      </section>

    </div>
  );
}

export default Security;