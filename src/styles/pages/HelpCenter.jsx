import "../styles/HelpCenter.css";
import {
  FaSearch,
  FaBookOpen,
  FaComments,
  FaEnvelope,
  FaVideo,
  FaHome,
  FaMoneyBillWave,
  FaBuilding,
  FaUsers,
  FaChartLine,
  FaLock,
  FaArrowRight,
  FaHeadset,
  FaClock,
  FaCheckCircle
} from "react-icons/fa";

function HelpCenter() {

  const services = [
    {
      icon: <FaBookOpen />,
      title: "Knowledge Base",
      text: "Browse hundreds of detailed articles, tutorials and documentation."
    },
    {
      icon: <FaComments />,
      title: "Live Chat",
      text: "Talk instantly with PropertyPro experts whenever you need help."
    },
    {
      icon: <FaEnvelope />,
      title: "Email Support",
      text: "Receive detailed assistance from our technical support team."
    },
    {
      icon: <FaVideo />,
      title: "Video Tutorials",
      text: "Watch professional training videos and master every feature."
    }
  ];

  const topics = [
    { icon: <FaHome />, title: "Getting Started" },
    { icon: <FaMoneyBillWave />, title: "Billing & Payments" },
    { icon: <FaBuilding />, title: "Property Management" },
    { icon: <FaUsers />, title: "Tenant Management" },
    { icon: <FaChartLine />, title: "Reports & Analytics" },
    { icon: <FaLock />, title: "Security & Privacy" }
  ];

  const faqs = [
    "How do I add my first property?",
    "How do I invite my team members?",
    "Can I export reports to Excel?",
    "How do I reset my password?"
  ];

  return (

<div className="help-page">

<div className="help-hero">

<h1>How can we help you?</h1>

<p>

Search our documentation, browse articles,
or contact our support specialists.

</p>

<div className="search-box">

<FaSearch className="search-icon"/>

<input
type="text"
placeholder="Search articles, tutorials, FAQs..."
/>

</div>

</div>

<section className="help-section">

<h2>Support Options</h2>

<div className="support-grid">

{services.map((item,index)=>(

<div className="support-card" key={index}>

<div className="card-icon">

{item.icon}

</div>

<h3>{item.title}</h3>

<p>{item.text}</p>

<button>

Explore

<FaArrowRight/>

</button>

</div>

))}

</div>

</section>

<section className="help-section">

<h2>Popular Categories</h2>

<div className="topics-grid">

{topics.map((topic,index)=>(

<div className="topic-card" key={index}>

<div className="topic-icon">

{topic.icon}

</div>

<h3>{topic.title}</h3>

</div>

))}

</div>

</section>

<section className="support-banner">

<div className="banner-card">

<FaHeadset/>

<h3>24/7 Support</h3>

<p>Our team is available day and night.</p>

</div>

<div className="banner-card">

<FaClock/>

<h3>2 Minute Response</h3>

<p>Average Live Chat response time.</p>

</div>

<div className="banner-card">

<FaCheckCircle/>

<h3>99% Satisfaction</h3>

<p>Trusted by thousands of customers.</p>

</div>

</section>

<section className="help-section">

<h2>Frequently Asked Questions</h2>

<div className="faq-list">

{faqs.map((faq,index)=>(

<div className="faq-item" key={index}>

<span>{faq}</span>

<FaArrowRight/>

</div>

))}

</div>

</section>

<div className="help-cta">

<h2>Still need assistance?</h2>

<p>

Our support engineers are available
24/7 to help your business succeed.

</p>

<button>

Contact Support

</button>

</div>

</div>

  );

}

export default HelpCenter;