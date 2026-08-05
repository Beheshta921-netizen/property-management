import "../styles/Pages.css";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaComments,
  FaEnvelope,
  FaBookOpen,
  FaArrowRight,
  FaHeadset,
  FaQuestionCircle,
  FaClock,
  FaStar
} from "react-icons/fa";

function SupportCenter() {

  const supportOptions = [
    {
      title: "Call Us",
      icon: <FaPhoneAlt />,
      desc: "Speak directly with our support engineers.",
      link: "/call-us"
    },
    {
      title: "Live Chat",
      icon: <FaComments />,
      desc: "Get instant help from our online specialists.",
      link: "/live-chat"
    },
    {
      title: "Email Support",
      icon: <FaEnvelope />,
      desc: "Send us your questions anytime.",
      link: "/email-support"
    },
    {
      title: "Documentation",
      icon: <FaBookOpen />,
      desc: "Browse guides and tutorials.",
      link: "/documentation"
    }
  ];

  const faqs = [
    "How do I add a new property?",
    "How can I reset my password?",
    "Where can I manage tenants?",
    "How do I export reports?"
  ];

  return (
    <div className="page">

      {/* Hero */}

      <section className="support-hero">

        <div>

          <h1>Support Center</h1>

          <p>
            Welcome to PropertyPro Support.
            Choose the support option that works
            best for you and we'll help you quickly.
          </p>

        </div>

        <div className="support-badge">

          <FaHeadset />

          <h2>24/7</h2>

          <span>Support Available</span>

        </div>

      </section>

      {/* Quick Actions */}

      <section className="section">

        <h2 className="section-heading">
          Quick Support
        </h2>

        <div className="support-grid">

          {supportOptions.map((item, index) => (

            <Link
              key={index}
              to={item.link}
              className="support-box"
            >

              <div className="support-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

              <div className="support-link">

                Open

                <FaArrowRight />

              </div>

            </Link>

          ))}

        </div>

      </section>

      {/* FAQ */}

      <section className="section">

        <h2 className="section-heading">
          Frequently Asked Questions
        </h2>

        <div className="faq-list">

          {faqs.map((faq, index) => (

            <div
              className="faq-item"
              key={index}
            >

              <FaQuestionCircle className="faq-icon" />

              <p>{faq}</p>

              <FaArrowRight />

            </div>

          ))}

        </div>

      </section>

      {/* Statistics */}

      <section className="support-bottom">

        <div className="support-card">

          <FaClock />

          <h3>Average Response</h3>

          <h2>2 Minutes</h2>

        </div>

        <div className="support-card">

          <FaHeadset />

          <h3>Availability</h3>

          <h2>24 / 7</h2>

        </div>

        <div className="support-card">

          <FaStar />

          <h3>Customer Rating</h3>

          <h2>4.9 / 5</h2>

        </div>

      </section>

    </div>
  );
}

export default SupportCenter;