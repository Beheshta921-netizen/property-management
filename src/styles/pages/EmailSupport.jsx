import "../styles/Pages.css";
import "../styles/EmailSupport.css";
import {
  FaEnvelope,
  FaPaperPlane,
  FaClock,
  FaCheckCircle,
  FaTicketAlt,
  FaHeadset
} from "react-icons/fa";

function EmailSupport() {

  return (
<div className="email-page">

<div className="email-hero">
  <div className="hero-badge">
  EMAIL SUPPORT
</div>

<h1>Email Support</h1>

<p>

Need assistance? Send us your question and our
support team will get back to you as quickly as possible.

</p>

</div>

<section className="section email-layout">

<div className="email-form-card">

<h2>Send us a Message</h2>

<form className="support-form">

<input
type="text"
placeholder="Full Name"
/>

<input
type="email"
placeholder="Email Address"
/>

<select>

<option>Select a Category</option>
<option>Technical Support</option>
<option>Billing</option>
<option>Property Management</option>
<option>General Inquiry</option>

</select>

<input
type="text"
placeholder="Subject"
/>

<textarea

rows="6"
placeholder="Describe your issue..."

></textarea>

<button type="submit">

<FaPaperPlane />

&nbsp;

Send Message

</button>

</form>

</div>

<div className="email-info">

<div className="info-card">

<div className="card-icon">

<FaClock/>

</div>

<h3>Fast Response</h3>

<p>

Average reply within
24 hours.

</p>

</div>

<div className="info-card">

<div className="card-icon">

<FaTicketAlt/>

</div>

<h3>Ticket Tracking</h3>

<p>

Every request receives
a unique ticket number.

</p>

</div>

<div className="info-card">

<div className="card-icon">

<FaHeadset/>

</div>

<h3>Expert Assistance</h3>

<p>

Dedicated specialists
for every department.

</p>

</div>

</div>

</section>

<section className="section">

<div className="section-title">

<h2>What Happens Next?</h2>

</div>

<div className="benefits-grid">

<div className="benefit-card">

<FaCheckCircle className="benefit-icon"/>

<span>Your email is received instantly.</span>

</div>

<div className="benefit-card">

<FaCheckCircle className="benefit-icon"/>

<span>A support ticket is created automatically.</span>

</div>

<div className="benefit-card">

<FaCheckCircle className="benefit-icon"/>

<span>Our specialists review your request.</span>

</div>

<div className="benefit-card">

<FaCheckCircle className="benefit-icon"/>

<span>You receive updates until your issue is resolved.</span>

</div>

</div>

</section>

<div className="cta">

<h2>

<FaEnvelope />

&nbsp;

Need a Faster Response?

</h2>

<p>

Use Live Chat or Call Us for immediate assistance.

</p>

<button>

Contact Support

</button>

</div>

</div>

  );

}

export default EmailSupport;