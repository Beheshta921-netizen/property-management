import "../styles/Pages.css";
import {
  FaCheck,
  FaStar,
  FaArrowRight,
  FaQuestionCircle
} from "react-icons/fa";

function Pricing() {

const plans=[

{
name:"Starter",
price:"$29",
popular:false,
features:[
"Up to 20 Properties",
"Tenant Management",
"Email Support",
"Basic Reports"
]
},

{
name:"Professional",
price:"$79",
popular:true,
features:[
"Unlimited Properties",
"Analytics Dashboard",
"Live Chat Support",
"Automation Tools"
]
},

{
name:"Enterprise",
price:"Custom",
popular:false,
features:[
"Unlimited Everything",
"Dedicated Manager",
"API Access",
"Custom Integrations"
]
}

];

const faqs=[
"Can I upgrade anytime?",
"Is there a free trial?",
"Can I cancel my subscription?",
"Do you offer discounts for yearly plans?"
];

return(

<div className="page">

<div className="hero">

<h1>Simple Pricing</h1>

<p>

Choose the perfect plan for your
property management business.

</p>

</div>

<section className="section">

<div className="billing-toggle">

<button className="active">

Monthly

</button>

<button>

Yearly

</button>

</div>

<div className="pricing-grid">

{

plans.map((plan,index)=>(

<div
className={`pricing-card ${plan.popular?"popular":""}`}
key={index}
>

{plan.popular &&

<div className="popular-badge">

<FaStar/>

Most Popular

</div>

}

<h2>

{plan.name}

</h2>

<h1>

{plan.price}

</h1>

<p>

{plan.price!=="Custom" && "/month"}

</p>

<div className="price-features">

{

plan.features.map((item,i)=>(

<div
className="price-item"
key={i}
>

<FaCheck/>

{item}

</div>

))

}

</div>

<button>

Get Started

</button>

</div>

))

}

</div>

</section>

<section className="section">

<div className="section-title">

<h2>

Frequently Asked Questions

</h2>

</div>

<div className="faq-list">

{

faqs.map((item,index)=>(

<div
className="faq-item"
key={index}
>

<FaQuestionCircle className="faq-icon"/>

<p>{item}</p>

</div>

))

}

</div>

</section>

<div className="cta">

<h2>

Need a Custom Solution?

</h2>

<p>

Contact our sales specialists for a
tailored PropertyPro plan.

</p>

<button>

Contact Sales

<FaArrowRight/>

</button>

</div>

</div>

);

}

export default Pricing;