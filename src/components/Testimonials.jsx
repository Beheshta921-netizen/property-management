import "../styles/Testimonials.css";

function Testimonials() {
  return (
    <section className="pricing-section fade-up">
      <section className="testimonials">
        <div className="testimonial-header">
          <span className="section-tag">
            Testimonials
          </span>

          <h2>
            Loved By Property
            <br />
            Managers Worldwide
          </h2>

          <p>
            Thousands of property managers trust our platform to simplify
            daily operations and grow their business.
          </p>
        </div>

        <div className="testimonial-grid">

          <div className="testimonial-card">
            <div className="stars">
              ⭐⭐⭐⭐⭐
            </div>

            <p>
              "This software completely changed how we manage our rental
              properties. Everything is now organized in one place."
            </p>

            <div className="customer">
              <img
                src="https://i.pravatar.cc/100?img=12"
                alt="Sarah Johnson"
              />

              <div>
                <h4>Sarah Johnson</h4>
                <span>Property Manager</span>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="stars">
              ⭐⭐⭐⭐⭐
            </div>

            <p>
              "Rent collection is effortless and maintenance requests are
              much easier to track than before."
            </p>

            <div className="customer">
              <img
                src="https://i.pravatar.cc/100?img=25"
                alt="Michael Brown"
              />

              <div>
                <h4>Michael Brown</h4>
                <span>Real Estate Agency</span>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="stars">
              ⭐⭐⭐⭐⭐
            </div>

            <p>
              "The reports and analytics help us make better business
              decisions every month."
            </p>

            <div className="customer">
              <img
                src="https://i.pravatar.cc/100?img=48"
                alt="Emily Davis"
              />

              <div>
                <h4>Emily Davis</h4>
                <span>Business Owner</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </section>
  );
}

export default Testimonials;