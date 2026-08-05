import React, { useState } from "react";
import "../styles/Careers.css";

function Careers() {

  const [activeFilter, setActiveFilter] = useState("All");

  const jobs = [
    {
      title: "Frontend Developer",
      department: "Engineering",
      location: "Islamabad, Pakistan",
      type: "Full-time",
      description:
        "Build modern, responsive interfaces that make property management simple and intuitive."
    },
    {
      title: "Backend Developer",
      department: "Engineering",
      location: "Islamabad, Pakistan",
      type: "Full-time",
      description:
        "Design scalable APIs and reliable systems that power the PropertyPro platform."
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      description:
        "Create thoughtful digital experiences for property managers, owners, and tenants."
    },
    {
      title: "Product Marketing Manager",
      department: "Marketing",
      location: "Dubai, UAE",
      type: "Full-time",
      description:
        "Develop strategies that connect PropertyPro with property professionals around the world."
    },
    {
      title: "Customer Success Specialist",
      department: "Customer Success",
      location: "Remote",
      type: "Full-time",
      description:
        "Help customers get the most value from PropertyPro and build long-term relationships."
    },
    {
      title: "Sales Development Representative",
      department: "Sales",
      location: "London, UK",
      type: "Full-time",
      description:
        "Connect PropertyPro with growing property businesses and help them discover better workflows."
    }
  ];

  const filters = [
    "All",
    "Engineering",
    "Design",
    "Marketing",
    "Sales",
    "Customer Success"
  ];

  const filteredJobs =
    activeFilter === "All"
      ? jobs
      : jobs.filter(job => job.department === activeFilter);


  return (
    <div className="careers-page">

      {/* =========================
          HERO
      ========================= */}

      <section className="careers-hero">

        <div className="careers-hero-content">

          <span className="careers-label">
            CAREERS AT PROPERTYPRO
          </span>

          <h1>
            Build the future of
            <span> property management.</span>
          </h1>

          <p>
            Join a team building smarter tools for property
            professionals around the world. Bring your ideas,
            creativity, and ambition to PropertyPro.
          </p>

          <div className="career-hero-buttons">

            <a
              href="#open-positions"
              className="career-primary-btn"
            >
              Explore Open Roles
              <span>→</span>
            </a>

            <a
              href="#why-propertypro"
              className="career-secondary-btn"
            >
              Why PropertyPro?
            </a>

          </div>

        </div>


        <div className="careers-hero-visual">

          <div className="visual-main-card">

            <div className="visual-top">

              <span className="visual-dot"></span>

              <span className="visual-dot"></span>

              <span className="visual-dot"></span>

            </div>

            <div className="visual-content">

              <div className="visual-line large"></div>
              <div className="visual-line"></div>
              <div className="visual-line short"></div>

              <div className="visual-stats">

                <div></div>
                <div></div>
                <div></div>

              </div>

            </div>

          </div>

          <div className="floating-card floating-one">
            <strong>25+</strong>
            <span>Open Opportunities</span>
          </div>

          <div className="floating-card floating-two">
            <strong>Global</strong>
            <span>Remote-friendly team</span>
          </div>

        </div>

      </section>


      {/* =========================
          STATS
      ========================= */}

      <section className="career-stats">

        <div className="career-stat">
          <strong>50+</strong>
          <span>Team Members</span>
        </div>

        <div className="career-stat">
          <strong>12+</strong>
          <span>Countries</span>
        </div>

        <div className="career-stat">
          <strong>4.9/5</strong>
          <span>Team Satisfaction</span>
        </div>

        <div className="career-stat">
          <strong>100%</strong>
          <span>Growth Mindset</span>
        </div>

      </section>


      {/* =========================
          WHY PROPERTYPRO
      ========================= */}

      <section
        className="why-careers"
        id="why-propertypro"
      >

        <div className="why-careers-heading">

          <span className="section-label">
            WHY PROPERTYPRO
          </span>

          <h2>
            Do meaningful work
            <br />
            with a great team.
          </h2>

          <p>
            We believe great products are built by curious,
            collaborative people who care about solving
            meaningful problems.
          </p>

        </div>


        <div className="career-benefits">

          <div className="benefit-card">

            <div className="benefit-number">
              01
            </div>

            <h3>
              Make an Impact
            </h3>

            <p>
              Your work directly helps property professionals
              save time, improve operations, and grow their businesses.
            </p>

          </div>


          <div className="benefit-card">

            <div className="benefit-number">
              02
            </div>

            <h3>
              Grow Your Career
            </h3>

            <p>
              Take ownership, learn new skills, and work on
              projects that challenge you to become better.
            </p>

          </div>


          <div className="benefit-card">

            <div className="benefit-number">
              03
            </div>

            <h3>
              Work Your Way
            </h3>

            <p>
              We support flexible work styles and believe
              great ideas can come from anywhere.
            </p>

          </div>


          <div className="benefit-card">

            <div className="benefit-number">
              04
            </div>

            <h3>
              Build Together
            </h3>

            <p>
              Collaborate with talented people across
              engineering, design, product, and business.
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          OPEN POSITIONS
      ========================= */}

      <section
        className="open-positions"
        id="open-positions"
      >

        <div className="positions-header">

          <div>

            <span className="section-label">
              JOIN OUR TEAM
            </span>

            <h2>
              Find your next opportunity.
            </h2>

          </div>

          <p>
            Explore roles where you can make an impact
            and grow with PropertyPro.
          </p>

        </div>


        {/* Filters */}

        <div className="job-filters">

          {filters.map(filter => (

            <button
              key={filter}
              className={
                activeFilter === filter
                  ? "filter active"
                  : "filter"
              }
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>

          ))}

        </div>


        {/* Jobs */}

        <div className="jobs-list">

          {filteredJobs.map((job, index) => (

            <div
              className="job-card"
              key={index}
            >

              <div className="job-main">

                <span className="job-department">
                  {job.department}
                </span>

                <h3>
                  {job.title}
                </h3>

                <p>
                  {job.description}
                </p>

                <div className="job-meta">

                  <span>
                    {job.location}
                  </span>

                  <span>
                    {job.type}
                  </span>

                </div>

              </div>


              <button className="job-apply">
                Apply
                <span>↗</span>
              </button>

            </div>

          ))}

        </div>

      </section>


      {/* =========================
          CTA
      ========================= */}

      <section className="careers-cta">

        <div>

          <span className="section-label">
            DON'T SEE YOUR ROLE?
          </span>

          <h2>
            We are always looking
            <br />
            for great people.
          </h2>

          <p>
            Send us your resume and tell us how you
            could contribute to PropertyPro.
          </p>

          <a
            href="mailto:careers@propertypro.com"
            className="cta-career-button"
          >
            Send Your Resume
            <span>→</span>
          </a>

        </div>

      </section>

    </div>
  );
}

export default Careers;