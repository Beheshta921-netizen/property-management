import "../styles/WhyChooseUs.css";

function WhyChooseUs() {
  return (
    <section className="why">

      {/* LEFT */}
      <div className="why-left">

        <span className="why-tag">
          Reasons to Select Us
        </span>

        <h2>
          Modern tools built for
          <br />
          today's property teams.
        </h2>

        <p>
          Streamline operations, reduce manual tasks,
          and maximize revenue with one platform.
        </p>

        <div className="feature-list">

          <div className="feature-item">
            <span>📦</span>
            <p>Unified dashboard for all properties & tenants</p>
          </div>

          <div className="feature-item">
            <span>💳</span>
            <p>Automated rent collection & reminders</p>
          </div>

          <div className="feature-item">
            <span>🛠</span>
            <p>Online maintenance requests & work orders</p>
          </div>

          <div className="feature-item">
            <span>🤖</span>
            <p>AI-powered tenant screening</p>
          </div>

          <div className="feature-item">
            <span>📊</span>
            <p>Real-time financial insights</p>
          </div>

        </div>

      </div>

      {/* RIGHT */}
      <div className="why-right">

        <div className="image-box">

          <img
            src="https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1200"
            alt="Building"
          />

        </div>

        {/* Analytics Card */}
        <div className="analytics-card">

          <h4>Transaction statistics</h4>

          <h2>$41,379</h2>

          <div className="bars">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="discount">
            20%
          </div>

        </div>

        {/* Profit Card */}
        <div className="profit-card">

          <h5>Profit</h5>

          <h2>85.4%</h2>

          <svg
            className="profit-chart"
            viewBox="0 0 300 90"
          >

            <path
              d="
              M0 55
              C25 60 40 60 60 55
              S90 25 110 40
              S150 70 170 45
              S200 15 220 42
              S250 62 270 30
              S290 40 300 35
              "
              fill="none"
              stroke="#7c4dff"
              strokeWidth="4"
              strokeLinecap="round"
            />

            <path
              d="
              M0 55
              C25 60 40 60 60 55
              S90 25 110 40
              S150 70 170 45
              S200 15 220 42
              S250 62 270 30
              S290 40 300 35
              "
              fill="none"
              stroke="#cbb6ff"
              strokeWidth="12"
              opacity=".25"
            />

          </svg>

          <div className="avatar-group">

            <img src="https://i.pravatar.cc/60?img=11" alt="" />
            <img src="https://i.pravatar.cc/60?img=22" alt="" />
            <img src="https://i.pravatar.cc/60?img=33" alt="" />
            <img src="https://i.pravatar.cc/60?img=44" alt="" />

          </div>

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;