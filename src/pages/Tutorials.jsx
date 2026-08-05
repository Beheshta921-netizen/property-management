import "../styles/Tutorials.css";
import {
  FaPlayCircle,
  FaClock,
  FaSignal,
  FaVideo,
  FaExternalLinkAlt
} from "react-icons/fa";

function Tutorials() {

  const tutorials = [
    {
      title: "Getting Started with PropertyPro",
      duration: "14 min",
      level: "Beginner",
      thumbnail: "https://img.youtube.com/vi/JJJD7dHcOdc/maxresdefault.jpg",
      link: "https://youtu.be/JJJD7dHcOdc?si=NL7f-d9l12e_dH38"
    },
    {
      title: "Managing Rental Properties",
      duration: "18 min",
      level: "Intermediate",
      thumbnail: "https://img.youtube.com/vi/Ic0IAtYosqE/maxresdefault.jpg",
      link: "https://youtu.be/Ic0IAtYosqE?si=yNeAIHGY28hnDWVO"
    },
    {
      title: "Analytics & Reports",
      duration: "20 min",
      level: "Advanced",
      thumbnail: "https://img.youtube.com/vi/CG-NbbszqfM/maxresdefault.jpg",
      link: "https://youtu.be/CG-NbbszqfM?si=n7_i6S3OFYKVpD_X"
    }
  ];

  return (

    <div className="tutorial-page">

      {/* HERO */}

      <div className="tutorial-hero">

        <h1>PropertyPro Academy</h1>

        <p>
          Learn PropertyPro with professionally curated tutorials,
          practical demonstrations, and expert guidance.
        </p>

        <div className="tutorial-buttons">

          <button className="tutorial-btn">
            Start Learning
          </button>

          <button className="tutorial-btn">
            Browse Courses
          </button>

        </div>

      </div>

      {/* Tutorials */}

      <section className="tutorial-section">

        <div className="tutorial-title">

          <h2>Featured Tutorials</h2>

          <p>
            Master every part of PropertyPro through guided lessons.
          </p>

        </div>

        <div className="tutorial-grid">

          {tutorials.map((tutorial, index) => (

            <div className="tutorial-card" key={index}>

              <div className="video-thumbnail">

                <img
                  src={tutorial.thumbnail}
                  alt={tutorial.title}
                />

                <FaPlayCircle className="play-icon" />

              </div>

              <div className="tutorial-content">

                <h3>{tutorial.title}</h3>

                <div className="tutorial-meta">

                  <span>
                    <FaClock />
                    {tutorial.duration}
                  </span>

                  <span>
                    <FaSignal />
                    {tutorial.level}
                  </span>

                </div>

                <a
                  href={tutorial.link}
                  target="_blank"
                  rel="noreferrer"
                >

                  <button>

                    Watch Tutorial

                    <FaExternalLinkAlt />

                  </button>

                </a>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* Stats */}

      <div className="tutorial-stats">

        <div className="tutorial-stat">
          <h2>150+</h2>
          <p>Video Lessons</p>
        </div>

        <div className="tutorial-stat">
          <h2>30 hrs</h2>
          <p>Learning Content</p>
        </div>

        <div className="tutorial-stat">
          <h2>20K</h2>
          <p>Students</p>
        </div>

        <div className="tutorial-stat">
          <h2>4.9★</h2>
          <p>Average Rating</p>
        </div>

      </div>

      {/* CTA */}

      <div className="tutorial-cta">

        <h2>Become a PropertyPro Expert</h2>

        <p>
          Join thousands of property managers learning smarter,
          faster, and more efficiently.
        </p>

        <button>

          <FaVideo />

          &nbsp;

          Explore All Tutorials

        </button>

      </div>

    </div>

  );

}

export default Tutorials;