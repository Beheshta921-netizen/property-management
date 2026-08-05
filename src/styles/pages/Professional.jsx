import "../styles/Professional.css";

import {
FaChartLine,
FaUsers,
FaRobot,
FaBuilding,
FaWallet,
FaTasks,
FaCheckCircle,
FaArrowRight
} from "react-icons/fa";


function Professional(){


const features=[

{
icon:<FaRobot/>,
title:"Smart Automation",
text:"Automate rent reminders, tenant communication and daily operations."
},

{
icon:<FaChartLine/>,
title:"Portfolio Intelligence",
text:"Track revenue, occupancy and business performance instantly."
},

{
icon:<FaUsers/>,
title:"Team Collaboration",
text:"Give your employees the right access and manage workflows."
},

{
icon:<FaBuilding/>,
title:"Property Scaling",
text:"Grow your portfolio without increasing complexity."
},

{
icon:<FaWallet/>,
title:"Financial Control",
text:"Monitor income, expenses and profitability."
},

{
icon:<FaTasks/>,
title:"Operations Hub",
text:"Manage every task from one powerful dashboard."
}

];


const benefits=[

"Manage hundreds of properties",

"Advanced analytics dashboard",

"Unlimited team members",

"Automated workflows",

"Priority business support",

"Professional reporting tools"

];


return(

<div className="professional-page">



{/* HERO */}


<section className="pro-hero">


<div className="pro-content">


<span className="pro-badge">
PROFESSIONAL PLAN
</span>


<h1>

The Operating System
For Growing Property Businesses

</h1>


<p>

Scale your property operations with automation,
advanced analytics, and powerful collaboration tools
built for professional managers.

</p>



<div className="pro-buttons">


<button>
Start Free Trial
</button>


<button className="outline">
Book Demo
</button>


</div>


</div>





{/* DASHBOARD MOCKUP */}


<div className="dashboard">


<div className="dashboard-top">

<h3>
PropertyPro Analytics
</h3>


<span>
Live
</span>

</div>



<div className="metric-row">


<div className="metric">

<p>
Revenue
</p>

<h2>
$248K
</h2>

</div>



<div className="metric">

<p>
Occupancy
</p>

<h2>
96%
</h2>

</div>


</div>




<div className="chart-box">


<div className="bar one"></div>

<div className="bar two"></div>

<div className="bar three"></div>

<div className="bar four"></div>


</div>




<div className="dashboard-bottom">


<div>
Tenants
<strong>
850
</strong>
</div>


<div>
Properties
<strong>
240
</strong>
</div>


<div>
Growth
<strong>
+32%
</strong>
</div>


</div>



</div>



</section>







{/* NUMBERS */}



<section className="pro-stats">


<div>
<h2>
500+
</h2>
<p>
Units Managed
</p>
</div>


<div>
<h2>
40%
</h2>
<p>
Less Admin Work
</p>
</div>


<div>
<h2>
3x
</h2>
<p>
Faster Reporting
</p>
</div>


<div>
<h2>
24/7
</h2>
<p>
Support
</p>
</div>


</section>









{/* FEATURES */}



<section className="pro-section">


<h2>
Everything Your Property Business Needs
</h2>


<p className="subtitle">
Powerful tools designed for professional growth.
</p>



<div className="pro-grid">


{

features.map((item,index)=>(


<div className="pro-card" key={index}>


<div className="pro-icon">

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









{/* COMPARISON */}



<section className="comparison">


<h2>
Move Beyond Traditional Management
</h2>



<div className="compare-grid">


<div>

<h3>
Traditional Way
</h3>


<p>
❌ Spreadsheet chaos
</p>

<p>
❌ Manual payments
</p>

<p>
❌ No business insights
</p>

<p>
❌ Slow communication
</p>


</div>



<div className="modern">


<h3>
PropertyPro Professional
</h3>


<p>
✓ Intelligent dashboard
</p>

<p>
✓ Automated operations
</p>

<p>
✓ Real-time analytics
</p>

<p>
✓ Team workflows
</p>


</div>


</div>


</section>









{/* INCLUDED */}



<section className="included">


<h2>
Professional Includes
</h2>


<div>


{

benefits.map((item,index)=>(


<p key={index}>

<FaCheckCircle/>

{item}

</p>


))


}


</div>


</section>









{/* CTA */}


<section className="pro-cta">


<h2>
Ready To Scale Your Portfolio?
</h2>


<p>
Upgrade to Professional and run your properties like a modern business.
</p>


<button>

Upgrade Now

<FaArrowRight/>

</button>


</section>





</div>


)

}


export default Professional;