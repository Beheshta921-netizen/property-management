import "../styles/TrustedCompanies.css";

function TrustedCompanies() {

  const logos = [
    "Apple",
    "Google",
    "Microsoft",
    "Airbnb",
    "Stripe",
    "Slack",
    "Dropbox",
    "Spotify"
  ];

  return (

    <section className="trusted">

      <div className="logo-track">

        {[...logos, ...logos].map((logo, index) => (

          <div
            key={index}
            className="logo"
          >
            {logo}
          </div>

        ))}

      </div>

    </section>

  );

}

export default TrustedCompanies;