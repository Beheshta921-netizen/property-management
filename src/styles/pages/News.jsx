import "../styles/News.css";

function News() {

  const newsItems = [
    {
      title: "PropertyPro Expands Globally",
      date: "July 2026",
      description:
        "PropertyPro has expanded its services to help more customers manage properties worldwide."
    },
    {
      title: "New Property Management Features",
      date: "June 2026",
      description:
        "We launched new tools that make property management faster and easier."
    },
    {
      title: "PropertyPro Partners With Leading Agencies",
      date: "May 2026",
      description:
        "Our new partnerships help provide better solutions for property owners."
    }
  ];


  return (
    <div className="news-page">


      {/* Hero */}

      <section className="news-hero">

        <h1>
          Latest News
        </h1>

        <p>
          Stay updated with PropertyPro announcements,
          company updates, and industry insights.
        </p>

      </section>



      {/* News Cards */}

      <section className="news-section">

        <h2>
          Recent Updates
        </h2>


        <div className="news-grid">

          {newsItems.map((item, index) => (

            <div 
              className="news-card" 
              key={index}
            >

              <div className="news-image">
                📰
              </div>


              <div className="news-content">

                <span>
                  {item.date}
                </span>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>


                <button>
                  Read More
                </button>

              </div>


            </div>

          ))}

        </div>

      </section>


    </div>
  );
}

export default News;