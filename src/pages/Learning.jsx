import "../styles/Learning.css";
import {
  FaGraduationCap,
  FaCertificate,
  FaBookOpen,
  FaUsers,
  FaArrowRight,
  FaCheckCircle,
  FaAward,
  FaLaptopCode
} from "react-icons/fa";

function Learning() {

const courses=[
{
icon:<FaBookOpen/>,
title:"Property Management Fundamentals",
level:"Beginner",
lessons:"12 Lessons",
duration:"4 Weeks"
},
{
icon:<FaUsers/>,
title:"Tenant & Lease Management",
level:"Intermediate",
lessons:"18 Lessons",
duration:"6 Weeks"
},
{
icon:<FaLaptopCode/>,
title:"Reports & Analytics",
level:"Advanced",
lessons:"15 Lessons",
duration:"5 Weeks"
}
];

const benefits=[
"Expert-led learning paths",
"Interactive practical lessons",
"Downloadable resources",
"Industry-recognized certificates",
"Progress tracking",
"Lifetime course access"
];

return(

<div className="learning-page">

<div className="learning-hero">

<div>

<span className="academy-tag">
PropertyPro Academy
</span>

<h1>
Master Modern Property Management
</h1>

<p>
Develop real-world property management skills through structured learning paths, practical exercises and professional certifications.
</p>

<div className="hero-buttons">

<button className="hero-primary">
Start Learning
</button>

<button className="hero-secondary">
Browse Courses
</button>

</div>

</div>

<div className="academy-card">

<FaAward/>

<h2>Professional Certification</h2>

<p>
Complete learning paths and earn verified PropertyPro certificates.
</p>

</div>

</div>

<section className="learning-section">

<h2>Learning Paths</h2>

<div className="course-grid">

{courses.map((course,index)=>(

<div className="course-card" key={index}>

<div className="course-icon">
{course.icon}
</div>

<span className="level-badge">
{course.level}
</span>

<h3>{course.title}</h3>

<p>{course.lessons}</p>

<p>{course.duration}</p>

<button>

Start Course

<FaArrowRight/>

</button>

</div>

))}

</div>

</section>

<section className="learning-section">

<h2>Why Learn With PropertyPro?</h2>

<div className="benefits-grid">

{benefits.map((item,index)=>(

<div className="benefit-card" key={index}>

<FaCheckCircle/>

<span>{item}</span>

</div>

))}

</div>

</section>

<section className="stats-row">

<div>
<h2>40+</h2>
<p>Courses</p>
</div>

<div>
<h2>300+</h2>
<p>Lessons</p>
</div>

<div>
<h2>10K+</h2>
<p>Students</p>
</div>

<div>
<h2>98%</h2>
<p>Completion Rate</p>
</div>

</section>

<div className="certificate-banner">

<FaCertificate/>

<h2>
Become PropertyPro Certified
</h2>

<p>
Complete your learning path, pass the final assessment and receive an industry-recognized certification.
</p>

<button>
Get Certified
</button>

</div>

</div>

);

}

export default Learning;