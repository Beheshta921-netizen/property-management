import "../styles/LiveChat.css";
import {
  FaComments,
  FaRobot,
  FaUserTie,
  FaPhoneAlt,
  FaEnvelope,
  FaBookOpen,
  FaArrowRight,
  FaCircle,
  FaClock,
  FaHeadset,
  FaStar,
  FaCheckCircle
} from "react-icons/fa";

import { Link } from "react-router-dom";

function LiveChat() {

const agents=[

{
name:"Sarah Wilson",
role:"Sales Specialist",
status:"Online",
time:"Replies in 1 min"
},

{
name:"David Brown",
role:"Technical Support",
status:"Online",
time:"Replies in 2 min"
},

{
name:"Emily Carter",
role:"Billing Specialist",
status:"Busy",
time:"Replies in 6 min"
}

];

const benefits=[

"Average response time under 2 minutes",

"24/7 worldwide support",

"Encrypted & secure conversations",

"Property management specialists",

"No waiting on hold",

"98% first-contact resolution"

];

return(

<div className="chat-page">

{/* HERO */}

<section className="chat-hero">

<div className="hero-left">

<span className="hero-badge">

<FaComments/>

Live Support

</span>

<h1>

Talk to a PropertyPro Expert

</h1>

<p>

Get instant answers from our certified support
specialists. Whether you need technical help,
billing assistance or product guidance, we're
available around the clock.

</p>

<div className="hero-buttons">

<button className="chat-primary">

Start Live Chat

</button>

<button className="chat-secondary">

View FAQs

</button>

</div>

</div>

<div className="chat-preview">

<div className="chat-header">

<div className="chat-avatar">

<FaHeadset/>

</div>

<div>

<h3>

PropertyPro Support

</h3>

<span>

Online Now

</span>

</div>

</div>

<div className="chat-message support">

👋 Hello! Welcome to PropertyPro.

</div>

<div className="chat-message support">

How can we help you today?

</div>

<div className="chat-message user">

I need help managing my properties.

</div>

<div className="chat-message support">

Great! I'll connect you with one of our specialists.

</div>

<div className="chat-input">

Type your message...

</div>

</div>

</section>

{/* AGENTS */}

<section className="chat-section">

<h2>

Support Specialists

</h2>

<p>

Choose the department you'd like to chat with.

</p>

<div className="agent-grid">

{

agents.map((agent,index)=>(

<div className="agent-card" key={index}>

<div className="agent-top">

<div className="agent-avatar">

<FaUserTie/>

</div>

<div>

<h3>

{agent.name}

</h3>

<p>

{agent.role}

</p>

</div>

<span className={`status ${agent.status==="Busy" ? "busy":"online"}`}>

<FaCircle/>

{agent.status}

</span>

</div>

<div className="reply-time">

<FaClock/>

{agent.time}

</div>

<button>

Start Chat

<FaArrowRight/>

</button>

</div>

))

}

</div>

</section>

{/* BENEFITS */}

<section className="chat-section">

<h2>

Why Customers Love Live Chat

</h2>

<div className="benefits-grid">

{

benefits.map((item,index)=>(

<div className="benefit-item" key={index}>

<FaCheckCircle/>

<span>{item}</span>

</div>

))

}

</div>

</section>

{/* OTHER OPTIONS */}

<section className="chat-section">

<h2>

Need Another Support Option?

</h2>

<div className="options-grid">

<Link to="/call-us" className="option-card">

<FaPhoneAlt/>

<h3>

Call Us

</h3>

<p>

Speak directly with a support specialist.

</p>

</Link>

<Link to="/email-support" className="option-card">

<FaEnvelope/>

<h3>

Email Support

</h3>

<p>

Receive a detailed response within 24 hours.

</p>

</Link>

<Link to="/documentation" className="option-card">

<FaBookOpen/>

<h3>

Documentation

</h3>

<p>

Browse detailed guides and tutorials.

</p>

</Link>

</div>

</section>

{/* STATS */}

<section className="chat-stats">

<div>

<h2>2 min</h2>

<p>Average Response</p>

</div>

<div>

<h2>98%</h2>

<p>Resolved First Chat</p>

</div>

<div>

<h2>24/7</h2>

<p>Always Available</p>

</div>

<div>

<h2>4.9★</h2>

<p>Customer Rating</p>

</div>

</section>

{/* CTA */}

<section className="chat-cta">

<FaRobot className="robot"/>

<h2>

Need Help Right Now?

</h2>

<p>

Start chatting with one of our certified
PropertyPro experts and receive assistance
within minutes.

</p>

<button>

<FaComments/>

Start Live Chat

</button>

</section>

</div>

);

}

export default LiveChat;