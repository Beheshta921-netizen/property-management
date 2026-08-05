import "../styles/Pages.css";
import "../styles/Starter.css";

import {
  FaHome,
  FaUsers,
  FaMoneyCheckAlt,
  FaTools,
  FaChartLine,
  FaRocket,
  FaArrowRight,
  FaCheckCircle
} from "react-icons/fa";


function Starter(){

const features=[
"Manage up to 20 properties",
"Tenant & lease management",
"Online rent collection",
"Maintenance tracking",
"Financial reports",
"Email support"
];


return(

<div className="starter-page">


{/* HERO */}

<section className="starter-hero">

<span className="page-badge">
Starter Plan
</span>


<h1>
Everything You Need To Manage Your First Properties
</h1>


<p>
Designed for individual landlords and small property owners.
Manage tenants, collect rent, track maintenance,
and grow your rental business with PropertyPro.
</p>


<div className="hero-buttons">

<button className="hero-btn">
Start Free Trial
</button>


<button className="hero-btn hero-btn-outline">
View Pricing
</button>

</div>


</section>



{/* STATS */}

<section className="section">


<div className="stats">


<div className="stat">

<h2>
20+
</h2>

<p>
Properties
</p>

</div>



<div className="stat">

<h2>
14
</h2>

<p>
Days Free Trial
</p>

</div>



<div className="stat">

<h2>
99.9%
</h2>

<p>
Platform Uptime
</p>

</div>



<div className="stat">

<h2>
5 Min
</h2>

<p>
Setup Time
</p>

</div>


</div>


</section>




{/* PRICE */}


<section className="section">


<div className="starter-price-card">


<div>

<h3>
Monthly Price
</h3>

<h1>
$29
</h1>

<p>
per month
</p>

</div>



<div>

<h3>
Free Trial
</h3>

<h1>
14 Days
</h1>

<p>
No credit card required
</p>

</div>



<div>

<h3>
Setup Time
</h3>

<h1>
5 Min
</h1>

<p>
Ready instantly
</p>

</div>


</div>


</section>





{/* FEATURES */}


<section className="section">


<div className="section-title">

<h2>
Everything Included
</h2>

<p>
Powerful tools to simplify your daily property management.
</p>

</div>



<div className="feature-grid">



<div className="feature-card">

<FaHome/>

<h3>
Property Management
</h3>

<p>
Manage properties from one dashboard.
</p>

</div>



<div className="feature-card">

<FaUsers/>

<h3>
Tenant Management
</h3>

<p>
Track tenants, leases and occupancy.
</p>

</div>



<div className="feature-card">

<FaMoneyCheckAlt/>

<h3>
Rent Collection
</h3>

<p>
Collect rent quickly and securely.
</p>

</div>



<div className="feature-card">

<FaTools/>

<h3>
Maintenance
</h3>

<p>
Monitor repairs and requests.
</p>

</div>



<div className="feature-card">

<FaChartLine/>

<h3>
Reports
</h3>

<p>
View financial performance.
</p>

</div>



<div className="feature-card">

<FaRocket/>

<h3>
Easy Setup
</h3>

<p>
Start managing within minutes.
</p>

</div>



</div>


</section>





{/* INCLUDED */}

<section className="section">


<div className="section-title">

<h2>
Included Features
</h2>

</div>



<div className="check-grid">


{
features.map((item,index)=>(

<div className="check-item" key={index}>

<FaCheckCircle/>

{item}

</div>

))
}


</div>


</section>





{/* CTA */}


<div className="cta">


<h2>
Start Managing Properties Smarter
</h2>


<p>
Join landlords already using PropertyPro.
</p>


<button>

Start Free Trial

<FaArrowRight/>

</button>


</div>



</div>


)

}


export default Starter;