import "../styles/Partners.css";

function Partners() {

  const partners = [
    {
      name: "Urban Estate",
      type: "Real Estate Agency",
    },
    {
      name: "Prime Properties",
      type: "Property Management",
    },
    {
      name: "Skyline Developers",
      type: "Construction Company",
    },
    {
      name: "Global Homes",
      type: "Real Estate Network",
    },
  ];


  return (
    <div className="partners-page">


      {/* Hero */}

      <section className="partners-hero">

        <h1>
          Our Partners
        </h1>

        <p>
          We collaborate with trusted real estate companies
          to deliver better property solutions worldwide.
        </p>

      </section>



      {/* Partners */}

      <section className="partners-section">

        <h2>
          Trusted By Industry Leaders
        </h2>


        <div className="partners-grid">

          {partners.map((partner, index) => (

            <div 
              className="partner-card" 
              key={index}
            >

              <div className="partner-logo">
                🏢
              </div>


              <h3>
                {partner.name}
              </h3>


              <p>
                {partner.type}
              </p>

            </div>

          ))}

        </div>

      </section>



      {/* Benefits */}

      <section className="partner-benefits">

        <h2>
          Why Partner With PropertyPro?
        </h2>


        <div className="benefits-grid">


          <div>
            <h3>
              📈 Grow Your Business
            </h3>

            <p>
              Reach more customers and increase your
              property opportunities.
            </p>
          </div>


          <div>
            <h3>
              🔗 Powerful Network
            </h3>

            <p>
              Connect with professionals across
              the real estate industry.
            </p>
          </div>


          <div>
            <h3>
              🚀 Advanced Technology
            </h3>

            <p>
              Use modern tools to manage properties
              efficiently.
            </p>
          </div>


        </div>


      </section>



      {/* CTA */}

      <section className="partner-cta">

        <h2>
          Become Our Partner
        </h2>

        <p>
          Join PropertyPro and build the future
          of real estate together.
        </p>


        <button>
          Contact Partnership Team
        </button>


      </section>


    </div>
  );
}


export default Partners;