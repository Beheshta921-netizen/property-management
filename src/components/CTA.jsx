import "../styles/CTA.css";

function CTA() {
  return (
    <section className="cta">

      <div className="cta-content">

        <span className="cta-tag">
          Get Started Today
        </span>

        <h2>
          Ready To Simplify
          <br />
          Property Management?
        </h2>

        <p>
          Join thousands of landlords and property managers who use
          PropertyPro to manage properties, collect rent, and grow
          their business.
        </p>

        <div className="cta-buttons">

          <button className="primary-btn">
            Start Free Trial
          </button>

          <button className="secondary-btn">
            Book a Demo
          </button>

        </div>

      </div>

    </section>
  );
}

export default CTA;