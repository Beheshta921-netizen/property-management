
import "../styles/Pages.css";
import "../styles/CallUs.css";
import {
  FaPhoneAlt,
  FaHeadset,
  FaGlobe,
  FaClock,
  FaArrowRight,
  FaMapMarkerAlt,
  FaComments,
  FaEnvelope,
  FaCheckCircle
} from "react-icons/fa";

import { Link } from "react-router-dom";

function CallUs() {

const offices=[

{
city:"Head Office",
number:"+1 (800) 123-4567",
time:"24/7 Support"
},

{
city:"Europe Office",
number:"+44 20 1234 5678",
time:"Mon - Fri"
},

{
city:"Asia Pacific",
number:"+92 300 1234567",
time:"24/7 Support"
}

];

const reasons=[

"Immediate assistance from certified specialists",

"Average wait time under 2 minutes",

"24/7 emergency technical support",

"Dedicated account management"

];

return(

<div className="page">

<div className="hero">

  <div className="hero-left">

    <span className="hero-tag">
      📞 24/7 Global Support
    </span>

    <h1>Talk to Our Experts</h1>

    <p>
      Need immediate help? Speak directly with a PropertyPro
      support specialist for technical assistance, billing,
      or account guidance.
    </p>

    <div className="hero-buttons">

      <button className="hero-btn">
        <FaPhoneAlt />
        &nbsp; Call Now
      </button>

      <button className="hero-btn hero-btn-outline">
        View Offices
      </button>

    </div>

  </div>

  <div className="hero-right">

      <div className="support-widget">

          <div className="widget-header">
              Live Support
              <span className="online-dot"></span>
          </div>

          <div className="widget-card">
              <h3>Average Wait</h3>
              <h1>2 min</h1>
          </div>

          <div className="widget-card">
              <h3>Available</h3>
              <h1>24 / 7</h1>
          </div>

          <div className="widget-card">
              <h3>Support Rating</h3>
              <h1>4.9 ★</h1>
          </div>

      </div>

  </div>



<div className="hero-buttons">

<button className="hero-btn">

<FaPhoneAlt />

&nbsp;

Call Now

</button>

<button className="hero-btn hero-btn-outline">

View Offices

</button>

</div>

</div>

<section className="section">

<div className="section-title">

<h2>Global Support Numbers</h2>

<p>

Choose the nearest support center and connect with us instantly.

</p>

</div>

<div className="grid">

{

offices.map((office,index)=>(

<div className="card" key={index}>

<div className="card-icon">

<FaPhoneAlt/>

</div>

<h3>{office.city}</h3>

<h2
style={{
color:"#2563eb",
margin:"15px 0"
}}
>

{office.number}

</h2>

<p>{office.time}</p>

<button className="course-btn">

Call Office

<FaArrowRight/>

</button>

</div>

))

}

</div>

</section>

<section className="section">

<div className="section-title">

<h2>Why Call Us?</h2>

<p>

Our phone support team is ready to solve your problems quickly.

</p>

</div>

<div className="benefits-grid">

{

reasons.map((item,index)=>(

<div className="benefit-card" key={index}>

<FaCheckCircle className="benefit-icon"/>

<span>{item}</span>

</div>

))

}

</div>

</section>
      <section className="section">

        <div className="section-title">

          <h2>More Ways to Reach Us</h2>

          <p>

            Choose the support channel that works best for you.

          </p>

        </div>

        <div className="grid">

          <Link to="/live-chat" className="resource-link">

            <div className="card">

              <div className="card-icon">

                <FaComments/>

              </div>

              <h3>Live Chat</h3>

              <p>

                Chat instantly with a support specialist and get
                answers in real time.

              </p>

            </div>

          </Link>

          <Link to="/email-support" className="resource-link">

            <div className="card">

              <div className="card-icon">

                <FaEnvelope/>

              </div>

              <h3>Email Support</h3>

              <p>

                Send detailed questions and receive a reply
                within 24 hours.

              </p>

            </div>

          </Link>

          <div className="card">

            <div className="card-icon">

              <FaMapMarkerAlt/>

            </div>

            <h3>Office Locations</h3>

            <p>

              Visit one of our global offices or schedule
              an in-person consultation.

            </p>

          </div>

        </div>

      </section>



      <section className="section">

        <div className="section-title">

          <h2>Support Availability</h2>

          <p>

            We're always ready to help whenever you need us.

          </p>

        </div>

        <div className="stats">

          <div className="stat">

            <FaClock
              style={{
                fontSize:"34px",
                color:"#2563eb",
                marginBottom:"15px"
              }}
            />

            <h2>24/7</h2>

            <p>Technical Support</p>

          </div>

          <div className="stat">

            <FaHeadset
              style={{
                fontSize:"34px",
                color:"#2563eb",
                marginBottom:"15px"
              }}
            />

            <h2>2 min</h2>

            <p>Average Wait</p>

          </div>

          <div className="stat">

            <FaGlobe
              style={{
                fontSize:"34px",
                color:"#2563eb",
                marginBottom:"15px"
              }}
            />

            <h2>35+</h2>

            <p>Countries Served</p>

          </div>

          <div className="stat">

            <FaPhoneAlt
              style={{
                fontSize:"34px",
                color:"#2563eb",
                marginBottom:"15px"
              }}
            />

            <h2>1M+</h2>

            <p>Calls Answered</p>

          </div>

        </div>

      </section>



      <div className="cta">

        <h2>

          Speak with a PropertyPro Specialist Today

        </h2>

        <p>

          Whether you need technical guidance, billing assistance,
          or product advice, our experienced team is here to help.

        </p>

        <button>

          <FaPhoneAlt/>

          &nbsp;

          Call Support Now

        </button>

      </div>

    </div>

  );

}

export default CallUs;