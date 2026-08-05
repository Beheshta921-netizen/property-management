

import React, { useState } from "react";
import "../styles/Blog.css";

import HHH from "../assets/HHH.jpg";
import modernVilla from "../assets/Beautiful Modern Villa.jpg";
import download16 from "../assets/download (16).jpg";
import download17 from "../assets/download (17).jpg";
import coastalArchitecture from "../assets/Stunning Coastal Architecture_ Multi-Level Garage for Red Supercars.jpg";
import luxuryResort from "../assets/Luxury resort design.jpg";

function Blog() {

  const [activeCategory, setActiveCategory] = useState("All");


  const categories = [
    "All",
    "Property Management",
    "Technology",
    "Business",
    "Industry Insights",
  ];


  const articles = [

    {
      category: "Property Management",
      date: "June 18, 2026",
      read: "6 min read",

      title:
        "The Complete Guide to Modern Property Management",

      description:
        "Discover practical strategies for simplifying operations, improving tenant experiences, and managing your portfolio more efficiently.",

      image: HHH,

      featured: true,
    },


    {
      category: "Technology",
      date: "June 12, 2026",
      read: "5 min read",

      title:
        "How Automation Is Changing Property Management",

      description:
        "Learn how automation can reduce repetitive work and help property teams focus on what matters most.",

      image: modernVilla,
    },


    {
      category: "Business",
      date: "June 05, 2026",
      read: "4 min read",

      title:
        "5 Ways to Improve Your Property Management Workflow",

      description:
        "Simple improvements that can help your team save time and create a smoother management process.",

      image: download16,
    },


    {
      category: "Industry Insights",
      date: "May 28, 2026",
      read: "7 min read",

      title:
        "What Tenants Expect From Property Managers Today",

      description:
        "Explore the changing expectations of modern tenants and how property managers can deliver better experiences.",

      image: download17,
    },


    {
      category: "Property Management",
      date: "May 20, 2026",
      read: "5 min read",

      title:
        "A Smarter Approach to Tenant Communication",

      description:
        "Build stronger tenant relationships with better communication, organization, and timely follow-ups.",

      image: coastalArchitecture,
    },


    {
      category: "Technology",
      date: "May 14, 2026",
      read: "6 min read",

      title:
        "Why Data Matters in Property Management",

      description:
        "See how meaningful property data can help you make faster and more informed business decisions.",

      image: luxuryResort,
    },

  ];


  const filteredArticles =
    activeCategory === "All"
      ? articles
      : articles.filter(
          (article) =>
            article.category === activeCategory
        );


  const featuredArticle = articles.find(
    (article) => article.featured
  );


  return (

    <div className="blog-page">


      {/* ======================================
          HERO
      ====================================== */}

      <section className="blog-hero">

        <div className="blog-container">

          <div className="blog-hero-content">

            <span className="blog-tag">
              PROPERTYPRO INSIGHTS
            </span>


            <h1>

              Ideas and insights

              <br />

              for <span>better management.</span>

            </h1>


            <p>

              Practical advice, industry insights, and
              the latest ideas to help property
              professionals work smarter, grow their
              business, and create better experiences.

            </p>

          </div>

        </div>

      </section>



      {/* ======================================
          FEATURED ARTICLE
      ====================================== */}

      <section className="featured-section">

        <div className="blog-container">

          <div className="featured-article">


            {/* Image */}

            <div className="featured-image">

              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
              />


              <div className="featured-image-label">

                Featured Article

              </div>

            </div>



            {/* Content */}

            <div className="featured-content">


              <div className="article-meta">

                <span>
                  {featuredArticle.category}
                </span>

                <i></i>

                <span>
                  {featuredArticle.date}
                </span>

              </div>


              <h2>
                {featuredArticle.title}
              </h2>


              <p>
                {featuredArticle.description}
              </p>


              <div className="featured-bottom">

                <span className="read-time">

                  {featuredArticle.read}

                </span>


                <a href="#">

                  Read Article

                  <span>
                    →
                  </span>

                </a>

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* ======================================
          LATEST ARTICLES
      ====================================== */}

      <section className="articles-section">

        <div className="blog-container">


          <div className="articles-heading">


            <div>

              <span className="small-label">

                LATEST ARTICLES

              </span>


              <h2>

                Fresh ideas for
                your business.

              </h2>

            </div>


            <p>

              Stay informed with practical resources
              designed for modern property professionals.

            </p>

          </div>



          {/* Categories */}

          <div className="blog-categories">

            {categories.map((category) => (

              <button
                key={category}

                className={
                  activeCategory === category
                    ? "category-active"
                    : ""
                }

                onClick={() =>
                  setActiveCategory(category)
                }

              >

                {category}

              </button>

            ))}

          </div>



          {/* Article Cards */}

          <div className="articles-grid">

            {filteredArticles

              .filter(
                (article) => !article.featured
              )

              .map((article, index) => (

                <article
                  className="article-card"
                  key={index}
                >


                  {/* Article Image */}

                  <div className="article-image">

                    <img
                      src={article.image}
                      alt={article.title}
                    />


                    <span>
                      {article.category}
                    </span>

                  </div>



                  {/* Article Content */}

                  <div className="article-card-content">


                    <div className="article-date">

                      <span>
                        {article.date}
                      </span>

                      <span>
                        {article.read}
                      </span>

                    </div>


                    <h3>
                      {article.title}
                    </h3>


                    <p>
                      {article.description}
                    </p>


                    <a href="#">

                      Read More

                      <span>
                        →
                      </span>

                    </a>

                  </div>

                </article>

              ))}

          </div>



          {/* No Results */}

          {filteredArticles.filter(
            (article) => !article.featured
          ).length === 0 && (

            <div className="blog-no-results">

              <h3>
                No articles found
              </h3>

              <p>
                Try selecting another category.
              </p>

            </div>

          )}

        </div>

      </section>



      {/* ======================================
          NEWSLETTER
      ====================================== */}

      <section className="newsletter-section">

        <div className="blog-container">

          <div className="newsletter-box">


            <div className="newsletter-content">

              <span className="newsletter-label">

                STAY IN THE LOOP

              </span>


              <h2>

                Get better property

                <br />

                management insights.

              </h2>


              <p>

                Join our newsletter for useful strategies,
                industry updates, and practical tips delivered
                straight to your inbox.

              </p>

            </div>



            <div className="newsletter-form">

              <input
                type="email"
                placeholder="Enter your email address"
              />


              <button>

                Subscribe

                <span>
                  →
                </span>

              </button>


              <small>

                No spam. Unsubscribe anytime.

              </small>

            </div>

          </div>

        </div>

      </section>



      {/* ======================================
          FINAL CTA
      ====================================== */}

      <section className="blog-cta">

        <div className="blog-container">

          <div className="blog-cta-content">


            <span className="small-label">

              PROPERTYPRO

            </span>


            <h2>

              Ready to manage

              <br />

              properties smarter?

            </h2>


            <p>

              Bring your properties, tenants, payments,
              and operations together in one powerful platform.

            </p>


            <a href="/signup">

              Get Started

              <span>
                →
              </span>

            </a>

          </div>

        </div>

      </section>


    </div>

  );

}


export default Blog;