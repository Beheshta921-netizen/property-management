import "../styles/Enterprise.css";

import {
FaGlobe,
FaShieldAlt,
FaServer,
FaUsersCog,
FaDatabase,
FaChartLine,
FaCode,
FaHeadset,
FaCheckCircle,
FaArrowRight
} from "react-icons/fa";


function Enterprise(){


const capabilities=[

{
icon:<FaGlobe/>,
title:"Global Portfolio Management",
text:"Operate thousands of properties across multiple locations from one command center."
},

{
icon:<FaServer/>,
title:"Enterprise Infrastructure",
text:"Reliable architecture designed for large organizations."
},

{
icon:<FaUsersCog/>,
title:"Advanced Team Controls",
text:"Manage departments, roles and permissions securely."
},

{
icon:<FaDatabase/>,
title:"Centralized Data Platform",
text:"All your property intelligence in one unified system."
},

{
icon:<FaCode/>,
title:"API & Integrations",
text:"Connect PropertyPro with your existing business tools."
},

{
icon:<FaShieldAlt/>,
title:"Enterprise Security",
text:"Protect your data with advanced security controls."
}

];


const benefits=[

"Unlimited properties",

"Dedicated account manager",

"Custom integrations",

"Advanced security controls",

"Enterprise analytics",

"Priority 24/7 support"

];



return(

<div className="enterprise-page">



{/* HERO */}


<section className="enterprise-hero">


<div className="enterprise-content">


<span>
ENTERPRISE PLATFORM
</span>


<h1>

The Operating Infrastructure
For Global Property Companies

</h1>


<p>

Manage complex portfolios, multiple teams,
and thousands of properties with a secure
enterprise-grade platform.

</p>



<div className="enterprise-buttons">


<button>
Request Demo
</button>


<button className="dark-btn">
Contact Sales
</button>


</div>


</div>





<div className="enterprise-panel">


<div className="panel-header">

<h3>
Global Operations
</h3>

<span>
LIVE
</span>

</div>




<div className="world-card">


<FaGlobe/>


<h2>
42 Countries
</h2>


<p>
Connected Property Network
</p>


</div>




<div className="enterprise-metrics">


<div>

<h2>
25K+
</h2>

<p>
Units
</p>

</div>



<div>

<h2>
99.99%
</h2>

<p>
Reliability
</p>

</div>


</div>



</div>



</section>








{/* TRUST */}


<section className="trust">


<h2>
Built For Organizations That Cannot Slow Down
</h2>



<div>


<div>
<FaShieldAlt/>
<h3>
Enterprise Security
</h3>
<p>
Protect critical property data.
</p>
</div>


<div>
<FaServer/>
<h3>
High Performance
</h3>
<p>
Built for massive operations.
</p>
</div>


<div>
<FaHeadset/>
<h3>
Dedicated Success
</h3>
<p>
Experts supporting your team.
</p>
</div>


</div>


</section>









{/* CAPABILITIES */}


<section className="enterprise-section">


<h2>
Enterprise Capabilities
</h2>


<p>
Everything required to manage large-scale property operations.
</p>



<div className="enterprise-grid">


{

capabilities.map((item,index)=>(


<div className="enterprise-card" key={index}>


<div className="enterprise-icon">

{item.icon}

</div>


<h3>
{item.title}
</h3>


<p>
{item.text}
</p>


</div>


))


}


</div>


</section>









{/* SECURITY */}



<section className="security-section">


<div>


<h2>
Security At Enterprise Scale
</h2>


<p>

Your business data deserves enterprise protection.

</p>


</div>



<div className="security-list">


<p>
✓ Role based access control
</p>


<p>
✓ Data encryption
</p>


<p>
✓ Audit tracking
</p>


<p>
✓ Compliance monitoring
</p>


</div>


</section>









{/* INCLUDED */}



<section className="enterprise-included">


<h2>
Enterprise Includes
</h2>



{

benefits.map((item,index)=>(


<div key={index}>

<FaCheckCircle/>

{item}

</div>


))


}


</section>








{/* CTA */}



<section className="enterprise-cta">


<h2>

Build The Future Of Property Management

</h2>


<p>

Speak with our enterprise team and design your custom solution.

</p>



<button>

Request Enterprise Demo

<FaArrowRight/>

</button>


</section>



</div>


)

}


export default Enterprise;