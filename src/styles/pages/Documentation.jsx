import React, { useState } from "react";
import "../styles/Documentation.css";

function Documentation() {
  const [search, setSearch] = useState("");

  const documentationCards = [
    {
      number: "01",
      title: "Getting Started",
      description:
        "Learn the basics and get your PropertyPro workspace ready in just a few steps.",
      links: [
        "Create your account",
        "Set up your workspace",
        "Add your first property",
      ],
    },
    {
      number: "02",
      title: "Property Management",
      description:
        "Manage properties, units, leases, tenants, and everyday operations from one place.",
      links: [
        "Manage properties",
        "Manage units",
        "Manage tenants",
      ],
    },
    {
      number: "03",
      title: "Payments & Billing",
      description:
        "Learn how to manage rent collection, invoices, transactions, and financial records.",
      links: [
        "Collect rent",
        "Create invoices",
        "Track transactions",
      ],
    },
    {
      number: "04",
      title: "Maintenance",
      description:
        "Keep your properties running smoothly by managing requests and maintenance tasks.",
      links: [
        "Create requests",
        "Assign tasks",
        "Track work orders",
      ],
    },
    {
      number: "05",
      title: "Analytics & Reports",
      description:
        "Turn your property data into useful insights with dashboards and detailed reports.",
      links: [
        "View analytics",
        "Occupancy reports",
        "Revenue reports",
      ],
    },
    {
      number: "06",
      title: "Team Management",
      description:
        "Invite your team, assign responsibilities, and control access with flexible permissions.",
      links: [
        "Invite team members",
        "Manage roles",
        "Set permissions",
      ],
    },
  ];

  const popularGuides = [
    "How to set up your PropertyPro account",
    "How to add your first property",
    "How to invite team members",
    "How to collect rent online",
  ];

  const filteredCards = documentationCards.filter((card) => {
    const searchText = search.toLowerCase();

    return (
      card.title.toLowerCase().includes(searchText) ||
      card.description.toLowerCase().includes(searchText) ||
      card.links.some((link) =>
        link.toLowerCase().includes(searchText)
      )
    );
  });

  return (
    <div className="documentation-page">

      {/* =========================
          HERO
      ========================= */}

      <section className="documentation-hero">

        <div className="documentation-hero-content">

          <span className="documentation-tag">
            DOCUMENTATION
          </span>

          <h1>
            Everything you need
            <br />
            to <span>manage better.</span>
          </h1>

          <p>
            Explore guides, resources, and practical information
            to help you get the most out of PropertyPro.
          </p>

          <div className="documentation-search">

            <span className="search-icon">
              ⌕
            </span>

            <input
              type="text"
              placeholder="Search documentation..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <span className="search-key">
              /
            </span>

          </div>

        </div>

      </section>


      {/* =========================
          QUICK LINKS
      ========================= */}

      <section className="quick-links-section">

        <div className="documentation-container">

          <div className="section-heading">

            <div>

              <span className="small-label">
                QUICK ACCESS
              </span>

              <h2>
                Start with the essentials.
              </h2>

            </div>

            <p>
              Find the information you need to get started
              and make the most of your PropertyPro workspace.
            </p>

          </div>


          <div className="quick-links">

            <a href="#documentation">
              <div>
                <span>01</span>
                <h3>Getting Started</h3>
              </div>

              <strong>→</strong>
            </a>


            <a href="#documentation">
              <div>
                <span>02</span>
                <h3>Manage Properties</h3>
              </div>

              <strong>→</strong>
            </a>


            <a href="#documentation">
              <div>
                <span>03</span>
                <h3>Manage Tenants</h3>
              </div>

              <strong>→</strong>
            </a>

          </div>

        </div>

      </section>


      {/* =========================
          DOCUMENTATION
      ========================= */}

      <section
        className="documentation-content"
        id="documentation"
      >

        <div className="documentation-container">

          <div className="section-heading centered">

            <span className="small-label">
              EXPLORE DOCUMENTATION
            </span>

            <h2>
              Learn how PropertyPro works.
            </h2>

            <p>
              Explore our guides and find simple answers
              for every part of your property management workflow.
            </p>

          </div>


          <div className="documentation-grid">

            {filteredCards.map((card, index) => (

              <div
                className="documentation-card"
                key={index}
              >

                <div className="card-top">

                  <span className="card-number">
                    {card.number}
                  </span>

                  <span className="card-arrow">
                    ↗
                  </span>

                </div>

                <h3>
                  {card.title}
                </h3>

                <p>
                  {card.description}
                </p>

                <div className="card-links">

                  {card.links.map((link, linkIndex) => (

                    <a
                      href="#"
                      key={linkIndex}
                    >
                      <span>{link}</span>
                      <strong>→</strong>
                    </a>

                  ))}

                </div>

              </div>

            ))}

          </div>


          {filteredCards.length === 0 && (

            <div className="no-results">
              <h3>No documentation found</h3>

              <p>
                Try searching for another topic or keyword.
              </p>
            </div>

          )}

        </div>

      </section>


      {/* =========================
          POPULAR GUIDES
      ========================= */}

      <section className="guides-section">

        <div className="documentation-container">

          <div className="section-heading">

            <div>

              <span className="small-label">
                POPULAR GUIDES
              </span>

              <h2>
                Frequently used resources.
              </h2>

            </div>

            <a
              href="#documentation"
              className="view-all"
            >
              View all guides →
            </a>

          </div>


          <div className="guides-list">

            {popularGuides.map((guide, index) => (

              <a
                href="#"
                className="guide-item"
                key={index}
              >

                <span className="guide-number">
                  0{index + 1}
                </span>

                <h3>
                  {guide}
                </h3>

                <span className="guide-arrow">
                  →
                </span>

              </a>

            ))}

          </div>

        </div>

      </section>


      {/* =========================
          SUPPORT CTA
      ========================= */}

      <section className="documentation-support">

        <div className="documentation-container">

          <div className="support-box">

            <div className="support-content">

              <span className="small-label">
                NEED HELP?
              </span>

              <h2>
                We're here when
                <br />
                you need us.
              </h2>

              <p>
                Can't find the answer you're looking for?
                Our support team is ready to help you.
              </p>

            </div>


            <div className="support-buttons">

              <a
                href="/help-center"
                className="support-primary"
              >
                Visit Help Center
                <span>→</span>
              </a>

              <a
                href="/contact"
                className="support-secondary"
              >
                Contact Support
              </a>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Documentation;