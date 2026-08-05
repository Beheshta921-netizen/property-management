import "../styles/Pages.css";

function Resources() {
  return (
    <div className="page-container">
      <h1>Resources</h1>

      <p>
        Everything you need to make the most of PropertyPro in one place.
      </p>

      <div className="page-grid">
        <div className="page-card">
          <h3>Documentation</h3>
          <p>Learn every feature of the platform.</p>
        </div>

        <div className="page-card">
          <h3>Video Tutorials</h3>
          <p>Watch step-by-step learning videos.</p>
        </div>

        <div className="page-card">
          <h3>Blog</h3>
          <p>Read our latest real estate articles.</p>
        </div>

        <div className="page-card">
          <h3>Help Center</h3>
          <p>Frequently asked questions.</p>
        </div>
      </div>
    </div>
  );
}

export default Resources;