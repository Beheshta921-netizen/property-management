import { useState } from "react";
import "../styles/Signup.css";


function Signup(){


const [step,setStep]=useState(1);


const [form,setForm]=useState({

username:"",
email:"",
password:"",
confirmPassword:"",

company:"",
business:"",
properties:"",

plan:"Professional"

});

const handleChange=(e)=>{

setForm({

...form,

[e.target.name]:e.target.value

});

};

const nextStep=()=>{


if(step < 3){

setStep(step+1);

}

};


const previousStep=()=>{


if(step > 1){

setStep(step-1);

}

};

const submitSignup=(e)=>{


e.preventDefault();


console.log(form);


// later send to backend API


alert("Account setup completed");

};

return(

<div className="signup-page">


{/* LEFT SIDE PRODUCT PREVIEW */}

<div className="signup-left">


<div className="brand">
PropertyPro
</div>


<h1>
The Future Of
<br/>
Property Management
</h1>


<p>
Manage rentals, tenants and finances
from one intelligent platform.
</p>



<div className="dashboard-preview">


<div className="dashboard-top">

<h3 className="dashboard-title">
Dashboard
</h3>


<span className="status-badge">
Live
</span>


</div>



<div className="stats-box">


<div>

<h3>
245
</h3>

<p>
Properties
</p>

</div>



<div>

<h3>
98%
</h3>

<p>
Occupancy
</p>

</div>



<div>

<h3>
$48K
</h3>

<p>
Revenue
</p>

</div>


</div>



<div className="chart">

<div className="bar one"></div>

<div className="bar two"></div>

<div className="bar three"></div>

<div className="bar four"></div>

</div>



<div className="floating-card">

<span>
⭐ Rent Collected
</span>


<strong>
$24,850
</strong>


</div>


</div>


</div>


{/* SIGNUP FORM */}

<div className="signup-card wizard">

{/* PROGRESS */}


<div className="progress">


<div className={step>=1?"active":""}>
1
</div>


<div className={step>=2?"active":""}>
2
</div>


<div className={step>=3?"active":""}>
3
</div>


</div>

<h2>

{

step===1 && "Create Your Account"

}

{

step===2 && "Tell Us About Your Business"

}


{

step===3 && "Choose Your Plan"

}


</h2>



<p className="subtitle">

Step {step} of 3

</p>





<form onSubmit={submitSignup}>


{


step===1 &&


<div className="wizard-content">


<label>
Username
</label>


<input

name="username"

placeholder="Your name"

value={form.username}

onChange={handleChange}

/>



<label>
Email Address
</label>


<input

name="email"

type="email"

placeholder="company@email.com"

value={form.email}

onChange={handleChange}

/>

<label>
Password
</label>


<input

name="password"

type="password"

placeholder="Create password"

value={form.password}

onChange={handleChange}

/>

<label>
Confirm Password
</label>


<input

name="confirmPassword"

type="password"

placeholder="Confirm password"

value={form.confirmPassword}

onChange={handleChange}

/>


</div>


}

{


step===2 &&


<div className="wizard-content">


<label>
Company Name
</label>


<input

name="company"

placeholder="Your company"

value={form.company}

onChange={handleChange}

/>

<label>
Business Type
</label>


<select

name="business"

value={form.business}

onChange={handleChange}

>

<option>
Select type
</option>

<option>
Individual Landlord
</option>

<option>
Property Manager
</option>

<option>
Real Estate Agency
</option>


</select>

<label>
Number Of Properties
</label>


<select

name="properties"

value={form.properties}

onChange={handleChange}

>


<option>
Select range
</option>

<option>
1 - 20
</option>

<option>
20 - 100
</option>

<option>
100+
</option>


</select>


</div>


}







{


step===3 &&


<div className="plans">


<div

className={form.plan==="Starter"?"plan selected":"plan"}

onClick={()=>setForm({...form,plan:"Starter"})}

>

<h3>
Starter
</h3>

<h2>
$29
</h2>

<p>
Small landlords
</p>


</div>





<div

className={form.plan==="Professional"?"plan selected":"plan"}

onClick={()=>setForm({...form,plan:"Professional"})}

>

<h3>
Professional
</h3>


<h2>
$79
</h2>


<p>
Growing companies
</p>


</div>

<div

className={form.plan==="Enterprise"?"plan selected":"plan"}

onClick={()=>setForm({...form,plan:"Enterprise"})}

>
<h3>
Enterprise
</h3>


<h2>
Custom
</h2>


<p>
Large organizations
</p>


</div>


</div>


}

<div className="wizard-buttons">


{

step>1 &&

<button

type="button"

className="back"

onClick={previousStep}

>

Back

</button>

}
{

step<3 &&


<button

type="button"

onClick={nextStep}

>

Continue

</button>


}

{

step===3 &&


<button

type="submit"

>

Create Account

</button>


}



</div>



</form>



</div>



</div>


);


}



export default Signup;