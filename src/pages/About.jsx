import "../styles/About.css";

function About() {
  return (
    <div className="about-page">

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-content">
          <h1>About PropertyPro</h1>
          <p>
            We are transforming the way people buy, sell, and manage
            properties through innovative technology and trusted solutions.
          </p>

          <button className="about-btn">
            Discover More
          </button>
        </div>
      </section>


      {/* Mission Section */}
      <section className="mission-section">

        <div className="mission-card">
          <h2>Our Mission</h2>
          <p>
            Our mission is to simplify property management by connecting
            owners, agents, and customers through a powerful digital platform.
          </p>
        </div>


        <div className="mission-card">
          <h2>Our Vision</h2>
          <p>
            We aim to become the world's most trusted property technology
            platform, making real estate simple and accessible for everyone.
          </p>
        </div>

      </section>


      {/* Stats Section */}
      <section className="stats">

        <div>
          <h2>50+</h2>
          <p>Countries Served</p>
        </div>

        <div>
          <h2>10K+</h2>
          <p>Happy Customers</p>
        </div>

        <div>
          <h2>500+</h2>
          <p>Property Partners</p>
        </div>

        <div>
          <h2>24/7</h2>
          <p>Customer Support</p>
        </div>

      </section>


      {/* Story Section */}
      <section className="story">

        <div>
          <h2>Our Story</h2>

          <p>
            PropertyPro started with a simple idea: make property management
            easier, faster, and more transparent. Today, we help businesses
            and individuals manage their real estate with confidence.
          </p>
        </div>

      </section>


    </div>
  );
}

export default About;